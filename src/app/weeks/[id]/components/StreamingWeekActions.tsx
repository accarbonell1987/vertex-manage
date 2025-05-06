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
			<CardContent className="flex flex-col gap-2 w-full sm:flex-row">
				<CloseWeekAlert week={week} onRefresh={onRefresh} actionLoading={actionLoading} />
				<DeleteWeekDialog week={week} onRefresh={onRefresh} actionLoading={actionLoading} />
			</CardContent>
		</Card>
	);
};

export default StreamingWeekActions;
