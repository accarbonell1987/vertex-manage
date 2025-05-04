import { findWeekById } from "@/app/lib/repositories/weeks";
import { Badge } from "@/components/ui/badge";
import { formatWeek } from "../utils/formaters";

interface PageProps {
	params: Promise<{ id: string }>;
}

export default async function WeekDetailPage({ params }: PageProps) {
	const { id } = await params;
	const week = await findWeekById(id);
	const formattedWeek = formatWeek(week);

	if (!formattedWeek) {
		return <div className="p-4">Semana no encontrada.</div>;
	}

	return (
		<div className="p-4 space-y-4">
			<h1 className="text-xl font-bold">Detalle de Semana: {formattedWeek.name}</h1>
			<div className="space-y-2">
				<p>
					<b>Desde:</b> {formattedWeek.formattedStart}
				</p>
				<p>
					<b>Hasta:</b> {formattedWeek.formattedEnd}
				</p>
				<p className="flex items-center gap-2">
					<b>Estado:</b>
					<Badge className={formattedWeek.closed ? "bg-gray-600" : "bg-green-600"}>{formattedWeek.closed ? "Cerrada" : "Abierta"}</Badge>
				</p>
			</div>
		</div>
	);
}
