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

export type ImportedStreamingData = {
	wahaID: string;
	baseSalaryIM: number;
	baseSalaryRoom: number;
	diamondsIM: number;
	diamondsRoom: number;
	diamondsTotal: number;
	points: number;
	diamondsAndPoints: number;
	diamondsPenalties: number;
	diamondsComisions: number;
	rewardOfPoints: number;
	dailyBonusOfSuperStreamer: number;
	roomBonus: number;
	enchantingGodesBonus: number;
	streamerSalary: number;
	agencySalary: number;
};
