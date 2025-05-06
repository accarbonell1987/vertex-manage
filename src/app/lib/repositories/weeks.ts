// lib/repositories/weeks.ts
import { CreateWeekPayload } from "@/types/weeks.types";
import { prisma } from "../../lib/prisma";

export const findAllWeeks = () => prisma.week.findMany({ orderBy: { date: "desc" }, include: { data: { include: { streamer: true } } } });

export const findWeekById = (id: string) =>
	prisma.week.findUnique({
		where: { id },
		include: {
			data: {
				include: {
					streamer: true,
				},
			},
		},
	});

export const createWeek = (data: CreateWeekPayload) => prisma.week.create({ data });

export const closeOpenWeeks = () => prisma.week.updateMany({ where: { closed: false }, data: { closed: true } });

export const deleteWeek = async (id: string) => {
	await prisma.streamingData.deleteMany({
		where: { weekId: id },
	});

	return prisma.week.delete({ where: { id } });
};

export const closeWeek = (id: string) => prisma.week.update({ where: { id }, data: { closed: true } });
