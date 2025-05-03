import { prisma } from "../../lib/prisma";

export const findAllStreamers = () =>
	prisma.streamer.findMany({
		orderBy: { name: "asc" },
	});

export const findStreamerById = (id: string) =>
	prisma.streamer.findUnique({
		where: { id },
	});

export const createStreamer = (data: { name: string; phoneNumber: string; bankAccount: string; wahaID: string }) =>
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

export const updateStreamer = (id: string, data: { name: string; phoneNumber: string; bankAccount: string }) =>
	prisma.streamer.update({ where: { id }, data });

export const findStreamersByCriteria = (criteria: { wahaID?: string; name?: string; phoneNumber?: string; bankAccount?: string }) =>
	prisma.streamer.findMany({
		where: {
			...(criteria.wahaID && { wahaID: { contains: criteria.wahaID, mode: "insensitive" } }),
			...(criteria.name && { name: { contains: criteria.name, mode: "insensitive" } }),
			...(criteria.phoneNumber && { phoneNumber: { contains: criteria.phoneNumber, mode: "insensitive" } }),
			...(criteria.bankAccount && { bankAccount: { contains: criteria.bankAccount, mode: "insensitive" } }),
		},
		orderBy: { name: "asc" },
	});
