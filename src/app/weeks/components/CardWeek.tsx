import ToolTip from "@/components/ToolTip";
import { Button } from "@/components/ui/button";
import { deleteWeek } from "@/services/weeks";
import { CircleX, Eye, Trash2 } from "lucide-react";
import { FormattedWeek } from "../../../types/weeks.types";

interface Props {
	week: FormattedWeek;
}

export function CardWeek({ week }: Readonly<Props>) {
	return (
		<div className="flex flex-col gap-2 rounded-lg border p-4 bg-white shadow-sm hover:shadow-md transition-all">
			<div className="flex justify-between items-center">
				<h2 className="text-lg font-semibold text-gray-800">{week.name}</h2>
				<div className="flex gap-2">
					<ToolTip content="Detalles">
						<Button className="cursor-pointer bg-blue-200 hover:bg-blue-300" variant="secondary" size="icon">
							<Eye />
						</Button>
					</ToolTip>
					<ToolTip content="Cerrar">
						<Button className="cursor-pointer bg-amber-200 hover:bg-amber-300" variant="secondary" size="icon">
							<CircleX />
						</Button>
					</ToolTip>
					<ToolTip content="Eliminar">
						<Button
							className="cursor-pointer bg-red-600 hover:bg-red-700"
							variant="destructive"
							size="icon"
							onClick={() => deleteWeek(week.id)}
						>
							<Trash2 />
						</Button>
					</ToolTip>
				</div>
			</div>
			<div className="flex gap-2 border p-2 rounded-lg">
				<span className="text-sm text-gray-600">
					<b>Desde:</b> {week.formattedStart}
				</span>
				<span className="text-sm text-gray-600">
					<b>Hasta:</b> {week.formattedEnd}
				</span>
			</div>
		</div>
	);
}
