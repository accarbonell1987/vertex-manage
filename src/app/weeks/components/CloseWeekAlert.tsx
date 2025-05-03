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
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { closeWeek } from "@/services/weeks";
import { FormattedWeek } from "@/types/weeks.types";
import { CircleX } from "lucide-react";

interface Props {
	week: FormattedWeek;
	onRefresh: () => void;
}

const CloseWeekAlert = ({ week, onRefresh }: Readonly<Props>) => {
	const handleCloseWeek = async () => {
		await closeWeek(week.id);
		onRefresh();
	};

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button className="cursor-pointer bg-amber-200 hover:bg-amber-300" variant="secondary" size="icon" disabled={week.closed}>
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
					<AlertDialogAction className="cursor-pointer bg-red-500 hover:bg-red-600" onClick={handleCloseWeek}>
						Cerrar Semana
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default CloseWeekAlert;
