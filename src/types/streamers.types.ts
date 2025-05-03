import { Referal, Streamer } from "@/generated/prisma";

export interface CreateStreamerPayload {
	name: string;
	wahaID: string;
	wahaName: string;
	phoneNumber?: string;
	bankAccount?: string;
}

export type StreamerWithReferals = Streamer & {
	referals: Referal[];
};
