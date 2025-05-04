import ToolTip from "@/components/ToolTip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { WeekWithData } from "../../../types/weeks.types";
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

	return (
		<Card className={`flex flex-col gap-2 ${week.closed ? "bg-gray-100" : ""}`}>
			<CardHeader>
				<div className="flex flex-col justify-between items-center gap-2 sm:flex-row">
					<CardTitle>{week.name}</CardTitle>
					<div className="flex gap-2">
						<ToolTip content="Detalles">
							<Button
								className="cursor-pointer bg-blue-200 hover:bg-blue-300"
								variant="secondary"
								size="icon"
								onClick={handleOnClickOnDetails}
							>
								<Eye />
							</Button>
						</ToolTip>
						<ToolTip content="Cerrar">
							<CloseWeekAlert week={week} onRefresh={onRefresh} />
						</ToolTip>
						<ToolTip content="Eliminar">
							<DeleteWeekDialog week={week} onRefresh={onRefresh} />
						</ToolTip>
					</div>
				</div>
			</CardHeader>
			<CardContent className="flex flex-col gap-2">
				<div className="flex flex-col gap-2 border p-2 rounded-lg sm:flex-row">
					<span className="text-sm text-gray-600">
						<b>Desde:</b> {week.formattedStart}
					</span>
					<span className="text-sm text-gray-600">
						<b>Hasta:</b> {week.formattedEnd}
					</span>
				</div>
				<div className="flex flex-col gap-2 border p-2 rounded-lg sm:flex-row">
					<span className="flex items-center gap-2 text-sm text-gray-600">
						<b>Estado:</b>
						<Badge className={week.closed ? "bg-gray-600" : "bg-green-600"}>{week.closed ? "CERRADA" : "ABIERTA"}</Badge>
					</span>
				</div>
			</CardContent>
		</Card>
	);
}
