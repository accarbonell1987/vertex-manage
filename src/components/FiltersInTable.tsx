import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ColumnTableType } from "@/types/table.types";
import ToolTip from "./ToolTip";

const FiltersInTable = ({
	defaultColumns,
	visibleColumns,
	rowsPerPage,
	setVisibleColumns,
	setRowsPerPage,
	setCurrentPage,
}: {
	defaultColumns: ColumnTableType[];
	visibleColumns: string[];
	rowsPerPage: number;
	setVisibleColumns: (columns: string[]) => void;
	setRowsPerPage: (rowsPerPage: number) => void;
	setCurrentPage: (currentPage: number) => void;
}) => {
	const toggleColumn = (key: string) => {
		setVisibleColumns((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
	};

	return (
		<div className="flex flex-col gap-4 sm:flex-row">
			<ToolTip content="Columnas Visibles">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline">Columnas Visibles</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						{defaultColumns.map((column) => (
							<DropdownMenuCheckboxItem
								key={column.key}
								checked={visibleColumns.includes(column.key)}
								onCheckedChange={() => toggleColumn(column.key)}
							>
								{column.title}
							</DropdownMenuCheckboxItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</ToolTip>
			<div className="flex justify-end mb-2 sm:mb-0">
				<Select
					value={String(rowsPerPage)}
					onValueChange={(value) => {
						setRowsPerPage(Number(value));
						setCurrentPage(1);
					}}
				>
					<SelectTrigger className="w-full sm:w-36">
						<SelectValue placeholder="Registros por página" />
					</SelectTrigger>
					<SelectContent>
						{[10, 20, 30, 50].map((num) => (
							<SelectItem key={num} value={String(num)}>
								{num} Registros
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
		</div>
	);
};

export default FiltersInTable;
