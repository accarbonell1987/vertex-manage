import CopyToClipboard from '@/components/CopyToClipboard';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { StreamingDataWithStreamer } from '@/types/streamingData.types';
import { WeekWithData } from '@/types/weeks.types';
import { useState } from 'react';

import FiltersInTable from '@/components/FiltersInTable';
import PaginationInTable from '@/components/PaginationInTable';
import ToolTip from '@/components/ToolTip';
import { Edit } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ConfigurationType } from '@/types/configuration.types';
import { StreamerWithReferals } from '@/types/streamers.types';
import useConfiguration from '../../hooks/useConfiguration';
import { getDynamicData } from '../../utils/functions';

export const DEFAULT_COLUMNS = (configuration: ConfigurationType) => [
  {
    key: 'wahaID',
    title: 'ID de Waha',
    visible: true,
    render: (data: StreamingDataWithStreamer) => <CopyToClipboard text={data.streamer.wahaID} />,
  },
  {
    key: 'wahaName',
    title: 'Nombre de Waha',
    visible: true,
    render: (data: StreamingDataWithStreamer) => <CopyToClipboard text={data.streamer.wahaName} />,
  },
  {
    key: 'name',
    title: 'Nombre',
    visible: false,
    render: (data: StreamingDataWithStreamer) => <CopyToClipboard text={data.streamer.name} />,
  },
  {
    key: 'phoneNumber',
    title: 'Telefono',
    visible: true,
    render: (data: StreamingDataWithStreamer) => <CopyToClipboard text={data.streamer.phoneNumber || '-'} />,
  },
  {
    key: 'bankAccount',
    title: 'Cuenta Bancaria',
    visible: true,
    render: (data: StreamingDataWithStreamer) => {
      let bankAccountNumber = '-';

      if (data.streamer?.paymentMethod === 'MLC') bankAccountNumber = data.streamer.bankAccount || '-';
      if (data.streamer?.paymentMethod === 'cupTransfer') bankAccountNumber = data.streamer.bankAccountCUP || '-';

      return <CopyToClipboard text={bankAccountNumber} />;
    },
  },
  { key: 'baseSalaryIM', title: 'Salario Base (IM)', visible: false, render: (data: StreamingDataWithStreamer) => data.baseSalaryIM },
  {
    key: 'baseSalaryRoom',
    title: 'Salario Base (Habitación)',
    visible: false,
    render: (data: StreamingDataWithStreamer) => data.baseSalaryRoom,
  },
  { key: 'diamondsIM', title: 'Diamantes (IM)', visible: false, render: (data: StreamingDataWithStreamer) => data.diamondsIM },
  { key: 'diamondsRoom', title: 'Diamantes (Habitación)', visible: false, render: (data: StreamingDataWithStreamer) => data.diamondsRoom },
  { key: 'diamondsTotal', title: 'Total Diamantes', visible: false, render: (data: StreamingDataWithStreamer) => data.diamondsTotal },
  {
    key: 'diamondsAndPoints',
    title: 'Diamantes + Puntos',
    visible: false,
    render: (data: StreamingDataWithStreamer) => data.diamondsAndPoints,
  },
  {
    key: 'diamondsPenalties',
    title: 'Penalizaciones',
    visible: false,
    render: (data: StreamingDataWithStreamer) => {
      return <span className={`${data.diamondsPenalties > 0 ? 'text-red-500' : ''}`}>{data.diamondsPenalties}</span>;
    },
  },
  {
    key: 'diamondsComisions',
    title: 'Comisiones',
    visible: false,
    render: (data: StreamingDataWithStreamer) => data.diamondsComisions,
  },
  {
    key: 'rewardOfPoints',
    title: 'Recompensa por Puntos',
    visible: false,
    render: (data: StreamingDataWithStreamer) => data.rewardOfPoints,
  },
  {
    key: 'dailyBonusOfSuperStreamer',
    title: 'Bono Diario Super Streamer',
    visible: false,
    render: (data: StreamingDataWithStreamer) => data.dailyBonusOfSuperStreamer,
  },
  { key: 'roomBonus', title: 'Bono de Sala', visible: false, render: (data: StreamingDataWithStreamer) => data.roomBonus },
  {
    key: 'enchantingGoddessBonus',
    title: 'Bono Diosa Encantadora',
    visible: false,
    render: (data: StreamingDataWithStreamer) => data.enchantingGoddessBonus,
  },
  {
    key: 'numberOfDaysCompleted',
    title: 'Días Completados',
    visible: false,
    render: (data: StreamingDataWithStreamer) => data.numberOfDaysCompleted,
  },
  { key: 'numberOfDaysInMic', title: 'Días en Mic', visible: false, render: (data: StreamingDataWithStreamer) => data.numberOfDaysInMic },
  {
    key: 'streamerSalary',
    title: 'Salario/Penalización/Bono',
    visible: true,
    render: (data: StreamingDataWithStreamer) => {
      const penalizated = !!data.streamerPenalizated;

      return (
        <span>
          ${Number(data.streamerSalary).toFixed(2)}
          {penalizated ? <span className="text-red-500">{` (${Number(data.streamerPenalizated ?? 0).toFixed(2)})`}</span> : ''}
          {data?.referralSalary ? <span className="text-green-500">{` (${Number(data.referralSalary).toFixed(2)})`}</span> : ''}
        </span>
      );
    },
  },
  {
    key: 'salary',
    title: 'Salario Final',
    visible: true,
    render: (data: StreamingDataWithStreamer) => {
      const salary = data.streamerSalary - (data.streamerPenalizated ?? 0) + (data?.referralSalary ?? 0);
      const textColor = salary > data.streamerSalary ? 'text-green-500' : 'text-orange-500';

      return <p className={`${salary === data.streamerSalary ? 'text-black' : textColor}`}>{`$ ${Number(salary).toFixed(2)}`}</p>;
    },
  },
  {
    key: 'salaryInUSDT',
    title: 'USDT',
    visible: true,
    render: (data: StreamingDataWithStreamer) => {
      const salary = data.streamerSalary - (data.streamerPenalizated ?? 0) + (data?.referralSalary ?? 0);

      const paymentTypes = {
        cupTransfer: configuration.cupCardChangeRate,
        cupCash: configuration.cupEffectiveChangeRate,
        MLC: configuration.mlcChangeRate,
      };
      const changeTypeAmount = Number(paymentTypes?.[data.streamer?.paymentMethod ?? 'MLC'] ?? 0);
      const salaryInUSDT =
        data.streamer?.paymentMethod === 'MLC'
          ? `$ ${Number(salary / configuration.mlcChangeRate).toFixed(2)}`
          : `$ ${Number((salary * changeTypeAmount) / 385).toFixed(2)}`;

      const textColor = salary > data.streamerSalary ? 'text-green-500' : 'text-orange-500';
      return <p className={`${salary === data.streamerSalary ? 'text-black' : textColor}`}>{salaryInUSDT}</p>;
    },
  },
  {
    key: 'salaryInCUP',
    title: 'CUP',
    visible: true,
    render: (data: StreamingDataWithStreamer) => {
      const salary = data.streamerSalary - (data.streamerPenalizated ?? 0) + (data?.referralSalary ?? 0);

      const paymentTypes = {
        cupTransfer: configuration.cupCardChangeRate,
        cupCash: configuration.cupEffectiveChangeRate,
        MLC: configuration.mlcChangeRate,
      };
      const paymentMethodType = {
        cupTransfer: { text: 'T', color: 'bg-green-500' },
        cupCash: { text: 'E', color: 'bg-blue-500' },
        MLC: { text: 'MLC', color: 'bg-red-500' },
      };

      const changeTypeAmount = Number(paymentTypes?.[data.streamer?.paymentMethod ?? 'MLC'] ?? 0);
      const salaryInCUP =
        data.streamer?.paymentMethod === 'MLC' ? `$ ${Number(salary).toFixed(2)}` : `$ ${Number(salary * changeTypeAmount).toFixed(2)}`;

      const textColor = salary > data.streamerSalary ? 'text-green-500' : 'text-orange-500';

      return (
        <p className={`${salary === data.streamerSalary ? 'text-black' : textColor}`}>
          <Badge className={paymentMethodType[data.streamer?.paymentMethod ?? 'MLC'].color}>
            {paymentMethodType[data.streamer?.paymentMethod ?? 'MLC'].text}
          </Badge>
          {` ${salaryInCUP}`}
        </p>
      );
    },
  },
  {
    key: 'agencySalary',
    title: 'Agencia',
    visible: true,
    render: (data: StreamingDataWithStreamer) => {
      const salary = data.agencySalary + (data.streamerPenalizated ?? 0) - (data?.referralSalary ?? 0);
      const textColor = salary > data.agencySalary ? 'text-green-500' : 'text-orange-500';

      return <span className={`${salary === data.agencySalary ? 'text-black' : textColor}`}>{`$ ${Number(salary).toFixed(2)}`}</span>;
    },
  },
];

