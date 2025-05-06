import { ImportedContactsData } from "@/types/streamers.types";
import { prisma } from "../../lib/prisma";

export const findAllStreamers = () =>
	prisma.streamer.findMany({
		orderBy: { name: "asc" },
		include: {
			referals: {
				include: {
					streamer: true,
					referred: true,
				},
			},
		},
	});

export const findStreamerById = (id: string) =>
	prisma.streamer.findUnique({
		where: { id },
		include: { referals: { include: { streamer: true, referred: true } } },
	});

export const createStreamer = (data: { name: string; phoneNumber: string; bankAccount: string; wahaID: string; wahaName: string }) =>
	prisma.streamer.create({
		data,
	});

export const deleteStreamer = async (id: string) => {
	await prisma.referal.updateMany({
		where: { streamerId: id },
		data: { streamerId: undefined },
	});
	return prisma.streamer.delete({ where: { id } });
};

export const updateStreamer = (
	id: string,
	data: { name: string; phoneNumber?: string; bankAccount?: string; wahaID?: string; wahaName?: string }
) => {
	console.log(id, data);
	const updatedStreamer = prisma.streamer.update({ where: { id }, data });
	return updatedStreamer;
};

export const findStreamersByCriteria = (criteria: {
	wahaID?: string;
	name?: string;
	phoneNumber?: string;
	bankAccount?: string;
	wahaName?: string;
}) =>
	prisma.streamer.findMany({
		where: {
			...(criteria.wahaID && { wahaID: { contains: criteria.wahaID, mode: "insensitive" } }),
			...(criteria.name && { name: { contains: criteria.name, mode: "insensitive" } }),
			...(criteria.phoneNumber && { phoneNumber: { contains: criteria.phoneNumber, mode: "insensitive" } }),
			...(criteria.bankAccount && { bankAccount: { contains: criteria.bankAccount, mode: "insensitive" } }),
			...(criteria.wahaName && { wahaName: { contains: criteria.wahaName, mode: "insensitive" } }),
		},
		orderBy: { name: "asc" },
		include: { referals: { include: { streamer: true, referred: true } } },
	});

export async function bulkImportContactsEntries(data: ImportedContactsData[]) {
	for (const entry of data) {
		const { wahaID, name, phoneNumber, bankAccount } = entry;

		if (!wahaID) {
			console.warn("Entrada sin wahaID, se ignora:", entry);
			continue;
		}

		const existingStreamer = await prisma.streamer.findUnique({
			where: { wahaID },
		});

		const cleanName = name ?? "Sin Nombre";
		const cleanPhone = phoneNumber ?? "Sin Telefono";
		const cleanBank = bankAccount ?? "Sin Cuenta";

		if (existingStreamer) {
			await prisma.streamer.update({
				where: { wahaID },
				data: {
					name: cleanName,
					phoneNumber: cleanPhone,
					bankAccount: cleanBank,
				},
			});
		} else {
			await prisma.streamer.create({
				data: {
					wahaID,
					name: cleanName,
					phoneNumber: cleanPhone,
					bankAccount: cleanBank,
					wahaName: "Sin Nombre",
				},
			});
		}
	}
}
