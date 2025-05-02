"use client";

import { Button } from "@/components/ui/button";
import { getWeeks } from "@/services/weeks";
import { FormattedWeek } from "@/types/weeks.types";
import { Plus } from "lucide-react";
import { useState } from "react";
import { CardWeek } from "./components/CardWeek";
import ModalAddWeek from "./components/ModalAddWeek";
import { getFormatedWeeks } from "./utils/formaters";
interface Props {
	weeks: FormattedWeek[];
}

export default function WeeksClientPage({ weeks }: Readonly<Props>) {
	const [open, setOpen] = useState(false);
	const [weekList, setWeekList] = useState(weeks);

	const handleOnClose = async () => {
		setOpen(false);
		const updatedWeeks = await getWeeks();
		setWeekList(getFormatedWeeks(updatedWeeks));
	};

	return (
		<div>
			<div className="flex justify-end mb-4 border p-2 rounded-lg">
				<Button className="cursor-pointer w-full sm:w-auto" onClick={() => setOpen(true)}>
					<Plus />
					Crear semana
				</Button>
			</div>
			<ModalAddWeek weeks={weekList} open={open} onClose={handleOnClose} setOpen={setOpen} />
			<div className="border p-2 rounded-lg">
				<h1 className="text-2xl font-semibold mb-4">Semanas disponibles</h1>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{weekList.map((week) => (
						<CardWeek key={week.id} week={week} />
					))}
				</div>
			</div>
		</div>
	);
}
