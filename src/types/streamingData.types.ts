import { Streamer, StreamingData } from "@/generated/prisma";

export type StreamingDataWithStreamer = StreamingData & {
	streamer: Streamer;
};
