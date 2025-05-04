"use client";

import { Card, CardContent } from "@/components/ui/card";
import { getWeekById } from "@/services/weeks";
import { WeekWithData } from "@/types/weeks.types";
import { useState } from "react";
import { formatWeek } from "../../utils/formaters";
import StreamingWeekActions from "./StreamingWeekActions";
import StreamingWeekDetails from "./StreamingWeekDetails";

interface StreamingDataLayoutProps {
	week: WeekWithData;
}

const StreamingDataLayout = ({ week }: StreamingDataLayoutProps) => {
	const [weekData, setWeekData] = useState<WeekWithData>(week);
	const [actionLoading, setActionLoading] = useState(false);

	const handleOnActionRefresh = async () => {
		setActionLoading(true);
		const updatedWeek = await getWeekById(week.id);
		if (!updatedWeek) return;

		const formattedWeek = formatWeek(updatedWeek, "PPP");
		if (!formattedWeek) return;

		setWeekData(formattedWeek);
		setActionLoading(false);
	};

	return (
		<Card className="flex justify-end gap-4">
			<CardContent className="flex flex-col gap-4 sm:flex-row">
				<Card className="w-full gap-4 sm:w-3/4">
					<CardContent>{}</CardContent>
				</Card>
				<div className="flex flex-col gap-4 sm:w-1/4">
					<StreamingWeekDetails week={weekData} />
					<StreamingWeekActions week={weekData} onRefresh={handleOnActionRefresh} actionLoading={actionLoading} />
				</div>
			</CardContent>
		</Card>
	);
};

export default StreamingDataLayout;
