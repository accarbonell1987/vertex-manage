import { StreamingData } from "@/generated/prisma";
import { StreamerWithReferals } from "./streamers.types";

export type StreamingDataWithStreamer = StreamingData & {
	streamer: StreamerWithReferals;
	agencyBonus?: number;
	streamerPenalizated?: number;
	referralSalary?: number;
};
