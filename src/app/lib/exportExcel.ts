import { StreamerWithReferals } from "@/types/streamers.types";
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
