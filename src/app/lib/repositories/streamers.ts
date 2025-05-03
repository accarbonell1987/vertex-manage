import { prisma } from "../../lib/prisma";

export const findAllStreamers = () =>
	prisma.streamer.findMany({
		orderBy: { name: "asc" },
	});

export const findStreamerById = (id: string) =>
	prisma.streamer.findUnique({
		where: { id },
	});

export const createStreamer = (data: { name: string; phoneNumber: string; bankAccount: string }) =>
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
