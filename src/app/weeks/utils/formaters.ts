import { Week } from "@/generated/prisma";
import { FormattedWeek } from "@/types/weeks.types";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export const getFormatedWeeks = (weeks: Week[]): FormattedWeek[] => {
	return weeks.map((week) => ({
		...week,
		formattedStart: format(new Date(week.startDate), "PPPP", { locale: es }),
		formattedEnd: format(new Date(week.endDate), "PPPP", { locale: es }),
	}));
};
