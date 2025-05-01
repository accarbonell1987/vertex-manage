import DatePickerInput from "@/components/DatePickerInput";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Week } from "@/generated/prisma";
import { endOfWeek, startOfWeek } from "date-fns";
import { useEffect, useState } from "react";

const ModalAddWeek = ({ weeks, open, setOpen }: { weeks: Week[]; open: boolean; setOpen: (open: boolean) => void }) => {
	const today = new Date();
	const defaultStartDate = startOfWeek(today, { weekStartsOn: 1 }); // lunes
	const defaultEndDate = endOfWeek(today, { weekStartsOn: 1 }); // domingo

	const [startDate, setStartDate] = useState<Date | undefined>(defaultStartDate);
	const [endDate, setEndDate] = useState<Date | undefined>(defaultEndDate);
	const [name, setName] = useState(`Semana No: ${weeks.length + 1}`);
	const [notes, setNotes] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		if (open) {
			const now = new Date();
			setStartDate(startOfWeek(now, { weekStartsOn: 1 }));
			setEndDate(endOfWeek(now, { weekStartsOn: 1 }));
			setName(`Semana No: ${weeks.length + 1}`);
			setNotes("");
			setError("");
		}
	}, [open, weeks.length]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!name.trim()) return setError("El nombre es obligatorio");
		if (!startDate || !endDate) return setError("Debe seleccionar ambas fechas");
		if (startDate > endDate) return setError("La fecha de inicio debe ser anterior o igual a la de fin");

		// TODO: lógica para guardar
		setError("");
		setOpen(false);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Adicionar Nueva Semana</DialogTitle>
				</DialogHeader>
				<form className="space-y-4" onSubmit={handleSubmit}>
					<div className="flex flex-col gap-2">
						<Label htmlFor="name">Nombre de la semana</Label>
						<Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
					</div>
					<div className="flex gap-4">
						<DatePickerInput label="Fecha de inicio" date={startDate} setDate={setStartDate} id="startDate" />
						<DatePickerInput label="Fecha de fin" date={endDate} setDate={setEndDate} id="endDate" />
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="notes">Observaciones</Label>
						<Input id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
					</div>
					{error && <p className="text-sm text-red-500">{error}</p>}
					<Button className="w-full" type="submit">
						Guardar
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default ModalAddWeek;
