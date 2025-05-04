import { findWeekById } from "@/app/lib/repositories/weeks";
import { formatWeek } from "../utils/formaters";
import StreamingDataLayout from "./components/StreamingDataLayout";

interface PageProps {
	params: Promise<{ id: string }>;
}

export default async function WeekDetailPage({ params }: PageProps) {
	const { id } = await params;
	const week = await findWeekById(id);
	const formattedWeek = formatWeek(week, "PPP");

	if (!formattedWeek) {
		return <div className="p-4">Semana no encontrada.</div>;
	}

	return <StreamingDataLayout week={formattedWeek} />;
}
