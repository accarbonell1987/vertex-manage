import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WeekWithData } from "@/types/weeks.types";
import { getTotalDoneInWeekByColumn } from "../../utils/functions";

interface StreamingWeekDetailsProps {
	week: WeekWithData;
}

const StreamingWeekDetails = ({ week }: StreamingWeekDetailsProps) => {
	const totalAgencySalary = getTotalDoneInWeekByColumn(week, "agencySalary");
	const totalStreamersSalary = getTotalDoneInWeekByColumn(week, "streamerSalary");

	return (
		<Card className={week.closed ? "bg-gray-100" : ""}>
			<CardHeader>
				<CardTitle>Detalles</CardTitle>
				<CardDescription>Información general de la semana</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="flex items-center gap-2">
					<b>Nombre:</b> {week.name}
				</p>
				<p className="flex items-center gap-2">
					<b>Desde:</b> {week.formattedStart}
				</p>
				<p className="flex items-center gap-2">
					<b>Hasta:</b> {week.formattedEnd}
				</p>
				<p className="flex items-center gap-2">
					<b>Estado:</b> <Badge className={week.closed ? "bg-gray-600" : "bg-green-600"}>{week.closed ? "CERRADA" : "ABIERTA"}</Badge>
				</p>
				<p className="flex items-center gap-2">
					<b>Agencia:</b> $ {totalAgencySalary}
				</p>
				<p className="flex items-center gap-2">
					<b>Streamers:</b> $ {totalStreamersSalary}
				</p>
				<p className="flex items-center gap-2 text-blue-500">
					<b>Total:</b> $ {totalAgencySalary + totalStreamersSalary}
				</p>
			</CardContent>
		</Card>
	);
};

export default StreamingWeekDetails;
