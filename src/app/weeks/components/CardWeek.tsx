import ToolTip from "@/components/ToolTip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getFormatNumber } from "@/lib/utils";
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

	const totalDiamondsAndPoints = getFormatNumber(getTotalDoneInWeekByColumn(week, "diamondsAndPoints"));
	const totalAgencySalary = getTotalDoneInWeekByColumn(week, "agencySalary");
	const totalStreamersSalary = getTotalDoneInWeekByColumn(week, "streamerSalary");
	const totalDiamondsAndPointsDiscounts = getFormatNumber(getTotalDoneInWeekByColumn(week, "diamondsPenalties"));

	return (
		<Card
			className={`flex flex-col gap-2 cursor-pointer hover:bg-gray-50 ${week.closed ? "bg-gray-100" : ""} w-full`}
			onClick={handleOnClickOnDetails}
		>
			<CardHeader className="flex flex-col justify-between items-center gap-2">
				<CardTitle>{week.name}</CardTitle>
				<div className="flex flex-col gap-2 sm:flex-row">
					<ToolTip content="Detalles">
						<Button className="cursor-pointer bg-blue-200 hover:bg-blue-300" variant="secondary" onClick={handleOnClickOnDetails}>
							<Eye /> Detalles
						</Button>
					</ToolTip>
					<ToolTip content="Cerrar">
						<CloseWeekAlert week={week} onRefresh={onRefresh} />
					</ToolTip>
					<ToolTip content="Eliminar">
						<DeleteWeekDialog week={week} onRefresh={onRefresh} />
					</ToolTip>
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
						{totalDiamondsAndPoints}
					</div>
					<div className="flex items-center gap-1 text-sm text-red-600">
						<SquareDashedKanban className="w-4 h-4" />
						{totalDiamondsAndPointsDiscounts}
					</div>
					<div className="flex items-center gap-1 text-sm text-yellow-600">
						<Speech className="w-4 h-4" />$ {totalStreamersSalary}
					</div>
					<div className="flex items-center gap-1 text-sm text-green-600">
						<Landmark className="w-4 h-4" />$ {totalAgencySalary}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
