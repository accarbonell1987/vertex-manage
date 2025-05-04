import { doFetchWithToast } from "@/app/lib/fetch";
import { StreamingData } from "@/generated/prisma";
import { ImportedStreamingData } from "@/types/streamers.types";

export async function getStreamingDataByWeek(weekId: string): Promise<StreamingData[] | null> {
	return doFetchWithToast<StreamingData[] | null>(
		`/api/streamingData?weekId=${weekId}`,
		{ method: "GET" },
		{
			loading: "Cargando datos de la semana...",
			success: "Datos cargados",
			error: "No se pudieron obtener los datos",
		}
	);
}

export async function createStreamingEntry(
	data: Omit<ImportedStreamingData, "wahaID"> & { streamerId: string; weekId: string }
): Promise<void> {
	await doFetchWithToast(
		"/api/streamingData",
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		},
		{
			loading: "Guardando registro...",
			success: "Registro creado",
			error: "No se pudo crear el registro",
		}
	);
}

export async function updateStreamingEntry(
	id: string,
	data: Partial<Omit<ImportedStreamingData, "wahaID"> & { streamerId: string; weekId: string }>
): Promise<void> {
	await doFetchWithToast(
		`/api/streamingData/${id}`,
		{
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		},
		{
			loading: "Actualizando registro...",
			success: "Registro actualizado",
			error: "No se pudo actualizar el registro",
		}
	);
}

export async function deleteStreamingEntry(id: string): Promise<void> {
	await doFetchWithToast(
		`/api/streamingData/${id}`,
		{ method: "DELETE" },
		{
			loading: "Eliminando registro...",
			success: "Registro eliminado",
			error: "No se pudo eliminar el registro",
		}
	);
}

export async function bulkImportStreamingEntries(weekId: string, data: Omit<ImportedStreamingData, "wahaID">[]): Promise<void> {
	await doFetchWithToast(
		"/api/streamingData",
		{
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ weekId, data }),
		},
		{
			loading: "Importando datos...",
			success: "Importación exitosa",
			error: "No se pudieron importar los datos",
		}
	);
}
