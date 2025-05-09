import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import { DialogDescription } from "@radix-ui/react-dialog";
import { AlertCircle } from "lucide-react";
import { useState } from "react";

interface Props {
	open: boolean;
	setOpen: (open: boolean) => void;
	onClose: () => void;
	onConfirm: (cleanAllReferrals: boolean, applyPenaltiesToAll: boolean) => void;
}

const StreamerManagerPanel = ({ open, setOpen, onClose, onConfirm }: Props) => {
	const [cleanAllReferrals, setCleanAllReferrals] = useState<boolean>(false);
	const [applyPenaltiesToAll, setApplyPenaltiesToAll] = useState<boolean>(false);

	const canApply = cleanAllReferrals || applyPenaltiesToAll;

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Panel de Gestión de Streamers</DialogTitle>
					<DialogDescription>
						<p>Gestiona parametros globales de los streamers</p>
						<Alert variant="destructive" className="mt-2">
							<AlertCircle className="h-4 w-4" />
							<AlertTitle>Atención</AlertTitle>
							<AlertDescription>Esto afectará a todos los streamers.</AlertDescription>
						</Alert>
					</DialogDescription>
				</DialogHeader>
				<form className="space-y-4">
					<Card>
						<CardContent className="flex flex-col gap-2">
							<div className="flex flex-col gap-2 sm:flex-row sm:items-center">
								<Switch id="applyPenalties" checked={cleanAllReferrals} onCheckedChange={setCleanAllReferrals} />
								<Badge className={`flex items-center gap-1 ${cleanAllReferrals ? "bg-green-600" : "bg-red-600"}`}>
									{cleanAllReferrals ? "SÍ" : "NO"}
								</Badge>
								<Label htmlFor="applyPenalties">Limpiar todos los referidos </Label>
							</div>
							<div className="flex flex-col gap-2 sm:flex-row sm:items-center">
								<Switch id="applyPenalties" checked={applyPenaltiesToAll} onCheckedChange={setApplyPenaltiesToAll} />
								<Badge className={`flex items-center gap-1 ${applyPenaltiesToAll ? "bg-green-600" : "bg-red-600"}`}>
									{applyPenaltiesToAll ? "SÍ" : "NO"}
								</Badge>
								<Label htmlFor="applyPenalties">Todos reciben penalizaciones </Label>
							</div>
						</CardContent>
					</Card>
					<div className="flex justify-end gap-2 w-full">
						<Button type="button" variant="secondary" onClick={onClose}>
							Cancelar
						</Button>
						<Button
							type="submit"
							className="bg-red-500 hover:bg-red-600 cursor-pointer"
							disabled={!canApply}
							onClick={() => onConfirm(cleanAllReferrals, applyPenaltiesToAll)}
						>
							Aplicar
						</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default StreamerManagerPanel;
