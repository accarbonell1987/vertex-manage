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
import useConfiguration from "../../hooks/useConfiguration";
import { getDynamicData } from "../../utils/functions";

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
		visible: false,
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
		title: "Salario/Penalización",
		visible: true,
		render: (data: StreamingDataWithStreamer) => {
			const penalizated = !!data.streamerPenalizated;
			return (
				<span>
					${Number(data.streamerSalary).toFixed(2)}
					{penalizated ? <span className="text-red-500">{` (${Number(data.streamerPenalizated ?? 0).toFixed(2)})`}</span> : ""}
				</span>
			);
		},
	},
	{
		key: "salary",
		title: "Salario Final",
		visible: true,
		render: (data: StreamingDataWithStreamer) => {
			const salary = data.streamerSalary - (data.streamerPenalizated ?? 0);
			const textColor = salary > 0 ? "text-blue-500" : "text-black-500";

			return <p className={`${data.streamerPenalizated ?? 0 ? "text-orange-500" : textColor}`}>{`$ ${Number(salary).toFixed(2)}`}</p>;
		},
	},
	{
		key: "agencySalary",
		title: "Agencia",
		visible: true,
		render: (data: StreamingDataWithStreamer) => {
			const penalizated = !!data.streamerPenalizated;
			return <span className={`${penalizated ? "text-green-500" : "text-blue-500"}`}>{`$ ${Number(data.agencySalary).toFixed(2)}`}</span>;
		},
	},
];

const StreamingDataTable = ({ week }: Readonly<{ week: WeekWithData }>) => {
	const { configuration } = useConfiguration();
	const [visibleColumns, setVisibleColumns] = useState(DEFAULT_COLUMNS.filter((col) => col.visible).map((col) => col.key));

	const [rowsPerPage, setRowsPerPage] = useState(30);
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(week.data.length / rowsPerPage);

	const paginatedData = week.data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
	const dataWithDynamic = getDynamicData(paginatedData, configuration);

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
						{dataWithDynamic.map((data) => (
							<TableRow key={`${data.id}-${data.streamer.wahaID}`} className={data.streamerSalary > 0 ? "" : "bg-gray-100"}>
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
