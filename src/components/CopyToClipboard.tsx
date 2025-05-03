import { ClipboardCheck, ClipboardIcon } from "lucide-react";
import { useState } from "react";
import ToolTip from "./ToolTip";

type CopyProps = {
	text: string;
};

const CopyToClipboard = ({ text }: CopyProps) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy:", err);
		}
	};

	return (
		<div className="inline-flex items-center group px-2 py-1 rounded transition-all duration-200 hover:border hover:border-gray-300 hover:bg-gray-50">
			<span className="text-sm">{text}</span>
			<ToolTip content={copied ? "¡Copiado!" : "Copiar"}>
				<span className="ml-2 text-gray-600 cursor-pointer transition-opacity duration-200 opacity-0 group-hover:opacity-100">
					{copied ? <ClipboardCheck size={16} /> : <ClipboardIcon size={16} onClick={handleCopy} />}
				</span>
			</ToolTip>
		</div>
	);
};

export default CopyToClipboard;
