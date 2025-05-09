import ToolTip from "@/components/ToolTip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getStringNumber } from "@/lib/utils";
import { Eye, Gem, Landmark, Speech, SquareDashedKanban } from "lucide-react";
import { useRouter } from "next/navigation";
import { WeekWithData } from "../../../types/weeks.types";
import { getTotalDoneInWeekByColumn } from "../utils/functions";
import CloseWeekAlert from "./CloseWeekAlert";
import DeleteWeekDialog from "./DeleteWeekDialog";

interface Props {
	week: WeekWithData;
	onRefresh: () => void;
}

export function CardWeek({ week, onRefresh }: Readonly<Props>) {
	const router = useRouter();

	const handleOnClickOnDetails = () => {
		router.push(`/weeks/${week.id}`);
	};

	const totalDiamondsAndPoints = getTotalDoneInWeekByColumn(week?.data, "diamondsAndPoints");
	const totalAgencySalary = getTotalDoneInWeekByColumn(week?.data, "agencySalary");
	const totalStreamersSalary = getTotalDoneInWeekByColumn(week?.data, "streamerSalary");
	const totalDiamondsAndPointsDiscounts = getTotalDoneInWeekByColumn(week?.data, "diamondsPenalties");

	return (
		<Card className={`flex flex-col gap-2 cursor-pointer hover:bg-gray-50 ${week.closed ? "bg-gray-100" : ""} w-full`}>
			<CardHeader className="flex flex-col items-center sm:gap-2 sm:flex-row sm:justify-between ">
				<CardTitle>{week.name}</CardTitle>
				<div className="flex gap-2 flex-row">
					<ToolTip content="Detalles">
						<Button className="cursor-pointer" onClick={handleOnClickOnDetails}>
							<Eye />
						</Button>
					</ToolTip>
					<CloseWeekAlert week={week} onRefresh={onRefresh} />
					<DeleteWeekDialog week={week} onRefresh={onRefresh} />
				</div>
			</CardHeader>
			<CardContent className="flex flex-col gap-2 w-full">
				<div className="flex flex-col gap-2 border p-2 rounded-lg w-full sm:flex-row">
					<span className="text-sm text-gray-600">
						<b>Desde:</b> {week.formattedStart}
					</span>
					<span className="text-sm text-gray-600">
						<b>Hasta:</b> {week.formattedEnd}
					</span>
				</div>
				<div className="flex flex-col gap-2 border p-2 rounded-lg sm:flex-row">
					<span className="flex items-center gap-1 text-sm text-gray-600">
						<b>Estado:</b>
						<Badge className={week.closed ? "bg-gray-600" : "bg-green-600"}>{week.closed ? "CERRADA" : "ABIERTA"}</Badge>
					</span>
				</div>
				<div className="flex flex-col gap-2 border p-2 rounded-lg sm:flex-row sm:justify-between">
					<div className="flex items-center gap-1 text-sm text-blue-600">
						<Gem className="w-4 h-4" />
						{getStringNumber(totalDiamondsAndPoints)}
					</div>
					<div className="flex items-center gap-1 text-sm text-red-600">
						<SquareDashedKanban className="w-4 h-4" />
						{getStringNumber(totalDiamondsAndPointsDiscounts)}
					</div>
					<div className="flex items-center gap-1 text-sm text-yellow-600">
						<Speech className="w-4 h-4" />$ {getStringNumber(totalStreamersSalary)}
					</div>
					<div className="flex items-center gap-1 text-sm text-green-600">
						<Landmark className="w-4 h-4" />$ {getStringNumber(totalAgencySalary)}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
