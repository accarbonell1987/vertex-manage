"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ConfigurationType } from "@/types/configuration.types";
import { SaveAll } from "lucide-react";
import { useEffect, useState } from "react";
import { updateConfiguration } from "../lib/repositories/configuration";

const Configuration = ({ configuration }: { configuration: ConfigurationType }) => {
	const [currentConfiguration, setCurrentConfiguration] = useState<ConfigurationType | null>(null);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentConfiguration({
			...configuration,
			[e.target.name as keyof ConfigurationType]: e.target.value,
		});
	};

	useEffect(() => {
		setCurrentConfiguration(configuration);
	}, [configuration]);

	const handleOnSave = async () => {
		if (!currentConfiguration) return;

		try {
			await updateConfiguration(currentConfiguration);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-2">
				<Label htmlFor="agencyName">Nombre de la Agencia</Label>
				<Input id="agencyName" name="agencyName" value={currentConfiguration?.agencyName ?? ""} onChange={handleOnChange} />
			</div>
			<div className="flex flex-col gap-2">
				<div className="flex flex-col gap-4">
					<div className="flex gap-2 items-center">
						<Switch
							id="payAffiliateProgram"
							checked={currentConfiguration?.payAffiliateProgram ?? false}
							onCheckedChange={(value) => setCurrentConfiguration({ ...currentConfiguration, payAffiliateProgram: value })}
						/>
						<Label htmlFor="payAffiliateProgram">Cotiza en Nómina</Label>
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="payAffiliateProgramPercentage">Porciento de Programa de Afiliados</Label>
						<Input
							id="payAffiliateProgramPercentage"
							name="payAffiliateProgramPercentage"
							value={currentConfiguration?.payAffiliateProgramPercentage ?? ""}
							onChange={handleOnChange}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<div className="flex gap-2 items-center">
						<Switch
							id="applyPenalties"
							checked={currentConfiguration?.applyPenalties ?? false}
							onCheckedChange={(value) => setCurrentConfiguration({ ...currentConfiguration, applyPenalties: value })}
						/>
						<Label htmlFor="applyPenalties">Aplica Penalizaciones</Label>
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="penaltyPercentage">Porciento de Penalizaciones</Label>
						<Input
							id="penaltyPercentage"
							name="penaltyPercentage"
							value={currentConfiguration?.penaltyPercentage ?? ""}
							onChange={handleOnChange}
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
