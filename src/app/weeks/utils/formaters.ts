import { Week } from "@/generated/prisma";
import { FormattedWeek } from "@/types/weeks.types";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export const formatWeek = (week: Week | null): FormattedWeek | null => {
	if (!week) return null;
	return {
		...week,
		formattedStart: format(new Date(week.startDate), "PPPP", { locale: es }),
		formattedEnd: format(new Date(week.endDate), "PPPP", { locale: es }),
	};
};

export const getFormatedWeeks = (weeks: Week[] | null): FormattedWeek[] => {
	if (!weeks) return [];

	return weeks.map((week) => formatWeek(week) as FormattedWeek);
};
