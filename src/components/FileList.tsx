import { cn } from "@/lib/utils";
import { FileType } from "@/types/common.types";
import { FileChartColumnIncreasing, Trash2 } from "lucide-react";
import { CUSTOM_TEXTS } from "../../../../Alain/csj/liquidaciones-frontend/apps/mf-privates/src/utils/statics";
import ToolTip from "./ToolTip";

export const FileColorByType = {
	doc: "primary",
	pdf: "danger",
	xls: "success",
	txt: "default",
	docx: "primary",
	xlsx: "success",
	jpg: "success",
	jpeg: "success",
	png: "success",
};

interface FilesListProps {
	files: FileType[];
	onRemove?: (file: FileType) => void;
	texts?: TextsType;
}
type TextsType = (typeof CUSTOM_TEXTS)["fileList"];

export const IconWrapper = (props: { className?: string; children: React.ReactNode }) => (
	<div className={cn(props.className, "flex items-center rounded-small justify-center w-7 h-7")}>{props.children}</div>
);

export const FileSize = ({ number, texts, onRemove }: { number: string; texts: TextsType; onRemove?: () => void }) => {
	return (
		<div className="flex items-center gap-3 text-default-400 ml-auto">
			<ToolTip content={texts?.labels.size}>
				<span className="text-[12px]">{number}</span>
			</ToolTip>
			<div
				className="flex gap-1 px-1 items-center rounded-md text-red-500 hover:bg-red-500/30 cursor-pointer"
				onClick={onRemove ? () => onRemove() : undefined}
				role="button"
				tabIndex={0}
			>
				<Trash2 size={20} />
				<p>{texts?.buttons.delete}</p>
			</div>
		</div>
	);
};

const FilesList = ({ files, onRemove, texts = CUSTOM_TEXTS.fileList }: FilesListProps) => {
	if (!files.length) {
		return null;
	}

	return (
		<div className="flex flex-col gap-1 w-full">
			<div className="flex flex-row gap-1 items-center">
				<p className="text-black text-small">{texts?.title}</p>
				{files.length > 0 ? (
					<span className="text-center text-gray-600 bg-gray-300 rounded-md px-1 min-w-6 min-h-6 w-4 h-4">{files.length}</span>
				) : null}
			</div>
			<div aria-label="File List">
				{files.map((file, index) => {
					return (
						<div key={`${file.name}-${file.type}-${index}`} className="flex flex-row gap-2 items-center border rounded-md p-1">
							<FileChartColumnIncreasing size={16} />
							<p className="text-default-600 text-[12px]">{file.name}</p>
							<FileSize number={file.size} onRemove={onRemove ? () => onRemove(file) : undefined} texts={texts} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FilesList;
