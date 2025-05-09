import { Streamer, StreamingData } from "@/generated/prisma";

export type StreamingDataWithStreamer = StreamingData & {
	streamer: Streamer;
	agencyBonus?: number;
	streamerPenalizated?: number;
};
