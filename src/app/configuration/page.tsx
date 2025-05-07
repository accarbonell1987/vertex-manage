import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getConfiguration } from "../lib/repositories/configuration";
import Configuration from "./Configuration";

const ConfigurationPage = async () => {
	const configuration = await getConfiguration();

	if (!configuration) return;

	return (
		<Card>
			<CardHeader>
				<CardTitle>Configuración</CardTitle>
				<CardDescription>Configuración general de la aplicación</CardDescription>
			</CardHeader>
			<CardContent>
				<Configuration configuration={configuration} />
			</CardContent>
		</Card>
	);
};

export default ConfigurationPage;
