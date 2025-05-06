import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getFormatNumber } from "@/lib/utils";
import { WeekWithData } from "@/types/weeks.types";
import { Diamond } from "lucide-react";
import { getPreRosterTotalsInWeekByColumn } from "../../utils/functions";

interface StreamingWeekRosterProps {
	week: WeekWithData;
}

const StreamingWeekRoster = ({ week }: StreamingWeekRosterProps) => {
	const totalStreamersSalary = getFormatNumber(getPreRosterTotalsInWeekByColumn(week, "streamerSalary"));
	const totalDiamondsAndPoints = getFormatNumber(getPreRosterTotalsInWeekByColumn(week, "diamondsAndPoints"));
	const totalDiamondsAndPointsDiscounts = getFormatNumber(getPreRosterTotalsInWeekByColumn(week, "diamondsPenalties"));

	return (
		<Card className={week.closed ? "bg-gray-100" : ""}>
			<CardHeader>
				<CardTitle>Pre-Nómina</CardTitle>
				<CardDescription>Información previa de la nómina a pagar</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex items-center gap-2">
					<div className="w-2 h-2 bg-yellow-500 rounded-full" />
					<b>Streamers:</b> $ {totalStreamersSalary}
				</div>
				<div className="flex items-center gap-2">
					<div className="w-2 h-2 bg-blue-500 rounded-full" />
					<b>Diamantes y Puntos:</b> <Diamond className="w-4 h-4" /> {totalDiamondsAndPoints}
				</div>
				<div className="flex items-center gap-2">
					<div className="w-2 h-2 bg-red-500 rounded-full" />
					<b>Penalizaciones:</b> <Diamond className="w-4 h-4" /> {totalDiamondsAndPointsDiscounts}
				</div>
			</CardContent>
		</Card>
	);
};

export default StreamingWeekRoster;
