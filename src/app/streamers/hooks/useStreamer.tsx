import { getStreamers, getStreamersByCriteria } from "@/services/streamers";
import { StreamerWithReferals } from "@/types/streamers.types";
import { useState } from "react";

const useStreamer = ({ init }: Readonly<{ init: StreamerWithReferals[] }>) => {
	const [streamers, setStreamers] = useState(init);

	const handleChangeStreamers = (streamers: StreamerWithReferals[]) => {
		setStreamers(streamers);
	};

	const handleFindByCriteria = async (criteria: { wahaID?: string; name?: string; phoneNumber?: string; bankAccount?: string }) => {
		const streamers = await getStreamersByCriteria(criteria);
		if (!streamers) return;

		handleChangeStreamers(streamers);
	};

	const handleOnRefresh = async () => {
		const updatedStreamers = await getStreamers();
		if (!updatedStreamers) return;

		handleChangeStreamers(updatedStreamers);
	};

	return {
		streamers,
		handleChangeStreamers,
		handleFindByCriteria,
		handleOnRefresh,
	};
};

export default useStreamer;
