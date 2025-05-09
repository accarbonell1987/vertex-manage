import DialogComponent from "@/components/Dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { deleteWeek } from "@/services/weeks";
import { WeekWithData } from "@/types/weeks.types";
import { Trash2 } from "lucide-react";
import { useState } from "react";

interface Props {
	week: WeekWithData;
	onRefresh?: () => void;
	actionLoading?: boolean;
}

const DeleteWeekDialog = ({ week, onRefresh, actionLoading }: Readonly<Props>) => {
	const [weekName, setWeekName] = useState("");

	const handleDeleteWeek = async () => {
		await deleteWeek(week.id);
		onRefresh?.();
	};

	return (
		<DialogComponent
			title="Eliminar semana"
			description="¿Estás seguro de eliminar la semana?"
			trigger={
				<Button className="cursor-pointer bg-red-500 hover:bg-red-600 flex-1" disabled={week.closed}>
					<Trash2 />
				</Button>
			}
			actionButton={
				<Button
					className="cursor-pointer bg-red-500 hover:bg-red-600"
					disabled={weekName !== week.name || actionLoading}
					onClick={handleDeleteWeek}
				>
					<Trash2 /> Eliminar
				</Button>
			}
		>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<span>
						Para eliminar la semana, ingresa el nombre de la semana <b className="text-red-600">{week.name}</b>
					</span>
					<Input id="name" placeholder={week.name} value={weekName} onChange={(e) => setWeekName(e.target.value)} />
				</div>
			</div>
		</DialogComponent>
	);
};

export default DeleteWeekDialog;
