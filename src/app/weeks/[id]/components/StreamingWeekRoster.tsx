import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getStringNumber } from "@/lib/utils";
import { WeekWithData } from "@/types/weeks.types";
import { Gem, Landmark, Speech } from "lucide-react";
import { getPreRosterTotalsInWeekByColumn } from "../../utils/functions";

interface StreamingWeekRosterProps {
	week: WeekWithData;
}

const StreamingWeekRoster = ({ week }: StreamingWeekRosterProps) => {
	const totalStreamersSalaryDiscounts = getPreRosterTotalsInWeekByColumn(week.data, "streamerPenalizated");
	const totalStreamersSalaryBonus = getPreRosterTotalsInWeekByColumn(week.data, "referralSalary");
	const totalStreamersSalary = getPreRosterTotalsInWeekByColumn(week.data, "streamerSalary");
	const totalDiamondsAndPoints = getPreRosterTotalsInWeekByColumn(week.data, "diamondsAndPoints");
	const totalDiamondsAndPointsDiscounts = getPreRosterTotalsInWeekByColumn(week.data, "diamondsPenalties");

	return (
		<Card className={week.closed ? "bg-gray-100" : ""}>
			<CardHeader>
				<CardTitle>Pre-Nómina</CardTitle>
				<CardDescription>Información previa de la nómina a pagar</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex items-center gap-2 text-blue-600">
					<Gem className="w-4 h-4" />
					<b>Diamantes y Puntos:</b> <p className="text-black">{getStringNumber(totalDiamondsAndPoints)}</p>
				</div>
				<div className="flex items-center gap-2 text-red-600">
					<Landmark className="w-4 h-4" />
					<b>Penalizaciones:</b> <p className="text-black">{getStringNumber(totalDiamondsAndPointsDiscounts)}</p>
				</div>
				<div className="flex items-center gap-2 text-yellow-600">
					<Speech className="w-4 h-4" />
					<b>Streamers:</b> <p className="text-black">$ {getStringNumber(totalStreamersSalary)}</p>
				</div>
				<div className="flex items-center gap-2 text-red-600">
					<Speech className="w-4 h-4" />
					<b>Salario Penalizado:</b>
					<p className="text-black">$ {getStringNumber(totalStreamersSalaryDiscounts)}</p>
				</div>
				<div className="flex items-center gap-2 text-violet-600">
					<Speech className="w-4 h-4" />
					<b>Salarios por Referidos:</b>
					<p className="text-black">$ {getStringNumber(totalStreamersSalaryBonus)}</p>
				</div>
				<div className="flex items-center gap-2 text-green-600">
					<Speech className="w-4 h-4" />
					<b>Salario a Pagar:</b>
					<p className="text-black">
						$ {getStringNumber(totalStreamersSalary - totalStreamersSalaryDiscounts + totalStreamersSalaryBonus)}
					</p>
				</div>
			</CardContent>
		</Card>
	);
};

export default StreamingWeekRoster;
