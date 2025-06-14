import { Streamer } from '@/generated/prisma';
import { ReferalWithStreamer } from './referal.types';

export interface CreateStreamerPayload {
  name: string;
  wahaID: string;
  wahaName: string;
  phoneNumber?: string;
  bankAccount?: string;
  allowInRoster?: boolean;
  applyPenalties?: boolean;
}

export type StreamerWithReferals = Streamer & {
  referals: ReferalWithStreamer[];
};

export type ImportedStreamingData = {
  wahaID: string;
  wahaName: string;
  baseSalaryIM: number;
  baseSalaryRoom: number;
  diamondsIM: number;
  diamondsRoom: number;
  diamondsTotal: number;
  points: number;
  diamondsAndPoints: number;
  diamondsPenalties: number;
  numberOfDaysCompleted: number;
  numberOfDaysInMic: number;
  diamondsComisions: number;
  rewardOfPoints: number;
  dailyBonusOfSuperStreamer: number;
  roomBonus: number;
  enchantingGoddessBonus: number;
  streamerSalary: number;
  agencySalary: number;
};

export type ImportedContactsData = {
  wahaID: string;
  name?: string;
  phoneNumber?: string;
  bankAccount?: string;
};
