import { Configuration } from "@/generated/prisma";
import { prisma } from "../../lib/prisma";

export const getConfiguration = () =>
	prisma.configuration.findUnique({
		where: { id: "1" },
	});

export const updateConfiguration = (data: Configuration) =>
	prisma.configuration.update({
		where: { id: "1" },
		data,
	});

export const createConfiguration = () =>
	prisma.configuration.create({
		data: {
			id: "1",
			agencyName: "",
			payAffiliateProgram: false,
			payAffiliateProgramPercentage: 0,
			applyPenalties: false,
			penaltyPercentage: 0,
		},
	});
