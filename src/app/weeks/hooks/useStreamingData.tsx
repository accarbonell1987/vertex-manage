import { getWeekById } from "@/services/weeks";
import { WeekWithData } from "@/types/weeks.types";
import { useState } from "react";
import { formatWeek } from "../utils/formaters";

const useStreamingData = ({ init }: Readonly<{ init: WeekWithData }>) => {
	const [weekData, setWeekData] = useState<WeekWithData>(init);
	const [actionLoading, setActionLoading] = useState(false);

	const handleChangeWeekData = (weekData: WeekWithData) => {
		setWeekData(weekData);
	};

	const handleOnRefresh = async () => {
		setActionLoading(true);
		const updatedWeek = await getWeekById(weekData.id);
		if (!updatedWeek) return;

		const formattedWeek = formatWeek(updatedWeek, "PPP");
		if (!formattedWeek) return;

		handleChangeWeekData(formattedWeek);
		setActionLoading(false);
	};

	const handleFindByCriteria = async (criteria: { wahaID?: string; name?: string }) => {
		setActionLoading(true);
		const week = await getWeekById(criteria.wahaID!);
		if (!week) return;

		const formattedWeek = formatWeek(week, "PPP");
		if (!formattedWeek) return;

		handleChangeWeekData(formattedWeek);
		setActionLoading(false);
	};

	return {
		weekData,
		handleChangeWeekData,
		handleOnRefresh,
		handleFindByCriteria,
		actionLoading,
		setActionLoading,
	};
};

export default useStreamingData;
