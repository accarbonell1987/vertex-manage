import { JSX, useCallback, useEffect, useRef, useState } from "react";

import { CUSTOM_TEXTS } from "@/lib/utils";
import { Upload } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Spinner } from "./ui/spinner";

const defaults = {
	files: ".application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,.xls,.xlsx",
};

const defaultAllowedTypes = [
	"application/vnd.ms-excel", // .xls
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
];

interface DragAndDropProps {
	icon?: JSX.Element;
	text?: string;
	accept?: string;
	onDrop: (files: File[]) => void;
	size?: "sm" | "lg";
	maxFileSize?: number;
	texts?: TextsType;
	isLoading?: boolean;
	orientation?: "vertical" | "horizontal";
	isDisabled?: boolean;
}
type TextsType = (typeof CUSTOM_TEXTS)["attachDocumentsModal"];

const IconForDragAndDrop = (props: { icon?: JSX.Element; text?: string; size?: "sm" | "lg"; orientation?: "vertical" | "horizontal" }) => {
	const orientationClass = props.orientation === "vertical" ? "flex-col" : "flex-row";
	const orientationTextClass = props.orientation === "vertical" ? "text-center" : "textt-left";
	return (
		<div className={`flex ${orientationClass} gap-2 justify-center items-center p-3 border-1 border-dashed border-default-300 rounded-lg`}>
			{props.icon ?? <div className="p-2 bg-slate-300 rounded-lg">{props.icon ?? <Upload size={props.size === "sm" ? 18 : 38} />}</div>}
			<span className={`text-[12px] ${orientationTextClass}`}>{props.text ?? `Arrastre los archivos aquí`}</span>
		</div>
	);
};

const ErrorsLabel = ({ title, amount }: { title: string; amount: number }) => {
	return (
		<div className="flex flex-row gap-1 items-center">
			<p className="text-sm text-danger">{title}</p>
			<span className="text-center text-tiny text-white bg-danger-500 rounded-md px-1 min-w-4 min-h-4 w-4 h-4">{amount}</span>
		</div>
	);
};

const DragAndDrop = ({
	icon,
	text,
	accept,
	onDrop,
	size = "lg",
	maxFileSize = 1,
	texts = CUSTOM_TEXTS.attachDocumentsModal,
	orientation = "vertical",
	isLoading = true,
	isDisabled = false,
}: DragAndDropProps) => {
	const dropRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const [error, setError] = useState<string[] | []>([]);

	const addFiles = useCallback(
		(files: File[]) => {
			const filesToAdd = [];
			const errorMessages = [];

			for (const droppedFile of files) {
				let anyError = false;

				//! Validate file size
				if (droppedFile.size > maxFileSize * 1024 * 1024) {
					errorMessages.push(`"${droppedFile.name}" ${texts.errors.sizeExceeds} (${maxFileSize} MB)`);
					anyError = true;
				}
				//! Validate file allowed type
				if (!defaultAllowedTypes.includes(droppedFile.type)) {
					errorMessages.push(`"${droppedFile.name}" ${texts.errors.notAllowedFile} (${droppedFile.type})`);
					anyError = true;
				}

				//! Set the file and clear any previous errors
				if (!anyError) {
					filesToAdd.push(droppedFile);
				}
			}

			onDrop(filesToAdd);
			setError(errorMessages);
		},
		[maxFileSize, onDrop, texts.errors.notAllowedFile, texts.errors.sizeExceeds]
	);

	const handleDragEvents = useCallback((e: DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
	}, []);

	const handleDrop = useCallback(
		(event: DragEvent) => {
			handleDragEvents(event);

			if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
				const droppedFiles = event.dataTransfer.files;
				addFiles(Array.from(droppedFiles));
			}
		},
		[addFiles, handleDragEvents]
	);

	const handleSelectFiles = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const files = e.target.files ? Array.from(e.target.files) : [];
			if (files.length > 0) {
				addFiles(files);
			}
			e.target.value = "";
		},
		[addFiles]
	);

	useEffect(() => {
		const dropArea = dropRef.current;

		if (dropArea) {
			dropArea.addEventListener("dragover", handleDragEvents);
			dropArea.addEventListener("dragenter", handleDragEvents);
			dropArea.addEventListener("dragleave", handleDragEvents);
			dropArea.addEventListener("drop", handleDrop);

			return () => {
				dropArea.removeEventListener("dragover", handleDragEvents);
				dropArea.removeEventListener("dragenter", handleDragEvents);
				dropArea.removeEventListener("dragleave", handleDragEvents);
				dropArea.removeEventListener("drop", handleDrop);
			};
		}
	}, [handleDragEvents, handleDrop]);

	return (
		<div className="w-full flex flex-col gap-1">
			{isLoading && <Spinner size="small" show={isLoading} className="text-foreground mt-4" />}
			{!isLoading ? (
				<div
					className={`w-full cursor-pointer ${isDisabled ? "cursor-not-allowed bg-gray-300" : ""}`}
					ref={dropRef}
					role="button"
					onClick={() => inputRef.current?.click()}
				>
					<IconForDragAndDrop icon={icon} text={text} size={size} orientation={orientation} />
					<input
						ref={inputRef}
						type="file"
						accept={accept ?? defaults.files}
						style={{ display: "none" }}
						multiple
						onChange={handleSelectFiles}
					/>
				</div>
			) : null}
			{error.length > 0 ? (
				<Accordion type="single" collapsible className="text-tiny border-1 bg-danger-50 rounded-lg solid-default-300 px-4">
					<AccordionItem value="1">
						<AccordionTrigger>Archivos</AccordionTrigger>
						<AccordionContent>
							<ErrorsLabel title={texts.errors.title} amount={error.length} />
							{error.map((error, index) => (
								<p key={`${index}-${error}`} className="text-tiny">
									{error}
								</p>
							))}
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			) : null}
		</div>
	);
};

export default DragAndDrop;
