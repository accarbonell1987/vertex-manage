import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WeekWithData } from '@/types/weeks.types';
import { getTotalDoneInWeekByColumn } from '../../utils/functions';

import { getStringNumber } from '@/lib/utils';
import { ChartColumnBig, Gem, Landmark, Speech, SquareDashedKanban } from 'lucide-react';
interface StreamingWeekDetailsProps {
  week: WeekWithData;
}

const StreamingWeekDetails = ({ week }: StreamingWeekDetailsProps) => {
  const totalAgencySalary = getTotalDoneInWeekByColumn(week.data, 'agencySalary');
  const totalStreamersSalary = getTotalDoneInWeekByColumn(week.data, 'streamerSalary');
  const totalDiamondsAndPoints = getTotalDoneInWeekByColumn(week.data, 'diamondsAndPoints');
  const totalDiamondsAndPointsDiscounts = getTotalDoneInWeekByColumn(week.data, 'diamondsPenalties');

  return (
    <Card className={week.closed ? 'bg-gray-100' : ''}>
      <CardHeader>
        <CardTitle>Detalles</CardTitle>
        <CardDescription>Información general de la semana</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <b>Nombre:</b> {week.name}
        </div>
        <div className="flex items-center gap-2">
          <b>Desde:</b> {week.formattedStart}
        </div>
        <div className="flex items-center gap-2">
          <b>Hasta:</b> {week.formattedEnd}
        </div>
        <div className="flex items-center gap-2">
          <b>Estado:</b> <Badge className={week.closed ? 'bg-gray-600' : 'bg-green-600'}>{week.closed ? 'CERRADA' : 'ABIERTA'}</Badge>
        </div>
        <br />
        <b>Estadísticas: </b>
        <div className="flex items-center gap-2 text-blue-600">
          <Gem className="w-4 h-4" />
          <b>Diamantes y Puntos:</b> <p className="text-black">{getStringNumber(totalDiamondsAndPoints)}</p>
        </div>
        <div className="flex items-center gap-2 text-red-600">
          <SquareDashedKanban className="w-4 h-4" />
          <b>Penalizaciones:</b> <p className="text-black">{getStringNumber(totalDiamondsAndPointsDiscounts)}</p>
        </div>
        <div className="flex items-center gap-2 text-yellow-600">
          <Landmark className="w-4 h-4" />
          <b>Agencia:</b> <p className="text-black">$ {getStringNumber(totalAgencySalary)}</p>
        </div>
        <div className="flex items-center gap-2 text-green-600">
          <Speech className="w-4 h-4" />
          <b>Streamers:</b> <p className="text-black">$ {getStringNumber(totalStreamersSalary)}</p>
        </div>
        <div className="flex items-center gap-2 text-indigo-500">
          <ChartColumnBig className="w-4 h-4" />
          <b>Total:</b> <p className="text-black">$ {getStringNumber(totalAgencySalary + totalStreamersSalary)}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StreamingWeekDetails;
