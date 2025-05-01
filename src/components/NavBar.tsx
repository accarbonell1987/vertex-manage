"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
	const pathname = usePathname();

	return (
		<nav className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow-sm">
			<span className="text-lg font-bold text-blue-600">Vertex Agency</span>
			<div className="space-x-4">
				<Link href="/" className={clsx("text-sm font-medium hover:underline", pathname === "/" && "text-blue-600 underline")}>
					Semanas
				</Link>
				<Link
					href="/streamers"
					className={clsx("text-sm font-medium hover:underline", pathname === "/streamers" && "text-blue-600 underline")}
				>
					Streamers
				</Link>
			</div>
		</nav>
	);
}
