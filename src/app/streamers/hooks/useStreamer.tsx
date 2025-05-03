import { Streamer } from "@/generated/prisma";
import { getStreamersByCriteria } from "@/services/streamers";
import { useState } from "react";

const useStreamer = ({ init }: Readonly<{ init: Streamer[] }>) => {
	const [streamers, setStreamers] = useState(init);

	const handleChangeStreamers = (streamers: Streamer[]) => {
		setStreamers(streamers);
	};

	const handleFindByCriteria = async (criteria: { wahaID?: string; name?: string; phoneNumber?: string; bankAccount?: string }) => {
		const streamers = await getStreamersByCriteria(criteria);
		if (!streamers) return;

		handleChangeStreamers(streamers);
	};

	return {
		streamers,
		handleChangeStreamers,
		handleFindByCriteria,
	};
};

export default useStreamer;
