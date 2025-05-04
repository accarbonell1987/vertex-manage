"use client";

import ToolTip from "@/components/ToolTip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WeekWithData } from "@/types/weeks.types";
import { Import } from "lucide-react";
import { useState } from "react";
import useStreamingData from "../../hooks/useStreamingData";
import StreamingDataFinder from "./StreamingDataFinder";
import StreamingDataImportModal from "./StreamingDataImportModal";
import StreamingWeekActions from "./StreamingWeekActions";
import StreamingWeekDetails from "./StreamingWeekDetails";

interface StreamingDataLayoutProps {
	week: WeekWithData;
}

const StreamingDataLayout = ({ week }: StreamingDataLayoutProps) => {
	const { weekData, handleOnRefresh, actionLoading } = useStreamingData({ init: week });
	const [open, setOpen] = useState(false);

	const handleOnClose = async () => {
		setOpen(false);
	};

	return (
		<>
			<StreamingDataImportModal week={week} open={open} onClose={handleOnClose} setOpen={setOpen} actionLoading={actionLoading} />
			<Card className="flex justify-end gap-4">
				<CardContent className="flex flex-col gap-4 sm:flex-row">
					<Card className="w-full">
						<CardContent className="flex flex-col gap-4">
							<div className="flex items-center gap-2">
								<h2 className="text-lg font-semibold">Datos de la semana</h2>
								<ToolTip content="Importar">
									<Button
										className="cursor-pointer bg-blue-200 hover:bg-blue-300 ml-auto"
										variant="secondary"
										size="icon"
										disabled={week.closed || actionLoading}
										onClick={() => setOpen(true)}
									>
										<Import />
									</Button>
								</ToolTip>
							</div>
							<div className="flex flex-col gap-4">
								<StreamingDataFinder onFind={handleOnRefresh} />
							</div>
						</CardContent>
					</Card>
					<div className="flex flex-col gap-4 sm:w-1/4">
						<StreamingWeekDetails week={weekData} />
						<StreamingWeekActions week={weekData} onRefresh={handleOnRefresh} actionLoading={actionLoading} />
					</div>
				</CardContent>
			</Card>
		</>
	);
};

export default StreamingDataLayout;
