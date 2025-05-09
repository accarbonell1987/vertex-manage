import CopyToClipboard from "@/components/CopyToClipboard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WeekWithData } from "@/types/weeks.types";
import { Gem, Landmark, Speech } from "lucide-react";
import { useMemo } from "react";
import useConfiguration from "../../hooks/useConfiguration";
import { getDynamicData, getPreRosterTotalsInWeekByColumn } from "../../utils/functions";

interface StreamingWeekRosterProps {
	week: WeekWithData;
}

const StreamingWeekRoster = ({ week }: StreamingWeekRosterProps) => {
	const { configuration } = useConfiguration();

	const dataWithDynamic = useMemo(() => getDynamicData(week?.data, configuration), [week?.data, configuration]);

	const totalStreamersSalaryDiscounts = getPreRosterTotalsInWeekByColumn(dataWithDynamic, "streamerPenalizated");
	console.log("🚀 ~ StreamingWeekRoster ~ totalStreamersSalaryDiscounts:", totalStreamersSalaryDiscounts);
	const totalStreamersSalary = getPreRosterTotalsInWeekByColumn(dataWithDynamic, "streamerSalary");

	const totalDiamondsAndPoints = getPreRosterTotalsInWeekByColumn(dataWithDynamic, "diamondsAndPoints");
	const totalDiamondsAndPointsDiscounts = getPreRosterTotalsInWeekByColumn(dataWithDynamic, "diamondsPenalties");

	return (
		<Card className={week.closed ? "bg-gray-100" : ""}>
			<CardHeader>
				<CardTitle>Pre-Nómina</CardTitle>
				<CardDescription>Información previa de la nómina a pagar</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex items-center gap-2 text-yellow-600">
					<Speech className="w-4 h-4" />
					<b>Streamers:</b> <CopyToClipboard text={`$ ${totalStreamersSalary}`} />
				</div>
				<div className="flex items-center gap-2 text-blue-600">
					<Gem className="w-4 h-4" />
					<b>Diamantes y Puntos:</b> <CopyToClipboard text={`${totalDiamondsAndPoints}`} />
				</div>
				<div className="flex items-center gap-2 text-red-600">
					<Landmark className="w-4 h-4" />
					<b>Penalizaciones:</b> <CopyToClipboard text={`${totalDiamondsAndPointsDiscounts}`} />
				</div>
			</CardContent>
		</Card>
	);
};

export default StreamingWeekRoster;
