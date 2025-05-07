import ToolTip from "@/components/ToolTip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createReferal, deleteReferal, getReferalsByStreamerId } from "@/services/referals";
import { ReferalWithStreamer } from "@/types/referal.types";
import { StreamerWithReferals } from "@/types/streamers.types";
import cuid from "cuid";
import { Check, Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
	streamer: StreamerWithReferals | null;
	streamers: StreamerWithReferals[];
	onRefresh: () => void;
}

const StreamerReferalsContent = ({ streamer, streamers, onRefresh }: Readonly<Props>) => {
	const [myReferals, setMyReferals] = useState<ReferalWithStreamer[]>(streamer?.referals ?? []);
	const [selectedStreamer, setSelectedStreamer] = useState<StreamerWithReferals | null>(null);
	const [doSomeChange, setDoSomeChange] = useState(false);

	useEffect(() => {
		setMyReferals(streamer?.referals ?? []);
		setSelectedStreamer(null);
	}, [streamer]);

	const handleOnAdd = () => {
		if (!selectedStreamer) return;

		const uniqueId = cuid();
		console.log(streamer);

		setMyReferals([
			...myReferals,
			{
				id: uniqueId,
				createdAt: new Date(),
				streamerId: streamer?.id ?? "",
				referredId: selectedStreamer.id,
				streamer: streamer ?? selectedStreamer,
				referred: selectedStreamer,
			},
		]);
		setDoSomeChange(true);
	};

	const handleOnRemove = (id: string) => {
		setMyReferals(myReferals.filter((r) => r.id !== id));
		setDoSomeChange(true);
	};

	const handleOnSelect = (value: string) => {
		if (!value || !streamers) return;

		const selectedStreamer = streamers.find((s) => s.id === value);
		if (!selectedStreamer) return;
		setSelectedStreamer(selectedStreamer);
	};

	const handleOnSaveChanges = async () => {
		if (!streamer) return;

		try {
			const referalsOfStreamer = await getReferalsByStreamerId(streamer.id);

			const currentReferalsOfStreamerIds = new Set(myReferals.map((r) => r.referredId));
			const lastReferalsOfStreamerIds = new Set(referalsOfStreamer.map((r) => r.referredId));

			const referalsToDelete = referalsOfStreamer.filter((r) => !currentReferalsOfStreamerIds.has(r.referredId));
			const referalsToCreate = myReferals.filter((r) => !lastReferalsOfStreamerIds.has(r.referredId));

			await Promise.all([
				...referalsToDelete.map((r) => deleteReferal(r.id)),
				...referalsToCreate.map((r) => createReferal(streamer.id, r.referredId)),
			]);

			setDoSomeChange(false);
			setSelectedStreamer(null);
			onRefresh();
		} catch (error) {
			console.error(error);
		}
	};

	const filteredStreamersIsNotAsMyReferal = streamers
		.filter((currentStreamer) => {
			const isAlreadyMyReferal = myReferals.some((r) => r.referredId === currentStreamer.id);
			const isMe = currentStreamer.id === streamer?.id;
			const isAlreadyReferredBySomeone = streamers.some((current) =>
				current.referals?.some((referal) => referal.id === currentStreamer.id)
			);

			return !isAlreadyMyReferal && !isMe && !isAlreadyReferredBySomeone;
		})
		.sort((a, b) => (a.wahaID > b.wahaID ? 1 : -1));

	return (
		<div className="flex flex-col gap-2 w-full">
			<div className="flex flex-col gap-2 w-full">
				<Label htmlFor="selector">Seleccionar Referido:</Label>
				<div className="flex flex-col items-center gap-2 xl:flex-row">
					<Select onValueChange={handleOnSelect}>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Seleccionar Referido" />
						</SelectTrigger>
						<SelectContent>
							{filteredStreamersIsNotAsMyReferal.map((s) => (
								<SelectItem key={s.id} value={s.id}>
									{s.wahaID} - {s.wahaName}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<ToolTip content="Agregar Referido">
						<Button
							className="cursor-pointer bg-blue-200 hover:bg-blue-300 w-full xl:w-[40px]"
							variant="secondary"
							size="icon"
							disabled={!selectedStreamer}
							onClick={handleOnAdd}
						>
							<Plus />
						</Button>
					</ToolTip>
				</div>
			</div>

			{myReferals.length > 0 && (
				<div className="flex flex-col gap-1 border rounded-lg p-2">
					{myReferals.map((r) => (
						<div key={r.id} className="flex flex-col items-center gap-2 sm:flex-row">
							{r.referred.wahaID} - {r.referred.wahaName}
							<ToolTip content="Eliminar Referido">
								<Button
									className="cursor-pointer bg-red-200 hover:bg-red-300 w-full xl:w-[40px] ml-auto"
									variant="destructive"
									size="icon"
									onClick={() => handleOnRemove(r.id)}
								>
									<Minus />
								</Button>
							</ToolTip>
						</div>
					))}
				</div>
			)}

			<div className="flex items-center gap-2">
				<ToolTip content="Guardar Cambios">
					<Button
						className="cursor-pointer bg-green-200 hover:bg-green-300 w-full "
						variant="secondary"
						onClick={handleOnSaveChanges}
						disabled={!doSomeChange}
					>
						<Check /> Guardar Cambios
					</Button>
				</ToolTip>
			</div>
		</div>
	);
};

const StreamerReferals = ({
	streamer,
	streamers,
	onRefresh,
}: {
	streamer: StreamerWithReferals | null;
	streamers: StreamerWithReferals[];
	onRefresh: () => void;
}) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Referidos</CardTitle>
				<CardDescription>Información general de los referidos</CardDescription>
			</CardHeader>
			<CardContent>
				{streamer ? (
					<StreamerReferalsContent streamer={streamer} streamers={streamers} onRefresh={onRefresh} />
				) : (
					<p className="text-center">Seleccione un streamer para ver sus referidos</p>
				)}
			</CardContent>
		</Card>
	);
};

export default StreamerReferals;
