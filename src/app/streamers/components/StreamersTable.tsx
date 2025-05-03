import CopyToClipboard from "@/components/CopyToClipboard";
import ToolTip from "@/components/ToolTip";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StreamerWithReferals } from "@/types/streamers.types";
import { Edit, Link } from "lucide-react";
import DeleteStreamerAlert from "./DeleteStreamerAlert";

const StreamersTable = ({ streamers, onRefresh }: Readonly<{ streamers: StreamerWithReferals[]; onRefresh: () => void }>) => {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Waha ID</TableHead>
					<TableHead className="text-center">Waha Name</TableHead>
					<TableHead className="text-center">Nombre</TableHead>
					<TableHead className="text-center">Teléfono</TableHead>
					<TableHead className="text-center">Cuenta Bancaria</TableHead>
					<TableHead className="text-center">Referidos</TableHead>
					<TableHead className="text-center">Acciones</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{streamers.map((streamer) => (
					<TableRow key={streamer.id}>
						<TableCell className="font-medium">
							<CopyToClipboard text={streamer.wahaID} />
						</TableCell>
						<TableCell>
							<CopyToClipboard text={streamer.wahaName} />
						</TableCell>
						<TableCell>
							<CopyToClipboard text={streamer.name} />
						</TableCell>
						<TableCell className="text-center">{streamer.phoneNumber ? <CopyToClipboard text={streamer.phoneNumber} /> : "-"}</TableCell>
						<TableCell className="text-center">{streamer.bankAccount ? <CopyToClipboard text={streamer.bankAccount} /> : "-"}</TableCell>
						<TableCell className="text-center">
							<Button
								className={`${streamer.referals.length > 0 ? "bg-green-200 hover:bg-green-300 cursor-pointer" : ""}`}
								variant="secondary"
							>
								<Link />
								{streamer.referals.length}
							</Button>
						</TableCell>
						<TableCell className="flex gap-2 justify-center">
							<ToolTip content="Editar">
								<Button className="cursor-pointer bg-orange-200 hover:bg-orange-300" variant="secondary">
									<Edit />
								</Button>
							</ToolTip>
							<ToolTip content="Eliminar">
								<DeleteStreamerAlert streamer={streamer} onRefresh={onRefresh} />
							</ToolTip>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default StreamersTable;
