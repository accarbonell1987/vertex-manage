"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getWeeks } from "@/services/weeks";
import { FormattedWeek } from "@/types/weeks.types";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddWeekModal from "./components/AddWeekModal";
import { CardWeek } from "./components/CardWeek";
import { getFormatedWeeks } from "./utils/formaters";

export default function Weeks({ weeks }: Readonly<{ weeks: FormattedWeek[] }>) {
	const [open, setOpen] = useState(false);
	const [weekList, setWeekList] = useState<FormattedWeek[]>(weeks);

	//! cargar semanas
	// useEffect(() => {
	// 	const fetchWeeks = async () => {
	// 		const weeks = await getWeeks();
	// 		setWeekList(getFormatedWeeks(weeks));
	// 	};
	// 	fetchWeeks();
	// }, []);

	const handleOnClose = async () => {
		setOpen(false);
		const updatedWeeks = await getWeeks();
		setWeekList(getFormatedWeeks(updatedWeeks));
	};

	const hasOpenWeek = weekList.some((week) => !week.closed);

	return (
		<>
			<AddWeekModal weeks={weekList} open={open} onClose={handleOnClose} setOpen={setOpen} />
			<Card className="flex justify-end gap-4">
				<CardHeader>
					<CardTitle>
						<div className="flex items-center gap-2">
							Gestión de Semanas
							<Button className="cursor-pointer ml-auto" onClick={() => setOpen(true)} disabled={hasOpenWeek}>
								<Plus />
								Crear semana
							</Button>
						</div>
					</CardTitle>
				</CardHeader>
				<CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{weekList.map((week) => (
						<CardWeek key={week.id} week={week} onRefresh={handleOnClose} />
					))}
				</CardContent>
			</Card>
		</>
	);
}
