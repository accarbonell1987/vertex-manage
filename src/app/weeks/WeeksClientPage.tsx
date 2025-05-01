"use client";

import { Button } from "@/components/ui/button";
import { Week } from "@/generated/prisma";
import { useState } from "react";
import { CardWeek } from "./components/CardWeek";
import ModalAddWeek from "./components/ModalAddWeek";

interface Props {
	weeks: Week[];
}

export default function WeeksClientPage({ weeks }: Readonly<Props>) {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<div className="flex justify-end mb-4">
				<Button onClick={() => setOpen(true)}>Crear semana</Button>
			</div>
			<ModalAddWeek weeks={weeks} open={open} setOpen={setOpen} />
			<h1 className="text-2xl font-semibold mb-4">Semanas disponibles</h1>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				{weeks.map((week) => (
					<CardWeek key={week.id} week={week} />
				))}
			</div>
		</div>
	);
}
