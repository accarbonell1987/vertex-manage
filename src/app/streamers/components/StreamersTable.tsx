import CopyToClipboard from '@/components/CopyToClipboard';
import ToolTip from '@/components/ToolTip';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { StreamerWithReferals } from '@/types/streamers.types';
import { Edit, Link } from 'lucide-react';
import { useState } from 'react';
import StreamerDeleteAlert from './StreamerDeleteAlert';

const DEFAULT_COLUMNS = [
  { key: 'wahaID', title: 'Waha ID', visible: true, render: (s: StreamerWithReferals) => <CopyToClipboard text={s.wahaID} /> },
  { key: 'wahaName', title: 'Waha Nick', visible: true, render: (s: StreamerWithReferals) => <CopyToClipboard text={s.wahaName} /> },
  { key: 'name', title: 'Nombre', visible: true, render: (s: StreamerWithReferals) => <CopyToClipboard text={s.name} /> },
  {
    key: 'phoneNumber',
    title: 'Teléfono',
    visible: false,
    render: (s: StreamerWithReferals) => (s.phoneNumber ? <CopyToClipboard text={s.phoneNumber} /> : '-'),
  },
  {
    key: 'bankAccount',
    title: 'Cuenta Bancaria',
    visible: false,
    render: (s: StreamerWithReferals) => (s.bankAccount ? <CopyToClipboard text={s.bankAccount} /> : '-'),
  },
  {
    key: 'allowInRoster',
    title: 'Cotiza en Nómina',
    visible: false,
    render: (s: StreamerWithReferals) => (
      <Badge className={s.allowInRoster ? 'bg-green-600' : 'bg-red-600'}>{s.allowInRoster ? 'SÍ' : 'NO'}</Badge>
    ),
  },
  {
    key: 'applyPenalties',
    title: 'Aplica Penalizaciones',
    visible: false,
    render: (s: StreamerWithReferals) => (
      <Badge className={s.applyPenalties ? 'bg-green-600' : 'bg-red-600'}>{s.applyPenalties ? 'SÍ' : 'NO'}</Badge>
    ),
  },
  {
    key: 'createdAt',
    title: 'Fecha de Creación',
    visible: false,
    render: (s: StreamerWithReferals) => new Date(s.createdAt).toLocaleDateString(),
  },
  {
    key: 'referals',
    title: 'Referidos',
    visible: true,
    render: (s: StreamerWithReferals) => (
      <Button className={s.referals.length > 0 ? 'bg-green-200 hover:bg-green-300 cursor-pointer' : ''} variant="secondary">
        <Link />
        {s.referals.length}
      </Button>
    ),
  },
];

const StreamersTable = ({
  streamers,
  selectedStreamer,
  onRefresh,
  onEdit,
  onSelect,
}: Readonly<{
  streamers: StreamerWithReferals[];
  selectedStreamer: StreamerWithReferals | null;
  onRefresh: () => void;
  onEdit: (streamer: StreamerWithReferals) => void;
  onSelect: (streamer: StreamerWithReferals) => void;
}>) => {
  const [visibleColumns, setVisibleColumns] = useState(DEFAULT_COLUMNS.filter((c) => c.visible).map((c) => c.key));
  const [rowsPerPage, setRowsPerPage] = useState(30);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(streamers.length / rowsPerPage);
  const paginatedStreamers = streamers.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
  const filteredColumns = DEFAULT_COLUMNS.filter((col) => visibleColumns.includes(col.key));

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Columnas Visibles</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {DEFAULT_COLUMNS.map((column) => (
              <DropdownMenuCheckboxItem
                key={column.key}
                checked={visibleColumns.includes(column.key)}
                onCheckedChange={() =>
                  setVisibleColumns((prev) => (prev.includes(column.key) ? prev.filter((k) => k !== column.key) : [...prev, column.key]))
                }
              >
                {column.title}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Select
          value={String(rowsPerPage)}
          onValueChange={(val) => {
            setRowsPerPage(Number(val));
            setCurrentPage(1);
          }}
        >
          <SelectTrigger className="w-36">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {[10, 20, 30, 50].map((num) => (
              <SelectItem key={num} value={String(num)}>
                {num} Registros
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="overflow-auto w-full">
        <Table className="min-w-max">
          <TableHeader>
            <TableRow>
              {filteredColumns.map((col) => (
                <TableHead key={col.key} className="text-center">
                  {col.title}
                </TableHead>
              ))}
              <TableHead className="text-center">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedStreamers.map((streamer) => (
              <TableRow
                key={streamer.id}
                onClick={() => onSelect(streamer)}
                className={streamer.id === selectedStreamer?.id ? 'bg-gray-100' : ''}
              >
                {filteredColumns.map((col) => (
                  <TableCell key={col.key} className="text-start">
                    {col.render(streamer)}
                  </TableCell>
                ))}
                <TableCell className="flex gap-2 justify-center">
                  {/* <ToolTip content="Detalles">
										<Button className="cursor-pointer bg-blue-200 hover:bg-blue-300" variant="secondary" size="icon">
											<Eye />
										</Button>
									</ToolTip> */}
                  <ToolTip content="Editar">
                    <Button onClick={() => onEdit(streamer)} className="cursor-pointe">
                      <Edit />
                    </Button>
                  </ToolTip>
                  <ToolTip content="Eliminar">
                    <StreamerDeleteAlert streamer={streamer} onRefresh={onRefresh} />
                  </ToolTip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination className="mt-4 justify-center sm:justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((p) => p - 1)}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>

            {(() => {
              const startPage = Math.max(1, Math.min(currentPage - 1, totalPages - 2));
              const pagesToShow = Array.from({ length: Math.min(3, totalPages) }, (_, i) => startPage + i);
              return pagesToShow.map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink isActive={currentPage === page} onClick={() => setCurrentPage(page)}>
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ));
            })()}
            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage((p) => p + 1)}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default StreamersTable;
