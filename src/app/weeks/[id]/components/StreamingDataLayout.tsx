"use client";

import { parseStreamingExcel } from "@/app/lib/excel";
import ImportExcelModal from "@/components/ImportExcelModal";
import ToolTip from "@/components/ToolTip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { bulkImportStreamingEntries } from "@/services/streamingData";
import { FileType } from "@/types/common.types";
import { WeekWithData } from "@/types/weeks.types";
import { Import } from "lucide-react";
import { useState } from "react";
import useStreamingData from "../../hooks/useStreamingData";
import StreamingDataFinder from "./StreamingDataFinder";
import StreamingWeekActions from "./StreamingWeekActions";
import StreamingWeekDetails from "./StreamingWeekDetails";

interface StreamingDataLayoutProps {
	week: WeekWithData;
}

const StreamingDataLayout = ({ week }: StreamingDataLayoutProps) => {
	const { weekData, handleOnRefresh, actionLoading, setActionLoading } = useStreamingData({ init: week });
	const [open, setOpen] = useState(false);

	const handleOnClose = async () => {
		setOpen(false);
	};

	const onSubmit = async (e: React.FormEvent, files: FileType[]) => {
		e.preventDefault();

		if (!files?.length) return;
		const file = files[0].file;
		if (!file) return;

		const parsedFileAsExcel = await parseStreamingExcel(file);
		if (!parsedFileAsExcel) return;

		try {
			setActionLoading(true);
			await bulkImportStreamingEntries(week.id, parsedFileAsExcel);
			handleOnClose();
		} catch (error) {
			console.error(error);
		} finally {
			setActionLoading(false);
		}
	};

	return (
		<>
			<ImportExcelModal open={open} setOpen={setOpen} actionLoading={actionLoading} onSubmit={onSubmit} />
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
