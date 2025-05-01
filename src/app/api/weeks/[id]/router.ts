import { NextResponse } from "next/server";
import { deleteWeek, findWeekById } from "../../../lib/repositories/weeks";

type Params = {
	params: { id: string };
};

export async function GET(_: Request, { params }: Params) {
	try {
		const week = await findWeekById(params.id);
		if (!week) {
			return NextResponse.json({ error: "Semana no encontrada" }, { status: 404 });
		}
		return NextResponse.json(week);
	} catch (error) {
		console.error("GET /api/weeks error:", error);
		return NextResponse.json({ error: "Error al obtener semana" }, { status: 500 });
	}
}

export async function DELETE(_: Request, { params }: Params) {
	try {
		await deleteWeek(params.id);
		return NextResponse.json({ message: "Semana eliminada" });
	} catch (error) {
		console.error("DELETE /api/weeks error:", error);
		return NextResponse.json({ error: "No se pudo eliminar la semana" }, { status: 500 });
	}
}
