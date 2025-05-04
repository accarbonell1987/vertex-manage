import ToolTip from "@/components/ToolTip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WeekWithData } from "@/types/weeks.types";
import { Import } from "lucide-react";
import { useState } from "react";
import CloseWeekAlert from "../../components/CloseWeekAlert";
import DeleteWeekDialog from "../../components/DeleteWeekDialog";
import StreamingDataImportModal from "./StreamingDataImportModal";

interface StreamingWeekDetailsProps {
	week: WeekWithData;
	onRefresh: () => void;
	actionLoading: boolean;
}

const StreamingWeekActions = ({ week, onRefresh, actionLoading }: StreamingWeekDetailsProps) => {
	const [open, setOpen] = useState(false);

	const handleOnClose = async () => {
		setOpen(false);
	};

	return (
		<>
			<StreamingDataImportModal week={week} open={open} onClose={handleOnClose} setOpen={setOpen} actionLoading={actionLoading} />
			<Card className="w-full gap-4">
				<CardHeader>
					<CardTitle>Acciones</CardTitle>
					<CardDescription>Acciones disponibles para la semana</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-2 sm:flex-row">
					<ToolTip content="Importar">
						<Button
							className="cursor-pointer bg-blue-200 hover:bg-blue-300"
							variant="secondary"
							size="icon"
							disabled={week.closed || actionLoading}
							onClick={() => setOpen(true)}
						>
							<Import />
						</Button>
					</ToolTip>
					<ToolTip content="Cerrar">
						<CloseWeekAlert week={week} onRefresh={onRefresh} actionLoading={actionLoading} />
					</ToolTip>
					<ToolTip content="Eliminar">
						<DeleteWeekDialog week={week} onRefresh={onRefresh} actionLoading={actionLoading} />
					</ToolTip>
				</CardContent>
			</Card>
		</>
	);
};

export default StreamingWeekActions;
