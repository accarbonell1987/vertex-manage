import { StreamingDataWithStreamer } from "@/types/streamingData.types";
import { WeekWithData } from "@/types/weeks.types";

export const getTotalDoneInWeekByColumn = (week: WeekWithData, columnKey: string): number => {
	const total = week.data?.reduce((total, data) => total + Number(data[columnKey as keyof StreamingDataWithStreamer]), 0) ?? 0;
	return Number(total.toFixed(2));
};

export const getPreRosterTotalsInWeekByColumn = (week: WeekWithData, columnKey: string): number => {
	const total =
		week.data?.reduce((total, data) => {
			return data.streamer.allowInRoster ? total + Number(data[columnKey as keyof StreamingDataWithStreamer]) : total;
		}, 0) ?? 0;
	return Number(total.toFixed(2));
};
