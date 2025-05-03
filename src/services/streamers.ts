import { doFetchWithToast } from "@/app/lib/fetch";
import { CreateStreamerPayload, StreamerWithReferals } from "@/types/streamers.types";

export async function createStreamer(payload: CreateStreamerPayload): Promise<void> {
	await doFetchWithToast(
		"/api/streamers",
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		},
		{
			loading: "Cargando streamer...",
			success: "Streamer creado",
			error: "No se pudo crear el streamer.",
		}
	);
}

export async function getStreamers(): Promise<StreamerWithReferals[] | null> {
	return await doFetchWithToast<StreamerWithReferals[] | null>(
		"/api/streamers",
		{
			method: "GET",
		},
		{
			success: "Streamers obtenidos",
			loading: "Cargando streamers...",
			error: "No se pudieron obtener los streamers.",
		}
	);
}

export async function getStreamer(id: string): Promise<StreamerWithReferals | null> {
	return await doFetchWithToast(
		`/api/streamers/${id}`,
		{
			method: "GET",
		},
		{
			success: "Streamer obtenido",
			loading: "Cargando streamer...",
			error: "No se pudo obtener el streamer.",
		}
	);
}

export async function deleteStreamer(id: string): Promise<void> {
	await doFetchWithToast(
		`/api/streamers/${id}`,
		{
			method: "DELETE",
		},
		{
			success: "Streamer eliminado",
			loading: "Eliminando streamer...",
			error: "No se pudo eliminar el streamer.",
		}
	);
}

export async function getStreamersByCriteria(criteria: {
	wahaID?: string;
	wahaName?: string;
	name?: string;
	phoneNumber?: string;
	bankAccount?: string;
}): Promise<StreamerWithReferals[] | null> {
	return await doFetchWithToast<StreamerWithReferals[] | null>(
		`/api/streamers?${new URLSearchParams(criteria).toString()}`,
		{
			method: "GET",
		},
		{
			success: "Streamers obtenidos",
			loading: "Cargando streamers...",
			error: "No se pudieron obtener los streamers.",
		}
	);
}
