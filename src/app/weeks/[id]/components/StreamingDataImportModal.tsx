import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { WeekWithData } from "@/types/weeks.types";

interface Props {
	week: WeekWithData;
	open: boolean;
	onClose: () => void;
	setOpen: (open: boolean) => void;
	actionLoading: boolean;
}

const StreamingDataImportModal = ({ week, open, onClose, setOpen, actionLoading }: Props) => {
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		onClose();
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Importar datos</DialogTitle>
				</DialogHeader>
				<form className="space-y-4" onSubmit={handleSubmit}>
					<Button className="w-full" type="submit" disabled={actionLoading}>
						{actionLoading ? "Cargando..." : "Importar"}
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default StreamingDataImportModal;
