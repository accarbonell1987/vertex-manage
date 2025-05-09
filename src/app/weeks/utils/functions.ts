import { ConfigurationType } from "@/types/configuration.types";
import { StreamingDataWithStreamer } from "@/types/streamingData.types";

export const getTotalDoneInWeekByColumn = (data: StreamingDataWithStreamer[], columnKey: string): number => {
	if (!data?.length) return 0;

	const total = data.reduce((total, data) => total + Number(data[columnKey as keyof StreamingDataWithStreamer]), 0) ?? 0;
	return Number(total.toFixed(2));
};

export const getPreRosterTotalsInWeekByColumn = (data: StreamingDataWithStreamer[], columnKey: string): number => {
	if (!data?.length) return 0;

	const total =
		data.reduce((total, data) => {
			return data.streamer.allowInRoster ? total + Number(data[columnKey as keyof StreamingDataWithStreamer]) : total;
		}, 0) ?? 0;
	return Number(total.toFixed(2));
};

export const getDynamicData = (data: StreamingDataWithStreamer[], configuration: ConfigurationType) => {
	if (!configuration.applyPenalties) return data;

	const dynamicData = data.map((data) => {
		let streamerPenalizated = 0;
		let agencyBonus = 0;

		//! si el streamer va a cobrar ver si lo penalizamos
		if (data.streamerSalary > 0 && data.streamer.applyPenalties) {
			//! la penalización se calcula PENALIZACION / TOTAL_DIAMANTES_PUNTOS * SALARIO_STREAMER
			streamerPenalizated = configuration.applyPenalties ? data.streamerSalary * (data.diamondsPenalties / data.diamondsAndPoints) : 0;
			//! el bono de agencia se calcula SALARIO_AGENCIA + PENALIZACION
			agencyBonus = configuration.applyPenalties ? data.agencySalary + streamerPenalizated : 0;
		}

		return {
			...data,
			streamerPenalizated,
			agencyBonus,
		};
	});

	return dynamicData;
};
