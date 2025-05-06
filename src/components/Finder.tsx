"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

interface FinderProps {
	onFind: (criteria: { [key: string]: string }) => void;
	criteriaOptions: { value: string; label: string }[];
}

const Finder = ({ onFind, criteriaOptions }: FinderProps) => {
	const [findValue, setFindValue] = useState("");
	const [criteria, setCriteria] = useState("");
	const [showCleanButton, setShowCleanButton] = useState(false);

	const handleFind = (e: React.FormEvent) => {
		e.preventDefault();
		if (criteria) {
			onFind({ [criteria]: findValue });
		}
		setShowCleanButton(true);
	};

	const handleClear = () => {
		setFindValue("");
		setCriteria("");
		onFind({});
		setShowCleanButton(false);
	};

	return (
		<Card>
			<CardContent>
				<form className="flex flex-col gap-4 w-full sm:flex-row sm:items-end" onSubmit={handleFind}>
					<div className="flex flex-col gap-2 w-full">
						<Label htmlFor="find">Datos a Buscar</Label>
						<Input name="find" placeholder="Buscar" value={findValue} onChange={(e) => setFindValue(e.target.value)} disabled={!criteria} />
					</div>
					<div className="flex flex-col gap-2 w-full">
						<Label htmlFor="criteria">Criterio</Label>
						<Select value={criteria} onValueChange={setCriteria}>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Criterio" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									{criteriaOptions.map((option) => (
										<SelectItem key={option.value} value={option.value} className="cursor-pointer">
											{option.label}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<div className="flex flex-col gap-2 w-full sm:w-auto sm:flex-row">
						<Button className="w-full sm:w-auto cursor-pointer" type="submit">
							Buscar
						</Button>
						{showCleanButton ? (
							<Button className="w-full sm:w-auto cursor-pointer" type="button" variant="outline" onClick={handleClear}>
								Limpiar
							</Button>
						) : null}
					</div>
				</form>
			</CardContent>
		</Card>
	);
};

export default Finder;
