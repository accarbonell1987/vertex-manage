import { Streamer, StreamingData, Week } from "@/generated/prisma";

export interface CreateWeekPayload {
	name: string;
	startDate: Date;
	endDate: Date;
	date: Date;
	observation: string;
}

export interface WeekWithData extends Week {
	formattedStart: string;
	formattedEnd: string;
	data: (StreamingData & {
		streamer: Streamer;
	})[];
}
