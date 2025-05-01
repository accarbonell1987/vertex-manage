import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Week } from "../../../generated/prisma";

interface Props {
	week: Week;
}

export function CardWeek({ week }: Props) {
	return (
		<div className="rounded-lg border p-4 bg-white shadow-sm hover:shadow-md transition-all">
			<h2 className="text-lg font-semibold text-gray-800">Semana: {format(new Date(week.date), "PPP", { locale: es })}</h2>
			{/* Aquí podrías agregar botones para ver detalles o cargar Excel */}
		</div>
	);
}
