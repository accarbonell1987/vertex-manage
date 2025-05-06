import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WeekWithData } from "@/types/weeks.types";
import { Diamond } from "lucide-react";
import { getPreRosterTotalsInWeekByColumn } from "../../utils/functions";

interface StreamingWeekRosterProps {
	week: WeekWithData;
}

const StreamingWeekRoster = ({ week }: StreamingWeekRosterProps) => {
	const totalStreamersSalary = getPreRosterTotalsInWeekByColumn(week, "streamerSalary");
	const totalDiscounts = getPreRosterTotalsInWeekByColumn(week, "diamondsPenalties");

	return (
		<Card className={week.closed ? "bg-gray-100" : ""}>
			<CardHeader>
				<CardTitle>Pre-Nómina</CardTitle>
				<CardDescription>Información revia de la nómina a pagar</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex items-center gap-2">
					<b>Streamers:</b> $ {totalStreamersSalary}
				</div>
				<div className="flex items-center gap-2 text-blue-500">
					<b>Descuentos:</b> <Diamond className="w-4 h-4" /> {totalDiscounts}
				</div>
			</CardContent>
		</Card>
	);
};

export default StreamingWeekRoster;
