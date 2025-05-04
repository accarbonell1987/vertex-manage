export type FileType = {
	id: string;
	name: string;
	path: string;
	type: "doc" | "txt" | "pdf" | "xls" | "docx" | "xlsx" | "jpg" | "jpeg" | "png";
	typeString?: string;
	size: string;
	createdAt?: string;
	file?: File;
	data?: string;
};
