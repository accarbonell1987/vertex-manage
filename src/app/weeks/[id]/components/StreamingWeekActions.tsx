import ToolTip from "@/components/ToolTip";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WeekWithData } from "@/types/weeks.types";
import CloseWeekAlert from "../../components/CloseWeekAlert";
import DeleteWeekDialog from "../../components/DeleteWeekDialog";

interface StreamingWeekDetailsProps {
	week: WeekWithData;
	onRefresh: () => void;
	actionLoading: boolean;
}

const StreamingWeekActions = ({ week, onRefresh, actionLoading }: StreamingWeekDetailsProps) => {
	return (
		<Card className="w-full gap-4">
			<CardHeader>
				<CardTitle>Acciones</CardTitle>
				<CardDescription>Acciones disponibles para la semana</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-2 sm:flex-row">
				<ToolTip content="Cerrar">
					<CloseWeekAlert week={week} onRefresh={onRefresh} actionLoading={actionLoading} />
				</ToolTip>
				<ToolTip content="Eliminar">
					<DeleteWeekDialog week={week} onRefresh={onRefresh} actionLoading={actionLoading} />
				</ToolTip>
			</CardContent>
		</Card>
	);
};

export default StreamingWeekActions;
