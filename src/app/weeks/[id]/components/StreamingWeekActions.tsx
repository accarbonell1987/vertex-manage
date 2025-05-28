import ToolTip from '@/components/ToolTip';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WeekWithData } from '@/types/weeks.types';
import { ShieldUser } from 'lucide-react';
import CloseWeekAlert from '../../components/CloseWeekAlert';
import DeleteWeekDialog from '../../components/DeleteWeekDialog';

interface StreamingWeekDetailsProps {
  week: WeekWithData;
  onRefresh: () => void;
  actionLoading: boolean;
  handleOnExportToAdmin: () => void;
}

const StreamingWeekActions = ({ week, onRefresh, actionLoading, handleOnExportToAdmin }: StreamingWeekDetailsProps) => {
  return (
    <Card className="w-full gap-4">
      <CardHeader>
        <CardTitle>Acciones</CardTitle>
        <CardDescription>Acciones disponibles para la semana</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 w-full sm:flex-row">
        <ToolTip content="Exportar para Administración">
          <Button className="cursor-pointer" onClick={handleOnExportToAdmin}>
            <ShieldUser />
          </Button>
        </ToolTip>
        <CloseWeekAlert week={week} onRefresh={onRefresh} actionLoading={actionLoading} />
        <DeleteWeekDialog week={week} onRefresh={onRefresh} actionLoading={actionLoading} />
      </CardContent>
    </Card>
  );
};

export default StreamingWeekActions;
