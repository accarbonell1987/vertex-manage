import { NavBar } from "@/components/NavBar";
import "@/styles/globals.css";
import { Toaster } from "sonner";

export const metadata = {
	title: "Vertex Manage",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="es">
			<body className="min-h-screen bg-gray-50">
				<NavBar />
				<main className="p-6">{children}</main>
				<Toaster richColors position="top-center" />
			</body>
		</html>
	);
}
