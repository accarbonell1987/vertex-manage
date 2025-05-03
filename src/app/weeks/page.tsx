import WeeksClientPage from "./WeeksClientPage";

export default async function WeeksPage() {
	// const weeks = await prisma.week.findMany({ orderBy: { date: "desc" } });
	// const weeksFormatted = getFormatedWeeks(weeks);

	return <WeeksClientPage />;
}
