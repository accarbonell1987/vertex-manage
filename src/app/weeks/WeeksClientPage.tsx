"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getWeeks } from "@/services/weeks";
import { FormattedWeek } from "@/types/weeks.types";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import AddWeekModal from "./components/AddWeekModal";
import { CardWeek } from "./components/CardWeek";
import { getFormatedWeeks } from "./utils/formaters";

export default function WeeksClientPage() {
	const [open, setOpen] = useState(false);
	const [weekList, setWeekList] = useState<FormattedWeek[]>([]);

	//! cargar semanas
	useEffect(() => {
		const fetchWeeks = async () => {
			const weeks = await getWeeks();
			setWeekList(getFormatedWeeks(weeks));
		};
		fetchWeeks();
	}, []);

	const handleOnClose = async () => {
		setOpen(false);
		const updatedWeeks = await getWeeks();
		setWeekList(getFormatedWeeks(updatedWeeks));
	};

	return (
		<>
			<AddWeekModal weeks={weekList} open={open} onClose={handleOnClose} setOpen={setOpen} />
			<Card className="flex justify-end">
				<CardHeader>
					<CardTitle>Semanas</CardTitle>
					<CardDescription>Lista de semanas disponibles</CardDescription>
					<Button className="cursor-pointer w-full sm:w-max-[200px]" onClick={() => setOpen(true)}>
						<Plus />
						Crear semana
					</Button>
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