const StreamingDataTable = ({ week, onEdit }: Readonly<{ week: WeekWithData; onEdit: (streamer: StreamerWithReferals) => void }>) => {
  const { configuration } = useConfiguration();
  const columnsConfiguration = DEFAULT_COLUMNS(configuration);

  const [visibleColumns, setVisibleColumns] = useState(columnsConfiguration.filter((col) => col.visible).map((col) => col.key));

  const [rowsPerPage, setRowsPerPage] = useState(30);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(week.data.length / rowsPerPage);

  const dataWithDynamic = getDynamicData(week.data, configuration);
  const paginatedData = dataWithDynamic.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const filteredColumns = columnsConfiguration.filter((col) => visibleColumns.includes(col.key));

  return (
    <div className="flex flex-col gap-4">
      <FiltersInTable
        defaultColumns={columnsConfiguration}
        visibleColumns={visibleColumns}
        rowsPerPage={rowsPerPage}
        setVisibleColumns={setVisibleColumns}
        setRowsPerPage={setRowsPerPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="overflow-auto w-full">
        <Table className="min-w-max">
          <TableHeader>
            <TableRow>
              {filteredColumns.map((column) => (
                <TableHead key={column.key}>{column.title}</TableHead>
              ))}
              <TableHead className="text-center">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((data) => (
              <TableRow key={`${data.id}-${data.streamer.wahaID}`} className={data.streamerSalary > 0 ? '' : 'bg-gray-100'}>
                {filteredColumns.map((column) => (
                  <TableCell key={`${data.streamer.wahaID}-${column.key}`}>{column.render(data)}</TableCell>
                ))}
                <TableCell className="flex gap-2 justify-center">
                  <ToolTip content="Editar">
                    <Button onClick={() => onEdit(data.streamer)} className="cursor-pointer">
                      <Edit />
                    </Button>
                  </ToolTip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <PaginationInTable currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default StreamingDataTable;
