import DragAndDrop from "@/components/DragAndDrop";
import FilesList from "@/components/FileList";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileType } from "@/types/common.types";
import { WeekWithData } from "@/types/weeks.types";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Upload } from "lucide-react";
import { useState } from "react";
import { DocumentsTypeMapping } from "../../utils/statics";

interface Props {
	week: WeekWithData;
	open: boolean;
	onClose: () => void;
	setOpen: (open: boolean) => void;
	actionLoading: boolean;
}

const StreamingDataImportModal = ({ week, open, onClose, setOpen, actionLoading }: Props) => {
	const [files, setFiles] = useState<FileType[] | []>();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		onClose();
	};

	const handleAdd = async (files: File[]) => {
		//! hacer la pegada aqui, si da respuesta lo adiciono, sino lo paso al error

		const filesAdapter: FileType[] = files.map((file: File) => {
			return {
				id: `${file.name}-${Date.now()}`,
				name: file.name,
				path: "",
				type: DocumentsTypeMapping[file.type as keyof typeof DocumentsTypeMapping] as
					| "doc"
					| "txt"
					| "pdf"
					| "xls"
					| "docx"
					| "xlsx"
					| "jpg"
					| "jpeg"
					| "png",
				typeString: file.type,
				size: `${(file.size / 1024).toFixed(2)} KB`,
				createdAt: new Date().toISOString(),
				file,
			};
		});
		setFiles(filesAdapter);
	};

	const handleRemove = (file: FileType) => {
		setFiles(files?.filter((f) => f.id !== file.id));
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Importar datos</DialogTitle>
					<DialogDescription>Selecciona los archivos que deseas importar</DialogDescription>
				</DialogHeader>
				<form className="space-y-4" onSubmit={handleSubmit}>
					<DragAndDrop icon={<Upload />} text="Arrastre los archivos aquí" onDrop={handleAdd} isLoading={actionLoading} maxFileSize={10} />
					<FilesList files={files ?? []} onRemove={handleRemove} />
					<Button className="w-full" type="submit" disabled={actionLoading || !files?.length}>
						{actionLoading ? "Cargando..." : "Importar"}
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default StreamingDataImportModal;
