import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import useStoreConfiguration from '@/context/useStoreConfiguration';
import { getStringNumber } from '@/lib/utils';
import { PaymentType } from '@/types/common.types';
import { WeekWithData } from '@/types/weeks.types';
import {
  Church,
  CircleDollarSign,
  CirclePercent,
  ContactRound,
  DollarSign,
  Gem,
  Landmark,
  ShieldUser,
  Speech,
  TestTubeDiagonal,
  Trophy,
} from 'lucide-react';
import useConfiguration from '../../hooks/useConfiguration';
import {
  getPreRosterTotalsInChangeType,
  getPreRosterTotalsInWeekByColumn,
  getPreRosterTotalsSalary,
  getTotalDoneInWeekByColumn,
} from '../../utils/functions';
import { PaymentTypeMapping } from '../../utils/statics';

interface StreamingWeekRosterProps {
  week: WeekWithData;
}

const StreamingWeekRoster = ({ week }: StreamingWeekRosterProps) => {
  const { configuration } = useConfiguration();
  const { prize, expenses } = useStoreConfiguration();

  const totalStreamersSalaryDiscounts = getPreRosterTotalsInWeekByColumn(week.data, 'streamerPenalizated');
  const totalStreamersSalaryBonus = getPreRosterTotalsInWeekByColumn(week.data, 'referralSalary');
  const totalStreamersSalary = getPreRosterTotalsInWeekByColumn(week.data, 'streamerSalary');
  const totalStreamersSalaryUSDT = getPreRosterTotalsSalary(week.data, configuration);

  const totalDiamondsAndPoints = getPreRosterTotalsInWeekByColumn(week.data, 'diamondsAndPoints');
  const totalDiamondsAndPointsDiscounts = getPreRosterTotalsInWeekByColumn(week.data, 'diamondsPenalties');

  const totalAgencySalary = getTotalDoneInWeekByColumn(week.data, 'agencySalary');

  const streamerFinalSalary = totalStreamersSalaryUSDT;

  const totalSalary = Number((totalStreamersSalary + totalAgencySalary).toFixed(2));
  const totalGain = Number((totalSalary - streamerFinalSalary).toFixed(2));

  const divisionByThree = Number((totalGain / 3).toFixed(2));
  const totalCTOSalary = divisionByThree;
  const totalCEOSalary = divisionByThree;
  const totalAgencyFounds = divisionByThree - prize - expenses;

  const totalToSendUSDT = Number((prize + streamerFinalSalary + expenses + totalCTOSalary).toFixed(2));
  const totalCUPTransfer = getPreRosterTotalsInChangeType(week.data, configuration, PaymentTypeMapping.CUP_TRANSFER as PaymentType);
  const totalCUPCash = getPreRosterTotalsInChangeType(week.data, configuration, PaymentTypeMapping.CUP_EFFECTIVE as PaymentType);
  const totalMLC = getPreRosterTotalsInChangeType(week.data, configuration, PaymentTypeMapping.MLC as PaymentType);
  const totalUSDT = getPreRosterTotalsInChangeType(week.data, configuration, PaymentTypeMapping.USDT as PaymentType);

  return (
    <Card className={week.closed ? 'bg-gray-100' : ''}>
      <CardHeader>
        <CardTitle>Pre-Nómina</CardTitle>
        <CardDescription>Información previa de la nómina a pagar</CardDescription>
      </CardHeader>
      <CardContent>
        <article className="flex flex-col gap-1">
          <b>Estadísticas:</b>
          <div className="flex items-center gap-2 text-blue-600">
            <Gem className="w-4 h-4" />
            <b>Diamantes y Puntos:</b> <p className="text-black">{getStringNumber(totalDiamondsAndPoints)}</p>
          </div>
          <div className="flex items-center gap-2 text-red-600">
            <Landmark className="w-4 h-4" />
            <b>Penalizaciones:</b> <p className="text-black">{getStringNumber(totalDiamondsAndPointsDiscounts)}</p>
          </div>
        </article>
        <br />
        <article className="flex flex-col gap-1">
          <b>Tasas de Cambio:</b>
          <div className="flex items-center gap-2 text-blue-600">
            <DollarSign className="w-4 h-4" />
            <b>MLC:</b>
            <p className="text-black">$ {configuration.mlcChangeRate}</p>
          </div>
          <div className="flex items-center gap-2 text-blue-600">
            <DollarSign className="w-4 h-4" />
            <b>CUP (Efectivo):</b>
            <p className="text-black">$ {configuration.cupEffectiveChangeRate}</p>
          </div>
          <div className="flex items-center gap-2 text-blue-600">
            <DollarSign className="w-4 h-4" />
            <b>CUP (Transferencia):</b>
            <p className="text-black">$ {configuration.cupCardChangeRate}</p>
          </div>
          <div className="flex items-center gap-2 text-blue-600">
            <DollarSign className="w-4 h-4" />
            <b>USDT:</b>
            <p className="text-black">$ {configuration.usdChangeRate}</p>
          </div>
        </article>
        <br />

        <article className="flex flex-col gap-1">
          <b>USDT:</b>
          <div className="flex items-center gap-2 text-blue-600">
            <Speech className="w-4 h-4" />
            <b>Total Generado:</b> <p className="text-black">$ {getStringNumber(totalSalary)}</p>
          </div>

          <div className="flex items-center gap-2 text-red-600">
            <Speech className="w-4 h-4" />
            <b>Salario Penalizado:</b>
            <p className="text-black">$ {getStringNumber(totalStreamersSalaryDiscounts)}</p>
          </div>
          <div className="flex items-center gap-2 text-blue-600">
            <Speech className="w-4 h-4" />
            <b>Salarios por Referidos:</b>
            <p className="text-black">$ {getStringNumber(totalStreamersSalaryBonus)}</p>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Speech className="w-4 h-4" />
            <b>Streamers:</b> <p className="text-black">$ {getStringNumber(totalStreamersSalaryUSDT)}</p>
          </div>

          <br />
          <div className="flex items-center gap-2 text-red-600">
            <Trophy className="w-4 h-4" />
            <b>Premio a Pagar:</b> <p className="text-black">$ {getStringNumber(prize || 0)}</p>
          </div>
          <div className="flex items-center gap-2 text-red-600">
            <TestTubeDiagonal className="w-4 h-4" />
            <b>Gastos:</b> <p className="text-black">$ {getStringNumber(expenses || 0)}</p>
          </div>
          <div className="flex items-center gap-2 text-blue-600">
            <CirclePercent className="w-4 h-4" />
            <b>Ganancia:</b> <p className="text-black">$ {getStringNumber(totalGain || 0)}</p>
          </div>
          <div className="flex items-center gap-2 text-blue-600">
            <ShieldUser className="w-4 h-4" />
            <b>CEO:</b> <p className="text-black">$ {getStringNumber(totalCEOSalary || 0)}</p>
          </div>
          <div className="flex items-center gap-2 text-blue-600">
            <ContactRound className="w-4 h-4" />
            <b>CTO:</b> <p className="text-black">$ {getStringNumber(totalCTOSalary || 0)}</p>
          </div>
          <div className="flex items-center gap-2 text-blue-600">
            <Church className="w-4 h-4" />
            <b>Fondo de Agencia:</b> <p className="text-black">$ {getStringNumber(totalAgencyFounds || 0)}</p>
          </div>
        </article>
        <br />
        <article className="flex flex-col gap-1">
          <b>Balance:</b>
          <div className="flex items-center gap-2 text-green-600">
            <Badge className="bg-green-600">T</Badge>
            <p className="text-black">$ {getStringNumber(totalCUPTransfer)}</p>
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <Badge className="bg-blue-600">E</Badge>
            <p className="text-black">$ {getStringNumber(totalCUPCash)}</p>
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <Badge className="bg-red-600">MLC</Badge>
            <p className="text-black">$ {getStringNumber(totalMLC)}</p>
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <Badge className="bg-purple-600">USDT</Badge>
            <p className="text-black">$ {getStringNumber(totalUSDT)}</p>
          </div>
        </article>
        <br />
        <article className="flex flex-col gap-1">
          <b>Dinero a Enviar:</b>
          <div className="flex items-center gap-2 text-green-600">
            <CircleDollarSign className="w-4 h-4" />
            <b>USDT:</b>
            <p className="text-black">$ {getStringNumber(totalToSendUSDT)}</p>
          </div>
        </article>
      </CardContent>
    </Card>
  );
};

export default StreamingWeekRoster;
