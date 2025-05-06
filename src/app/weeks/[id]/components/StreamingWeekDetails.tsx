import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getFormatNumber } from "@/lib/utils";
import { WeekWithData } from "@/types/weeks.types";
import { getTotalDoneInWeekByColumn } from "../../utils/functions";

interface StreamingWeekDetailsProps {
	week: WeekWithData;
}

const StreamingWeekDetails = ({ week }: StreamingWeekDetailsProps) => {
	const totalAgencySalary = getTotalDoneInWeekByColumn(week, "agencySalary");
	const totalStreamersSalary = getTotalDoneInWeekByColumn(week, "streamerSalary");
	const totalDiamondsAndPoints = getFormatNumber(getTotalDoneInWeekByColumn(week, "diamondsAndPoints"));
	const totalDiamondsAndPointsDiscounts = getFormatNumber(getTotalDoneInWeekByColumn(week, "diamondsPenalties"));

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
				<br />
				<b>Estadísticas: </b>
				<div className="flex items-center gap-2">
					<div className="w-2 h-2 bg-blue-500 rounded-full" />
					<b>Diamantes y Puntos:</b> {totalDiamondsAndPoints}
				</div>
				<div className="flex items-center gap-2">
					<div className="w-2 h-2 bg-red-500 rounded-full" />
					<b>Penalizaciones:</b> {totalDiamondsAndPointsDiscounts}
				</div>
				<div className="flex items-center gap-2">
					<div className="w-2 h-2 bg-green-500 rounded-full" />
					<b>Agencia:</b> $ {totalAgencySalary}
				</div>
				<div className="flex items-center gap-2">
					<div className="w-2 h-2 bg-yellow-500 rounded-full" />
					<b>Streamers:</b> $ {totalStreamersSalary}
				</div>
				<div className="flex items-center gap-2 text-blue-500">
					<div className="w-2 h-2 bg-sky-500 rounded-full" />
					<b>Total:</b> $ {totalAgencySalary + totalStreamersSalary}
				</div>
			</CardContent>
		</Card>
	);
};

export default StreamingWeekDetails;
