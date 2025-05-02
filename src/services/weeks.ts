import { fetchWithToast } from "@/app/lib/fetchWithToast";
import { Week } from "@/generated/prisma";
import { CreateWeekPayload } from "@/types/weeks.types";

export async function createWeek(payload: CreateWeekPayload): Promise<void> {
	return fetchWithToast(
		"/api/weeks",
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		},
		{
			loading: "Creando semana...",
			success: "Semana creada con éxito",
			error: "No se pudo crear la semana",
		}
	);
}

export async function getWeeks(): Promise<Week[]> {
	return await fetchWithToast(
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

export async function getWeek(id: string): Promise<Week> {
	return await fetchWithToast(
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
	await fetchWithToast(
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
