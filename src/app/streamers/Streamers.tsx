"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Streamer } from "@/generated/prisma";
import { getStreamers } from "@/services/streamers";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddStreamerModal from "./components/AddStreamerModal";
import FindStreamers from "./components/FindStreamers";
import useStreamer from "./hooks/useStreamer";

const Streamers = ({ init }: Readonly<{ init: Streamer[] }>) => {
	const [open, setOpen] = useState(false);
	const { streamers, handleFindByCriteria, handleChangeStreamers } = useStreamer({ init });

	const handleOnClose = async () => {
		setOpen(false);
		const updatedStreamers = await getStreamers();
		if (!updatedStreamers) return;

		handleChangeStreamers(updatedStreamers);
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
					<Card className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						<CardHeader>
							<CardTitle>Streamers</CardTitle>
						</CardHeader>
						<CardContent>{streamers?.length || "No hay streamers"}</CardContent>
					</Card>
				</CardContent>
			</Card>
		</>
	);
};

export default Streamers;
