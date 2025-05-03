import { prisma } from "../../lib/prisma";

export const findReferalsByStreamerId = (streamerId: string) =>
	prisma.referal.findMany({
		where: { streamerId },
		include: { referred: true },
	});

export const findReferrerOfStreamer = (id: string) =>
	prisma.referal.findUnique({
		where: { id },
		include: { streamer: true },
	});

export const createReferal = (streamerId: string, referredId: string) =>
	prisma.referal.create({
		data: {
			streamerId,
			referredId,
		},
	});

export const deleteReferal = (id: string) =>
	prisma.referal.delete({
		where: { id },
	});

export const reassignReferal = (id: string, newStreamerId: string) =>
	prisma.referal.update({
		where: { id },
		data: { streamerId: newStreamerId },
	});

export const removeReferrer = (id: string) =>
	prisma.referal.delete({
		where: { id },
	});
