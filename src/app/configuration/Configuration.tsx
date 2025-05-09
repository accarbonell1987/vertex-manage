"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ConfigurationType } from "@/types/configuration.types";
import { SaveAll } from "lucide-react";
import { useEffect, useState } from "react";
import { updateConfiguration } from "../lib/repositories/configuration";
import { ToastSonner } from "../lib/sonner";

const Configuration = ({ configuration }: { configuration: ConfigurationType }) => {
	const [currentConfiguration, setCurrentConfiguration] = useState<ConfigurationType>(configuration);

	useEffect(() => {
		setCurrentConfiguration(configuration);
	}, [configuration]);

	const handleOnChange = (name: string, value: string | number) => {
		if (!value) return;

		const valueString = name === "agencyName" ? value.toString() : value;
		const configurationValue = {
			...currentConfiguration,
			[name]: valueString,
		};
		setCurrentConfiguration(configurationValue);
	};
	const handleOnSwitchChange = (value: boolean, name: keyof ConfigurationType) => {
		const configurationValue = {
			...currentConfiguration,
			[name]: value,
		};
		setCurrentConfiguration(configurationValue);
	};
	const handleOnSave = async () => {
		if (!currentConfiguration) return;

		try {
			ToastSonner.showLoading("Guardando configuración");
			const configurationValue = {
				id: "1",
				...currentConfiguration,
			};
			await updateConfiguration(configurationValue);
			ToastSonner.showSuccess("Configuración guardada");
		} catch (error) {
			console.error(error);
			ToastSonner.showError("Error al guardar la configuración");
		}
	};

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-2">
				<Label htmlFor="agencyName">Nombre de la Agencia</Label>
				<Input
					id="agencyName"
					name="agencyName"
					value={currentConfiguration?.agencyName ?? ""}
					onChange={(e) => handleOnChange("agencyName", e.target.value)}
				/>
			</div>
			<div className="flex flex-col gap-2">
				<div className="flex flex-col gap-4 sm:flex-row">
					<div className="flex gap-2 items-center w-1/3">
						<Switch
							id="payAffiliateProgram"
							name="payAffiliateProgram"
							checked={currentConfiguration?.payAffiliateProgram ?? false}
							onCheckedChange={(value) => handleOnSwitchChange(value, "payAffiliateProgram")}
						/>
						<Label htmlFor="payAffiliateProgram">Aplica Programa de Afiliados</Label>
					</div>
					<div className="flex flex-col gap-2 w-full">
						<Label htmlFor="payAffiliateProgramPercentage">Porciento de Programa de Afiliados</Label>
						<Input
							id="payAffiliateProgramPercentage"
							name="payAffiliateProgramPercentage"
							type="number"
							value={currentConfiguration?.payAffiliateProgramPercentage ?? ""}
							disabled={!currentConfiguration?.payAffiliateProgram}
							onChange={(e) => handleOnChange("payAffiliateProgramPercentage", e.target.value)}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-4 sm:flex-row">
					<div className="flex gap-2 items-center w-1/3">
						<Switch
							id="applyPenalties"
							name="applyPenalties"
							checked={currentConfiguration?.applyPenalties ?? false}
							onCheckedChange={(value) => handleOnSwitchChange(value, "applyPenalties")}
						/>
						<Label htmlFor="applyPenalties">Aplica Penalizaciones</Label>
					</div>
					<div className="flex flex-col gap-2 w-full">
						<Label htmlFor="penaltyPercentage">Porciento de Penalizaciones</Label>
						<Input
							id="penaltyPercentage"
							name="penaltyPercentage"
							type="number"
							value={currentConfiguration?.penaltyPercentage ?? ""}
							onChange={(e) => handleOnChange("penaltyPercentage", e.target.value)}
							disabled={!currentConfiguration?.applyPenalties}
						/>
					</div>
				</div>
			</div>
			<Button className="cursor-pointer ml-auto" onClick={handleOnSave}>
				<SaveAll />
				Guardar
			</Button>
		</div>
	);
};

export default Configuration;
