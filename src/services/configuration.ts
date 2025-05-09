import { doFetchWithToast } from "@/app/lib/fetch";
import { Configuration } from "@/generated/prisma";

export async function getConfiguration(): Promise<Configuration | null> {
	return await doFetchWithToast<Configuration | null>(
		"/api/configuration",
		{
			method: "GET",
		},
		{
			error: "No se pudo obtener la configuración.",
		}
	);
}

export async function updateConfiguration(payload: Configuration): Promise<Configuration | null> {
	return await doFetchWithToast<Configuration | null>(
		"/api/configuration",
		{
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		},
		{
			loading: "Actualizando configuración...",
			success: "Configuración actualizada.",
			error: "No se pudo actualizar la configuración.",
		}
	);
}
