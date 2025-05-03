"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FindStreamersProps {
	onFind: (criteria: { wahaID?: string; name?: string; phoneNumber?: string; bankAccount?: string }) => void;
}

const FindStreamers = ({ onFind }: FindStreamersProps) => {
	const handleFind = (e: React.FormEvent) => {
		e.preventDefault();
		const find = (e.target as HTMLFormElement).find.value;
		const criteria = (e.target as HTMLFormElement).criteria.value;
		onFind({ [criteria]: find });
	};

	return (
		<Card>
			<CardContent>
				<form className="flex flex-col gap-4 w-full sm:flex-row sm:items-end" onSubmit={handleFind}>
					<div className="flex flex-col gap-2 w-full">
						<Label htmlFor="find">Datos a Buscar</Label>
						<Input name="find" placeholder="Buscar" />
					</div>
					<div className="flex flex-col gap-2 w-full">
						<Label htmlFor="criteria">Criterio</Label>
						<Select name="criteria">
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Criterio" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="wahaID">Waha ID</SelectItem>
									<SelectItem value="name">Nombre</SelectItem>
									<SelectItem value="phoneNumber">Teléfono</SelectItem>
									<SelectItem value="bankAccount">Cuenta Bancaria</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<Button className="w-full sm:w-auto cursor-pointer" type="submit">
						Buscar
					</Button>
				</form>
			</CardContent>
		</Card>
	);
};

export default FindStreamers;
