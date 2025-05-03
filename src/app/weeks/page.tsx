import { findAllWeeks } from "../lib/repositories/weeks";
import { getFormatedWeeks } from "./utils/formaters";
import Weeks from "./Weeks";

export default async function WeeksPage() {
	const weeks = await findAllWeeks();
	const weeksFormatted = getFormatedWeeks(weeks);

	return <Weeks weeks={weeksFormatted} />;
}
