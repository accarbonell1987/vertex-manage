import { toast } from "sonner";

type ToastOptions = {
	loading: string;
	success: string;
	error: string;
};

export async function fetchWithToast<T = any>(url: string, options: RequestInit, toastMessages: ToastOptions): Promise<T> {
	return toast.promise(
		fetch(url, options).then(async (res) => {
			if (!res.ok) throw new Error(await res.text());
			return res.json();
		}),
		toastMessages
	);
}
