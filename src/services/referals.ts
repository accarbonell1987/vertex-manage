import { doFetchWithToast } from "@/app/lib/fetch";
import { ReferalWithStreamer } from "@/types/referal.types";

export async function getReferalsByStreamerId(id: string): Promise<ReferalWithStreamer[]> {
	return await doFetchWithToast<ReferalWithStreamer[]>(
		`/api/referals/${id}`,
		{
			method: "GET",
		},
		{
			error: "No se pudieron obtener los referidos.",
		}
	);
}

export async function createReferal(streamerId: string, referredId: string): Promise<void> {
	await doFetchWithToast<void>(
		"/api/referals",
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ streamerId, referredId }),
		},
		{
			error: "No se pudo crear el referido.",
		}
	);
}

export async function deleteReferal(id: string): Promise<void> {
	await doFetchWithToast<void>(
		`/api/referals/${id}`,
		{
			method: "DELETE",
		},
		{
			error: "No se pudo eliminar el referido.",
		}
	);
}
