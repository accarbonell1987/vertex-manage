import CopyToClipboard from "@/components/CopyToClipboard";
import ToolTip from "@/components/ToolTip";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StreamingDataWithStreamer } from "@/types/streamingData.types";
import { WeekWithData } from "@/types/weeks.types";
import { useState } from "react";

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

export const DEFAULT_COLUMNS = [
	{
		key: "wahaID",
		title: "ID de Waha",
		visible: true,
		render: (data: StreamingDataWithStreamer) => <CopyToClipboard text={data.streamer.wahaID} />,
	},
	{
		key: "wahaName",
		title: "Nombre de Waha",
		visible: true,
		render: (data: StreamingDataWithStreamer) => <CopyToClipboard text={data.streamer.wahaName} />,
	},
	{
		key: "name",
		title: "Nombre",
		visible: true,
		render: (data: StreamingDataWithStreamer) => <CopyToClipboard text={data.streamer.name} />,
	},
	{
		key: "phoneNumber",
		title: "Telefono",
		visible: false,
		render: (data: StreamingDataWithStreamer) => <CopyToClipboard text={data.streamer.phoneNumber || "-"} />,
	},
	{
		key: "bankAccount",
		title: "Cuenta Bancaria",
		visible: false,
		render: (data: StreamingDataWithStreamer) => <CopyToClipboard text={data.streamer.bankAccount || "-"} />,
	},
	{ key: "baseSalaryIM", title: "Salario Base (IM)", visible: false, render: (data: StreamingDataWithStreamer) => data.baseSalaryIM },
	{
		key: "baseSalaryRoom",
		title: "Salario Base (Habitación)",
		visible: false,
		render: (data: StreamingDataWithStreamer) => data.baseSalaryRoom,
	},
	{ key: "diamondsIM", title: "Diamantes (IM)", visible: false, render: (data: StreamingDataWithStreamer) => data.diamondsIM },
	{ key: "diamondsRoom", title: "Diamantes (Habitación)", visible: false, render: (data: StreamingDataWithStreamer) => data.diamondsRoom },
	{ key: "diamondsTotal", title: "Total Diamantes", visible: false, render: (data: StreamingDataWithStreamer) => data.diamondsTotal },
	{
		key: "diamondsAndPoints",
		title: "Diamantes + Puntos",
		visible: true,
		render: (data: StreamingDataWithStreamer) => data.diamondsAndPoints,
	},
	{
		key: "diamondsPenalties",
		title: "Penalizaciones",
		visible: true,
		render: (data: StreamingDataWithStreamer) => data.diamondsPenalties,
	},
	{
		key: "diamondsComisions",
		title: "Comisiones",
		visible: false,
		render: (data: StreamingDataWithStreamer) => data.diamondsComisions,
	},
	{
		key: "rewardOfPoints",
		title: "Recompensa por Puntos",
		visible: false,
		render: (data: StreamingDataWithStreamer) => data.rewardOfPoints,
	},
	{
		key: "dailyBonusOfSuperStreamer",
		title: "Bono Diario Super Streamer",
		visible: false,
		render: (data: StreamingDataWithStreamer) => data.dailyBonusOfSuperStreamer,
	},
	{ key: "roomBonus", title: "Bono de Sala", visible: false, render: (data: StreamingDataWithStreamer) => data.roomBonus },
	{
		key: "enchantingGoddessBonus",
		title: "Bono Diosa Encantadora",
		visible: false,
		render: (data: StreamingDataWithStreamer) => data.enchantingGoddessBonus,
	},
	{
		key: "numberOfDaysCompleted",
		title: "Días Completados",
		visible: false,
		render: (data: StreamingDataWithStreamer) => data.numberOfDaysCompleted,
	},
	{ key: "numberOfDaysInMic", title: "Días en Mic", visible: false, render: (data: StreamingDataWithStreamer) => data.numberOfDaysInMic },
	{
		key: "streamerSalary",
		title: "Streamer",
		visible: true,
		render: (data: StreamingDataWithStreamer) => `$ ${Number(data.streamerSalary).toFixed(2)}`,
	},
	{
		key: "agencySalary",
		title: "Agencia",
		visible: true,
		render: (data: StreamingDataWithStreamer) => `$ ${Number(data.agencySalary).toFixed(2)}`,
	},
];

const StreamingDataTable = ({ week, onRefresh }: Readonly<{ week: WeekWithData; onRefresh: () => void }>) => {
	const [visibleColumns, setVisibleColumns] = useState(DEFAULT_COLUMNS.filter((col) => col.visible).map((col) => col.key));

	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(week.data.length / rowsPerPage);

	const paginatedData = week.data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

	const toggleColumn = (key: string) => {
		setVisibleColumns((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
	};

	const filteredColumns = DEFAULT_COLUMNS.filter((col) => visibleColumns.includes(col.key));

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-4 sm:flex-row">
				<ToolTip content="Columnas Visibles">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline">Columnas Visibles</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							{DEFAULT_COLUMNS.map((column) => (
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
							{[10, 20, 50].map((num) => (
								<SelectItem key={num} value={String(num)}>
									{num} Registros
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>
			<div className="overflow-auto w-full">
				<Table className="min-w-max">
					<TableHeader>
						<TableRow>
							{filteredColumns.map((column) => (
								<TableHead key={column.key}>{column.title}</TableHead>
							))}
						</TableRow>
					</TableHeader>
					<TableBody>
						{paginatedData.map((data) => (
							<TableRow key={`${data.id}-${data.streamer.wahaID}`}>
								{filteredColumns.map((column) => (
									<TableCell key={`${data.streamer.wahaID}-${column.key}`}>{column.render(data)}</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>

				<Pagination className="mt-4 justify-center sm:justify-end">
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious
								onClick={() => setCurrentPage((p) => p - 1)}
								className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
							/>
						</PaginationItem>

						{(() => {
							const startPage = Math.max(1, Math.min(currentPage - 1, totalPages - 2));
							const pagesToShow = Array.from({ length: Math.min(3, totalPages) }, (_, i) => startPage + i);
							return pagesToShow.map((page) => (
								<PaginationItem key={page}>
									<PaginationLink isActive={currentPage === page} onClick={() => setCurrentPage(page)}>
										{page}
									</PaginationLink>
								</PaginationItem>
							));
						})()}

						<PaginationItem>
							<PaginationNext
								onClick={() => setCurrentPage((p) => p + 1)}
								className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
							/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</div>
	);
};

export default StreamingDataTable;
