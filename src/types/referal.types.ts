import { Referal, Streamer } from "@/generated/prisma";

export type ReferalWithStreamer = Referal & {
	streamer: Streamer;
	referred: Streamer;
};
