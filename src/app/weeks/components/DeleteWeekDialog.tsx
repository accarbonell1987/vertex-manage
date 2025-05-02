import DialogComponent from "@/components/Dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { deleteWeek } from "@/services/weeks";
import { FormattedWeek } from "@/types/weeks.types";
import { Trash2 } from "lucide-react";
import { useState } from "react";

interface Props {
	week: FormattedWeek;
}

const DeleteWeekDialog = ({ week }: Readonly<Props>) => {
	const [weekName, setWeekName] = useState("");

	return (
		<DialogComponent
			title="Eliminar semana"
			description="¿Estás seguro de eliminar la semana?"
			trigger={
				<Button className="cursor-pointer bg-red-600 hover:bg-red-700" variant="destructive" size="icon">
					<Trash2 />
				</Button>
			}
			actionButton={
				<Button
					className="cursor-pointer bg-red-600 hover:bg-red-700"
					variant="destructive"
					disabled={weekName !== week.name}
					onClick={() => deleteWeek(week.id)}
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
