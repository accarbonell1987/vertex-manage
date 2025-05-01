import { prisma } from "../lib/prisma";
import WeeksClientPage from "./WeeksClientPage";

export default async function WeeksPage() {
	const weeks = await prisma.week.findMany({ orderBy: { date: "desc" } });

	return <WeeksClientPage weeks={weeks} />;
}
