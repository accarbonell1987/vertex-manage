import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import useStoreConfiguration from '@/context/useStoreConfiguration';
import { getStringNumber } from '@/lib/utils';
import { WeekWithData } from '@/types/weeks.types';
import {
  BanknoteArrowUp,
  CircleDollarSign,
  CirclePercent,
  ContactRound,
  Gem,
  Landmark,
  ShieldUser,
  Speech,
  TestTubeDiagonal,
  Trophy,
} from 'lucide-react';
import useConfiguration from '../../hooks/useConfiguration';
import { getPreRosterTotalsInWeekByColumn, getTotalDoneInWeekByColumn } from '../../utils/functions';

interface StreamingWeekRosterProps {
  week: WeekWithData;
}

const StreamingWeekRoster = ({ week }: StreamingWeekRosterProps) => {
  const { configuration } = useConfiguration();
  const { prize, expenses } = useStoreConfiguration();

  const totalStreamersSalaryDiscounts = getPreRosterTotalsInWeekByColumn(week.data, 'streamerPenalizated');
  const totalStreamersSalaryBonus = getPreRosterTotalsInWeekByColumn(week.data, 'referralSalary');
  const totalStreamersSalary = getPreRosterTotalsInWeekByColumn(week.data, 'streamerSalary');
  const totalDiamondsAndPoints = getPreRosterTotalsInWeekByColumn(week.data, 'diamondsAndPoints');
  const totalDiamondsAndPointsDiscounts = getPreRosterTotalsInWeekByColumn(week.data, 'diamondsPenalties');

  const totalAgencySalary = getTotalDoneInWeekByColumn(week.data, 'agencySalary');

  const streamerFinalSalary = totalStreamersSalary - totalStreamersSalaryDiscounts + totalStreamersSalaryBonus;

  const totalSalaryMLC = Number(((totalStreamersSalary + totalAgencySalary) * configuration.mlcChangeRate).toFixed(2));
  const totalGainMLC = Number((totalSalaryMLC - streamerFinalSalary - prize - expenses).toFixed(2));
  const totalCTOSalary = Number((totalGainMLC / 3).toFixed(2));
  const totalCEOSalary = Number((totalGainMLC - totalCTOSalary).toFixed(2));

  const totalToSendMLC = Number((totalCTOSalary + prize + expenses + streamerFinalSalary).toFixed(2));
  const totalToSendUSDT = Number((totalToSendMLC / configuration.mlcChangeRate).toFixed(2));

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
          <b>MLC:</b>
          <div className="flex items-center gap-2 text-blue-600">
            <Speech className="w-4 h-4" />
            <b>Total Generado:</b> <p className="text-black">$ {getStringNumber(totalSalaryMLC)}</p>
          </div>
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
            <b>Ganancia:</b> <p className="text-black">$ {getStringNumber(totalGainMLC || 0)}</p>
          </div>
          <div className="flex items-center gap-2 text-blue-600">
            <ShieldUser className="w-4 h-4" />
            <b>CEO:</b> <p className="text-black">$ {getStringNumber(totalCEOSalary || 0)}</p>
          </div>
          <div className="flex items-center gap-2 text-blue-600">
            <ContactRound className="w-4 h-4" />
            <b>CTO:</b> <p className="text-black">$ {getStringNumber(totalCTOSalary || 0)}</p>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Speech className="w-4 h-4" />
            <b>Streamers:</b> <p className="text-black">$ {getStringNumber(totalStreamersSalary)}</p>
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
          <div className="flex items-center gap-2 text-green-600">
            <Speech className="w-4 h-4" />
            <b>Salario a Pagar:</b>
            <p className="text-black">$ {getStringNumber(streamerFinalSalary)}</p>
          </div>
        </article>
        <br />
        <article className="flex flex-col gap-1">
          <b>Dinero a Enviar:</b>
          <div className="flex items-center gap-2 text-red-600">
            <BanknoteArrowUp className="w-4 h-4" />
            <b>MLC:</b>
            <p className="text-black">$ {getStringNumber(totalToSendMLC)}</p>
          </div>
          <div className="flex items-center gap-2 text-red-600">
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
