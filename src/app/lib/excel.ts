import { ImportedStreamingData, StreamerWithReferals } from "@/types/streamers.types";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

export function exportStreamersToExcel(streamers: StreamerWithReferals[]) {
	const data = streamers.map((s) => ({
		WahaID: s.wahaID,
		WahaName: s.wahaName,
		Nombre: s.name,
		Teléfono: s.phoneNumber ?? "",
		CuentaBancaria: s.bankAccount ?? "",
		Referidos: s.referals?.length ?? 0,
	}));

	const worksheet = XLSX.utils.json_to_sheet(data);
	const workbook = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(workbook, worksheet, "Streamers");

	const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
	const blob = new Blob([excelBuffer], { type: "application/octet-stream" });

	saveAs(blob, `streamers-${new Date().toISOString().slice(0, 10)}.xlsx`);
}

export function parseStreamingExcel(file: File): Promise<ImportedStreamingData[]> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.onload = (event) => {
			const data = new Uint8Array(event.target?.result as ArrayBuffer);
			const workbook = XLSX.read(data, { type: "array" });
			const sheet = workbook.Sheets[workbook.SheetNames[0]];
			const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as unknown[][];

			const parsed: ImportedStreamingData[] = [];

			for (let i = 1; i < rows.length; i++) {
				const row = rows[i];

				const wahaID = String(row[2])?.trim(); // Columna 3

				if (!wahaID || isNaN(Number(wahaID))) continue;

				parsed.push({
					wahaID,
					baseSalaryIM: Number(row[5]),
					baseSalaryRoom: Number(row[6]),
					diamondsIM: Number(row[7]),
					diamondsRoom: Number(row[8]),
					diamondsTotal: Number(row[9]),
					points: Number(row[10]),
					diamondsAndPoints: Number(row[11]),
					diamondsPenalties: Number(row[12]),
					diamondsComisions: Number(row[13]),
					rewardOfPoints: Number(row[14]),
					dailyBonusOfSuperStreamer: Number(row[15]),
					roomBonus: Number(row[16]),
					enchantingGodesBonus: Number(row[17]),
					streamerSalary: Number(row[18]),
					agencySalary: Number(row[19]),
				});
			}

			resolve(parsed);
		};

		reader.onerror = reject;

		reader.readAsArrayBuffer(file);
	});
}
