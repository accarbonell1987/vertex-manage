import { FormattedWeek } from "../../../types/weeks.types";

interface Props {
	week: FormattedWeek;
}

export function CardWeek({ week }: Readonly<Props>) {
	return (
		<div className="flex flex-col gap-2 rounded-lg border p-4 bg-white shadow-sm hover:shadow-md transition-all">
			<h2 className="text-lg font-semibold text-gray-800">{week.name}</h2>
			<div className="flex gap-2 border p-2 rounded-lg">
				<span className="text-sm text-gray-600">
					<b>Desde:</b> {week.formattedStart}
				</span>
				<span className="text-sm text-gray-600">
					<b>Hasta:</b> {week.formattedEnd}
				</span>
			</div>
		</div>
	);
}
