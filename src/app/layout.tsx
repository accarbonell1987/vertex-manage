import { NavBar } from "@/components/NavBar";
import "@/styles/globals.css";

export const metadata = {
	title: "Vertex Manage",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es">
			<body className="min-h-screen bg-gray-50">
				<NavBar />
				<main className="p-6">{children}</main>
			</body>
		</html>
	);
}
