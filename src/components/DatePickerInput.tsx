import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

const DatePickerInput = ({
	label,
	date,
	setDate,
	id,
}: {
	label: string;
	date: Date | undefined;
	setDate: (date: Date | undefined) => void;
	id: string;
}) => (
	<div className="flex flex-col flex-1 gap-2">
		<Label htmlFor={id}>{label}</Label>
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline" className={cn("justify-start text-left font-normal", !date && "text-muted-foreground")}>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{date ? date.toLocaleDateString() : "Seleccionar fecha"}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
			</PopoverContent>
		</Popover>
	</div>
);

export default DatePickerInput;
