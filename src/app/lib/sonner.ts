import { ReactNode } from "react";
import { toast } from "sonner";

export const ToastSonner = {
	showError: (message: string) => toast.error(message, { duration: 15000, closeButton: true }),
	showLoading: (message: string) => toast.loading(message, { closeButton: false }),
	showSuccess: (message: string) => toast.success(message, { closeButton: true }),
	showWarning: (message: string) => toast.warning(message, { duration: 15000, closeButton: true }),
	update: (id: string | number, render: string | ReactNode, type: "success" | "error") => {
		switch (type) {
			case "success":
				toast.success(render, { id, closeButton: true });
				break;
			case "error":
				toast.error(render, { id, duration: Infinity, closeButton: true });
				break;
			default:
				break;
		}
	},
	clear: (id: string) => (id ? toast.dismiss(id) : toast.dismiss()),
};
