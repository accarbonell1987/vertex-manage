import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { createStreamer } from "@/services/streamers";
import { useEffect, useState } from "react";

interface Props {
	open: boolean;
	onClose: () => void;
	setOpen: (open: boolean) => void;
}

const AddStreamerModal = ({ open, onClose, setOpen }: Props) => {
	const [name, setName] = useState("");
	const [wahaID, setWahaID] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [bankAccount, setBankAccount] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		if (open) {
			setName("");
			setWahaID("");
			setPhoneNumber("");
			setBankAccount("");
			setError("");
		}
	}, [open]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!name.trim()) return setError("El nombre es obligatorio");
		if (!wahaID.trim()) return setError("El waha ID es obligatorio");
		if (!phoneNumber.trim()) return setError("El teléfono es obligatorio");
		if (!bankAccount.trim()) return setError("La cuenta bancaria es obligatoria");

		try {
			await createStreamer({
				name,
				wahaID,
				phoneNumber,
				bankAccount,
			});
			onClose();
		} catch (err) {
			console.error(err);
			setError("Hubo un error al guardar el streamer");
		}
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Adicionar Nuevo Streamer</DialogTitle>
				</DialogHeader>
				<form className="space-y-4" onSubmit={handleSubmit}>
					<div className="flex flex-col gap-2">
						<Label htmlFor="wahaID">Waha ID</Label>
						<Input id="wahaID" value={wahaID} onChange={(e) => setWahaID(e.target.value)} />
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="name">Nombre</Label>
						<Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="phoneNumber">Teléfono</Label>
						<Input id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="bankAccount">Cuenta Bancaria</Label>
						<Input id="bankAccount" value={bankAccount} onChange={(e) => setBankAccount(e.target.value)} />
					</div>
					{error && <p className="text-sm text-red-500">{error}</p>}
					<div className="flex justify-end gap-2 w-full">
						<Button type="button" variant="secondary" onClick={() => setOpen(false)}>
							Cancelar
						</Button>
						<Button type="submit">Guardar</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default AddStreamerModal;
