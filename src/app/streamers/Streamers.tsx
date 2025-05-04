"use client";

import ToolTip from "@/components/ToolTip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getStreamers } from "@/services/streamers";
import { StreamerWithReferals } from "@/types/streamers.types";
import { Plus, Sheet } from "lucide-react";
import { useState } from "react";
import { exportStreamersToExcel } from "../lib/excel";
import StreamerModal from "./components/StreamerModal";
import StreamersFinder from "./components/StreamersFinder";
import StreamersTable from "./components/StreamersTable";
import useStreamer from "./hooks/useStreamer";

const Streamers = ({ init }: Readonly<{ init: StreamerWithReferals[] }>) => {
	const [open, setOpen] = useState(false);
	const [selectedStreamer, setSelectedStreamer] = useState<StreamerWithReferals | null>(null);

	const { streamers, handleFindByCriteria, handleChangeStreamers, handleOnRefresh } = useStreamer({ init });

	const handleOnClose = async () => {
		setOpen(false);
		setSelectedStreamer(null);
		const updatedStreamers = await getStreamers();
		if (!updatedStreamers) return;

		handleChangeStreamers(updatedStreamers);
	};

	const handleExport = () => {
		exportStreamersToExcel(streamers);
	};

	return (
		<>
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
									<ToolTip content="Exportar como Excel">
										<Button className="cursor-pointer ml-auto bg-indigo-400 hover:bg-indigo-500" onClick={handleExport}>
											<Sheet />
										</Button>
									</ToolTip>
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
