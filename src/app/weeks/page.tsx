import { prisma } from "../lib/prisma";
import WeeksClientPage from "./WeeksClientPage";

import { format } from "date-fns";
import { es } from "date-fns/locale";

export default async function WeeksPage() {
	const weeks = await prisma.week.findMany({ orderBy: { date: "desc" } });
	const weeksFormatted = weeks.map((w) => ({
		...w,
		formattedStart: format(new Date(w.startDate), "PPPP", { locale: es }),
		formattedEnd: format(new Date(w.endDate), "PPPP", { locale: es }),
	}));

	return <WeeksClientPage weeks={weeksFormatted} />;
}
