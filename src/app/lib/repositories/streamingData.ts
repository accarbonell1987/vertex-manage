import { ImportedStreamingData } from "@/types/streamers.types";
import { prisma } from "../../lib/prisma";

export async function bulkImportStreamingData(weekId: string, data: ImportedStreamingData[]) {
	for (const entry of data) {
		let streamer = await prisma.streamer.findUnique({
			where: { wahaID: entry.wahaID },
		});

		if (!streamer) {
			console.log("Streamer no encontrado", entry.wahaID);
			//! crear streamer
			const newStreamer = await prisma.streamer.create({
				data: {
					wahaID: entry.wahaID,
					name: "Sin Nombre",
					phoneNumber: "Sin Telefono",
					bankAccount: "Sin Cuenta",
					wahaName: entry.wahaName,
				},
			});

			streamer = newStreamer;
		}

		await prisma.streamingData.create({
			data: {
				weekId,
				streamerId: streamer.id,
				baseSalaryIM: entry.baseSalaryIM,
				baseSalaryRoom: entry.baseSalaryRoom,
				diamondsIM: entry.diamondsIM,
				diamondsRoom: entry.diamondsRoom,
				diamondsTotal: entry.diamondsTotal,
				diamondsAndPoints: entry.diamondsAndPoints,
				diamondsPenalties: entry.diamondsPenalties,
				diamondsComisions: entry.diamondsComisions,
				rewardOfPoints: entry.rewardOfPoints,
				dailyBonusOfSuperStreamer: entry.dailyBonusOfSuperStreamer,
				roomBonus: entry.roomBonus,
				enchantingGoddessBonus: entry.enchantingGoddessBonus,
				streamerSalary: entry.streamerSalary,
				agencySalary: entry.agencySalary,
			},
		});
	}
}

export const findStreamingDataByWeek = (weekId: string) =>
	prisma.streamingData.findMany({
		where: { weekId },
		include: { streamer: true },
		orderBy: { streamer: { name: "asc" } },
	});

export const findStreamingDataByStreamerAndWeek = (streamerId: string, weekId: string) =>
	prisma.streamingData.findFirst({
		where: {
			streamerId,
			weekId,
		},
	});

export const createStreamingData = (data: Omit<ImportedStreamingData, "wahaID"> & { streamerId: string; weekId: string }) =>
	prisma.streamingData.create({ data });

export const deleteStreamingData = (id: string) => prisma.streamingData.delete({ where: { id } });

export const updateStreamingData = (id: string, data: Partial<ImportedStreamingData>) =>
	prisma.streamingData.update({
		where: { id },
		data,
	});
