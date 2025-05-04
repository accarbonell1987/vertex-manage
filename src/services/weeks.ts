import { doFetchWithToast } from "@/app/lib/fetch";
import { Week } from "@/generated/prisma";
import { CreateWeekPayload } from "@/types/weeks.types";

export async function createWeek(payload: CreateWeekPayload): Promise<void> {
	await doFetchWithToast<void>(
		"/api/weeks",
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		},
		{
			loading: "Cargando semanas...",
			success: "Semana creada",
			error: "No se pudo crear la semana.",
		}
	);
}

export async function getWeeks(): Promise<Week[]> {
	return await doFetchWithToast<Week[]>(
		"/api/weeks",
		{
			method: "GET",
		},
		{
			success: "Semanas obtenidas",
			loading: "Cargando semanas...",
			error: "No se pudieron obtener las semanas.",
		}
	);
}

export async function getWeekById(id: string): Promise<Week> {
	return await doFetchWithToast<Week>(
		`/api/weeks/${id}`,
		{
			method: "GET",
		},
		{
			success: "Semana obtenida",
			loading: "Cargando semana...",
			error: "No se pudo obtener la semana.",
		}
	);
}

export async function deleteWeek(id: string): Promise<void> {
	await doFetchWithToast<void>(
		`/api/weeks/${id}`,
		{
			method: "DELETE",
		},
		{
			success: "Semana eliminada",
			loading: "Eliminando semana...",
			error: "No se pudo eliminar la semana.",
		}
	);
}

export async function closeWeek(id: string): Promise<void> {
	await doFetchWithToast<void>(
		`/api/weeks/${id}`,
		{
			method: "PATCH",
		},
		{
			success: "Semana cerrada",
			loading: "Cerrando semana...",
			error: "No se pudo cerrar la semana.",
		}
	);
}
