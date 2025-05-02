import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
	title: string;
	description: string;
	trigger: React.ReactNode;
	children: React.ReactNode;
	actionButton: React.ReactNode;
}

const DialogComponent = ({ title, description, trigger, children, actionButton }: Props) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				{children}
				<DialogFooter>
					<DialogClose asChild>
						<Button type="button" variant="secondary">
							Cerrar
						</Button>
					</DialogClose>
					{actionButton}
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default DialogComponent;
