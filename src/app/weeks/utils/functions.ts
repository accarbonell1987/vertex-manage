import { ConfigurationType } from "@/types/configuration.types";
import { StreamerWithReferals } from "@/types/streamers.types";
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
	const penalizedData = getPenalizedData(data, configuration);
	const referralData = getReferealData(penalizedData, configuration);
	console.log("🚀 ~ getDynamicData ~ referralData:", referralData);

	return referralData;
};

const getPenalizedData = (data: StreamingDataWithStreamer[], configuration: ConfigurationType): StreamingDataWithStreamer[] => {
	if (!configuration.applyPenalties) return data;

	const penalizedData = data.map((data) => {
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

	return penalizedData;
};

const getReferealData = (data: StreamingDataWithStreamer[], configuration: ConfigurationType): StreamingDataWithStreamer[] => {
	if (!configuration.payAffiliateProgram) return data;

	//! aqui ya filtro por los streamers que cobran
	const streamers = data.filter((p) => p.streamerSalary > 0).map((data) => data.streamer);

	data.forEach((streamerData: StreamingDataWithStreamer) => {
		const referrals = streamerData.streamer.referals;
		//! si tiene referidos y el streamer cobra en esta semana
		if (referrals?.length > 0 && streamerData.streamerSalary > 0) {
			//! obtenemos los streamers referidos

			const referralsOfStreamer: StreamerWithReferals[] = [];
			//! recorremos los referidos y si esta en los streamers lo voy adicionando
			referrals.forEach((referral) => {
				const streamer = streamers.find((streamer) => streamer.id === referral.referredId);
				if (!streamer) return;
				referralsOfStreamer.push(streamer);
			});
			//! si no tenemos ninguno devuelvo la data
			if (!referralsOfStreamer.length) return streamerData;

			const filteredReferrals = referralsOfStreamer.filter((streamer) => {
				//! si cada streamer tiene más de dos semanas desde que entro en el campo createdAt se deshecha
				const hasTwoWeeks = new Date().getTime() - streamer.createdAt.getTime() > 14 * 24 * 60 * 60 * 1000;
				return hasTwoWeeks;
			});
			//! si no tenemos ninguno devuelvo la data
			if (!filteredReferrals.length) return streamerData;

			//! buscar la data de los referidos
			const dataOfReferrals = filteredReferrals.map((streamer) => data.find((data) => data.streamerId === streamer.id));
			const totalReferralSalary = dataOfReferrals.reduce((total, current) => total + Number(current?.streamerSalary ?? 0), 0);

			return { ...data, referralSalary: totalReferralSalary };
		}

		return {
			...data,
		};
	});

	return data;
};
