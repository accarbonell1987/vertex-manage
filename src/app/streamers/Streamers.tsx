"use client";

import ImportExcelModal from "@/components/ImportExcelModal";
import ToolTip from "@/components/ToolTip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bulkImportContactsEntries, getStreamers } from "@/services/streamers";
import { FileType } from "@/types/common.types";
import { StreamerWithReferals } from "@/types/streamers.types";
import { Import, Plus, Sheet } from "lucide-react";
import { useState } from "react";
import { exportStreamersToExcel, parseContactsExcel } from "../lib/excel";
import StreamerModal from "./components/StreamerModal";
import StreamersFinder from "./components/StreamersFinder";
import StreamersTable from "./components/StreamersTable";
import useStreamer from "./hooks/useStreamer";

const Streamers = ({ init }: Readonly<{ init: StreamerWithReferals[] }>) => {
	const [open, setOpen] = useState(false);
	const [importOpen, setImportOpen] = useState(false);
	const [selectedStreamer, setSelectedStreamer] = useState<StreamerWithReferals | null>(null);

	const { streamers, handleFindByCriteria, handleChangeStreamers, handleOnRefresh, actionLoading, setActionLoading } = useStreamer({
		init,
	});

	const handleOnClose = async () => {
		setOpen(false);
		setImportOpen(false);
		setSelectedStreamer(null);
		const updatedStreamers = await getStreamers();
		if (!updatedStreamers) return;

		handleChangeStreamers(updatedStreamers);
	};

	const handleExport = () => {
		exportStreamersToExcel(streamers);
	};

	const onSubmit = async (e: React.FormEvent, files: FileType[]) => {
		e.preventDefault();

		if (!files?.length) return;
		const file = files[0].file;
		if (!file) return;

		const parsedFileAsExcel = await parseContactsExcel(file);
		if (!parsedFileAsExcel) return;

		try {
			setActionLoading(true);
			await bulkImportContactsEntries(parsedFileAsExcel);
			handleOnClose();
		} catch (error) {
			console.error(error);
		} finally {
			setActionLoading(false);
		}
	};

	return (
		<>
			<ImportExcelModal open={importOpen} setOpen={setImportOpen} actionLoading={actionLoading} onSubmit={onSubmit} />
			<StreamerModal open={open} onClose={handleOnClose} setOpen={setOpen} streamer={selectedStreamer} />
			<Card className="flex justify-end gap-4">
				<CardHeader>
					<CardTitle>
						<div className="flex items-center gap-2">
							Gestión de Streamers
							<Button className="cursor-pointer ml-auto" onClick={() => setOpen(true)}>
								<Plus />
								Crear streamer
							</Button>
						</div>
					</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-4">
					<StreamersFinder onFind={handleFindByCriteria} />
					<Card className="w-full gap-4">
						<CardHeader>
							<CardTitle>
								<div className="flex items-center gap-2">
									Streamers
									<div className="flex items-center gap-2 ml-auto">
										<ToolTip content="Importar Contactos">
											<Button
												className="cursor-pointer bg-blue-200 hover:bg-blue-300"
												variant="secondary"
												size="icon"
												onClick={() => setImportOpen(true)}
											>
												<Import />
											</Button>
										</ToolTip>
										<ToolTip content="Exportar como Excel">
											<Button className="cursor-pointer bg-indigo-400 hover:bg-indigo-500" onClick={handleExport}>
												<Sheet />
											</Button>
										</ToolTip>
									</div>
								</div>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<StreamersTable
								streamers={streamers}
								onRefresh={handleOnRefresh}
								onEdit={(streamer) => {
									setSelectedStreamer(streamer);
									setOpen(true);
								}}
							/>
						</CardContent>
					</Card>
				</CardContent>
			</Card>
		</>
	);
};

export default Streamers;
