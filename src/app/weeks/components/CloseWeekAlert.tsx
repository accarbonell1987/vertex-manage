import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { closeWeek } from '@/services/weeks';
import { WeekWithData } from '@/types/weeks.types';
import { CircleX } from 'lucide-react';

interface Props {
  week: WeekWithData;
  onRefresh?: () => void;
  actionLoading?: boolean;
}

const CloseWeekAlert = ({ week, onRefresh, actionLoading }: Readonly<Props>) => {
  const handleCloseWeek = async () => {
    await closeWeek(week.id);
    onRefresh?.();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="cursor-pointer" disabled={week.closed || actionLoading}>
          <CircleX />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Está seguro de que desea cerrar la semana?</AlertDialogTitle>
          <AlertDialogDescription>
            <span>Esta acción no se podrá deshacer.</span>
            <br />
            <span>La semana pasará a un estado Cerrado, donde no podrá hacer algunas acciones.</span>
            <br />
            <span>
              <b>Podrá ver los detalles de la semana cerrada en el historial.</b>
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction className="cursor-pointer bg-red-500 hover:bg-red-600" onClick={handleCloseWeek} disabled={actionLoading}>
            Cerrar Semana
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CloseWeekAlert;
