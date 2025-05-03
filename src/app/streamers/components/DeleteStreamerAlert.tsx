import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { deleteStreamer } from "@/services/streamers";
import { StreamerWithReferals } from "@/types/streamers.types";
import { Trash2 } from "lucide-react";

interface Props {
	streamer: StreamerWithReferals;
	onRefresh: () => void;
}

const DeleteStreamerAlert = ({ streamer, onRefresh }: Readonly<Props>) => {
	const handleDeleteStreamer = async () => {
		await deleteStreamer(streamer.id);
		onRefresh();
	};

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button className="cursor-pointer bg-red-600 hover:bg-red-700" variant="destructive" size="icon">
					<Trash2 />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Está seguro de que desea eliminar el Streamer?</AlertDialogTitle>
					<AlertDialogDescription>
						<div className="flex flex-col border p-2 rounded-lg">
							<span>
								<b>Nombre:</b> {streamer.name}
							</span>
							<span>
								<b>Waha ID:</b> {streamer.wahaID}
							</span>
							<span>
								<b>Waha Name:</b> {streamer.wahaName}
							</span>
						</div>
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancelar</AlertDialogCancel>
					<AlertDialogAction className="cursor-pointer bg-red-500 hover:bg-red-600" onClick={handleDeleteStreamer}>
						Eliminar Streamer
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default DeleteStreamerAlert;
