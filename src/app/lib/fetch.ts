import { ToastSonner } from "./sonner";

type ToastMessage = {
	success?: string;
	error?: string;
	loading?: string;
};

export async function doFetch<T = unknown>(url: string, options: RequestInit): Promise<T> {
	const res = await fetch(url, options);
	if (!res.ok) {
		throw new Error(await res.text());
	}
	return res.json();
}

export async function doFetchWithToast<T = unknown>(url: string, options: RequestInit, toastMessages?: ToastMessage): Promise<T | null> {
	const show = {
		success: (message?: string) => ToastSonner.showSuccess(message ?? "Operación Exitosa"),
		error: (message?: string) => ToastSonner.showError(message ?? "Error en la Operación"),
		update: (id: string | number, message: string, type: "success" | "error") => ToastSonner.update(id, message, type),
		loading: (message: string) => ToastSonner.showLoading(message),
	};

	const toastId: string | number = toastMessages?.loading ? show.loading(toastMessages.loading) : "";

	try {
		const result = await doFetch<T>(url, options);
		if (toastMessages?.loading && toastId) {
			show.update(toastId, toastMessages.success ?? "Éxito", "success");
			return result;
		}
		if (toastMessages?.success) show.success(toastMessages?.success);

		return result;
	} catch (error) {
		if (toastMessages?.loading && toastId) show.update(toastId, toastMessages.error ?? "Error", "error");
		if (toastMessages?.error) show.error(toastMessages.error);
		console.error(error);
		return null;
	}
}
