import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const CUSTOM_TEXTS = {
	attachDocumentsModal: {
		title: "Adjuntar archivos",
		description:
			"Selecciona los archivos que deseas adjuntar a esta tarea. Asegúrate de que sean relevantes y no superen el tamaño máximo permitido:",
		inputs: {
			users: {
				label: "Suelte los archivos aquí o haga clic para cargarlos",
			},
		},
		errors: {
			title: "Errores",
			sizeExceeds: "excede el tamaño permitido",
			notAllowedFile: "Tipo de archivo no permitido",
		},
		buttons: {
			assign: "Asignar",
			cancel: "Cancelar",
		},
	},
	fileList: {
		title: "Archivos Adjuntos",
		labels: {
			size: "Tamaño de archivo",
		},
		buttons: {
			delete: "Eliminar",
		},
	},
	priority: {
		high: "Alta",
		medium: "Media",
		low: "Baja",
	},
	actions: {
		details: "Detalles",
		edit: "Editar",
		delete: "Eliminar",
	},
};

export function getFormatNumber(value: number): number {
	return Number(
		value.toLocaleString("de-DE", {
			minimumFractionDigits: 0,
			maximumFractionDigits: 2,
		})
	);
}
