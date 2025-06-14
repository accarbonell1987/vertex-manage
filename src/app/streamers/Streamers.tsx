"use client";

import ImportExcelModal from "@/components/ImportExcelModal";
import ToolTip from "@/components/ToolTip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { deleteAllReferrals } from "@/services/referals";
import { bulkImportContactsEntries, getStreamers, updateStreamerPenaltiesToAll } from "@/services/streamers";
import { FileType } from "@/types/common.types";
import { StreamerWithReferals } from "@/types/streamers.types";
import { Cog, Plus, Sheet, Upload } from "lucide-react";
import { useState } from "react";
import { exportStreamersToExcel, parseContactsExcel } from "../lib/excel";
import StreamerDetails from "./components/StreamerDetails";
import StreamerManagerPanel from "./components/StreamerManagerPanel";
import StreamerModal from "./components/StreamerModal";
import StreamerReferals from "./components/StreamerReferals";
import StreamersFinder from "./components/StreamersFinder";
import StreamersTable from "./components/StreamersTable";
import useStreamer from "./hooks/useStreamer";

const Streamers = ({ init }: Readonly<{ init: StreamerWithReferals[] }>) => {
	const [open, setOpen] = useState(false);
	const [importOpen, setImportOpen] = useState(false);
	const [managerOpen, setManagerOpen] = useState(false);
	const [selectedStreamer, setSelectedStreamer] = useState<StreamerWithReferals | null>(null);

	const { streamers, handleFindByCriteria, handleChangeStreamers, handleOnRefresh, actionLoading, setActionLoading } = useStreamer({
		init,
	});

	const handleOnClose = async () => {
		setOpen(false);
		setImportOpen(false);
		setManagerOpen(false);
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

	const handleOnSelect = (streamer: StreamerWithReferals) => {
		setSelectedStreamer(streamer);
	};

	const handleOnConfirmApplyConfiguration = (cleanAllReferrals: boolean, applyPenaltiesToAll: boolean) => {
		if (cleanAllReferrals) {
			deleteAllReferrals();
		}
		updateStreamerPenaltiesToAll({ applyPenaltiesToAll });
		handleOnClose();
	};

	return (
		<>
			<ImportExcelModal open={importOpen} setOpen={setImportOpen} actionLoading={actionLoading} onSubmit={onSubmit} />
			<StreamerModal open={open} onClose={handleOnClose} setOpen={setOpen} streamer={selectedStreamer} />
			<StreamerManagerPanel
				open={managerOpen}
				setOpen={setManagerOpen}
				onClose={handleOnClose}
				onConfirm={handleOnConfirmApplyConfiguration}
			/>
			<div className="flex flex-col gap-4 sm:flex-row">
				<Card className="w-full sm:w-3/4">
					<CardContent className="flex flex-col gap-4">
						<div className="flex items-center gap-2">
							<h2 className="text-lg font-semibold">Gestión de Streamers</h2>
							<ToolTip content="Importar">
								<Button className="cursor-pointer ml-auto" onClick={() => setOpen(true)}>
									<Plus />
									Crear streamer
								</Button>
							</ToolTip>
						</div>
						<div className="flex flex-col gap-4">
							<StreamersFinder onFind={handleFindByCriteria} />
							<Card className="w-full gap-4">
								<CardHeader>
									<CardTitle>
										<div className="flex items-center gap-2">
											Streamers
											<div className="flex items-center gap-2 ml-auto">
												<ToolTip content="Importar Contactos">
													<Button className="cursor-pointer" size="icon" onClick={() => setImportOpen(true)}>
														<Upload />
													</Button>
												</ToolTip>
												<ToolTip content="Exportar como Excel">
													<Button className="cursor-pointer" onClick={handleExport}>
														<Sheet />
													</Button>
												</ToolTip>
												<ToolTip content="Configuraciones Globales">
													<Button className="cursor-pointer" onClick={() => setManagerOpen(true)}>
														<Cog />
													</Button>
												</ToolTip>
											</div>
										</div>
									</CardTitle>
								</CardHeader>
								<CardContent>
									<StreamersTable
										streamers={streamers}
										selectedStreamer={selectedStreamer}
										onRefresh={handleOnRefresh}
										onEdit={(streamer) => {
											setSelectedStreamer(streamer);
											setOpen(true);
										}}
										onSelect={handleOnSelect}
									/>
								</CardContent>
							</Card>
						</div>
					</CardContent>
				</Card>
				<div className="flex flex-col gap-4 sm:w-1/4">
					<StreamerDetails streamer={selectedStreamer} />
					<StreamerReferals streamer={selectedStreamer} streamers={init} onRefresh={handleOnRefresh} />
				</div>
			</div>
		</>
	);
};

export default Streamers;
