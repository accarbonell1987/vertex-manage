import { ConfigurationType } from "@/types/configuration.types";
import { StreamingDataWithStreamer } from "@/types/streamingData.types";
import dayjs from "dayjs";

export const getTotalDoneInWeekByColumn = (data: StreamingDataWithStreamer[], columnKey: string): number => {
	if (!data?.length) return 0;

	const total = data.reduce((total, data) => total + Number(data[columnKey as keyof StreamingDataWithStreamer]), 0) ?? 0;
	return Number(total.toFixed(2));
};

export const getPreRosterTotalsInWeekByColumn = (data: StreamingDataWithStreamer[], columnKey: string): number => {
	if (!data?.length) return 0;

	const total =
		data.reduce((total, data) => {
			if (!data[columnKey as keyof StreamingDataWithStreamer]) return total;
			return data.streamer.allowInRoster ? total + Number(data[columnKey as keyof StreamingDataWithStreamer]) : total;
		}, 0) ?? 0;

	return Number(total.toFixed(2));
};

export const getDynamicData = (data: StreamingDataWithStreamer[], configuration: ConfigurationType) => {
	const penalizedData = getPenalizedData(data, configuration);
	const referralData = getReferealData(penalizedData, configuration);

	return referralData.toSorted((a, b) => (b.streamerSalary > a.streamerSalary ? 1 : -1));
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
	const streamersAndData = data
		.filter((p) => p.streamerSalary > 0)
		.map((data) => {
			return { ...data.streamer, streamerData: data };
		});

	const streamersDataWithReferealAmount = streamersAndData
		.map((streamer) => {
			const referrals = streamer.referals;
			//! si tiene referidos y el streamer cobra en esta semana
			if (referrals?.length > 0 && streamer.streamerData.streamerSalary > 0) {
				//! obtenemos los streamers referidos
				const referralsOfStreamer: typeof streamersAndData = [];
				//! recorremos los referidos y si esta en los streamers lo voy adicionando
				referrals.forEach((referral) => {
					const streamerOfReferral = streamersAndData.find((s) => s.id === referral.referredId);
					if (!streamerOfReferral) return;
					referralsOfStreamer.push(streamerOfReferral);
				});

				//! si no tenemos ninguno devuelvo la data
				if (!referralsOfStreamer.length) return;

				const filteredReferrals = referralsOfStreamer.filter((s) => {
					//! si cada streamer tiene más de dos semanas desde que entro en el campo createdAt se deshecha
					const hasTwoWeeks = dayjs().diff(s.createdAt, "week") < 2;
					return hasTwoWeeks;
				});

				//! si no tenemos ninguno devuelvo la data
				if (!filteredReferrals.length) return;

				//! buscar la data de los referidos
				const totalReferralSalary = filteredReferrals.reduce(
					(total: number, current: (typeof streamersAndData)[number]) => total + Number(current.streamerData.streamerSalary ?? 0),
					0
				);

				return { ...streamer.streamerData, referralSalary: totalReferralSalary * (configuration.payAffiliateProgramPercentage / 100) };
			}

			return {
				...streamer.streamerData,
				referralSalary: 0,
			};
		})
		.filter((s) => !!s);

	//! remplazar los streamers con datos de referidos en data
	const returnedData = data.map((data) => {
		const streamer = streamersDataWithReferealAmount.find((s) => s.id === data.id);
		return { ...data, ...streamer };
	});

	return returnedData;
};
