import { createConfiguration, getConfiguration } from "./lib/repositories/configuration";
import WeeksPage from "./weeks/page";

export default async function Home() {
	const config = await getConfiguration();

	if (!config) {
		await createConfiguration();
	}

	return <WeeksPage />;
}
