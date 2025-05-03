"use client";

import ToolTip from "@/components/ToolTip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getStreamers } from "@/services/streamers";
import { StreamerWithReferals } from "@/types/streamers.types";
import { Plus, Sheet } from "lucide-react";
import { useState } from "react";
import { exportStreamersToExcel } from "../lib/exportExcel";
import AddStreamerModal from "./components/AddStreamerModal";
import FindStreamers from "./components/FindStreamers";
import StreamersTable from "./components/StreamersTable";
import useStreamer from "./hooks/useStreamer";

const Streamers = ({ init }: Readonly<{ init: StreamerWithReferals[] }>) => {
	const [open, setOpen] = useState(false);
	const { streamers, handleFindByCriteria, handleChangeStreamers, handleOnRefresh } = useStreamer({ init });

	const handleOnClose = async () => {
		setOpen(false);
		const updatedStreamers = await getStreamers();
		if (!updatedStreamers) return;

		handleChangeStreamers(updatedStreamers);
	};

	const handleExport = () => {
		exportStreamersToExcel(streamers);
	};

	return (
		<>
			<AddStreamerModal open={open} onClose={handleOnClose} setOpen={setOpen} />
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
					<FindStreamers onFind={handleFindByCriteria} />
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
							<StreamersTable streamers={streamers} onRefresh={handleOnRefresh} />
						</CardContent>
					</Card>
				</CardContent>
			</Card>
		</>
	);
};

export default Streamers;
