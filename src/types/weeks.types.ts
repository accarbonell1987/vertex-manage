import { Week } from "@/generated/prisma";

export interface CreateWeekPayload {
	name: string;
	startDate: Date;
	endDate: Date;
	date: Date;
	observation: string;
}

export interface FormattedWeek extends Week {
	formattedStart: string;
	formattedEnd: string;
}
