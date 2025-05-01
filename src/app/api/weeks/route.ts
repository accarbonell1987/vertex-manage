import { NextResponse } from "next/server";

import { closeOpenWeeks, createWeek, findAllWeeks } from "../../lib/repositories/weeks";

export async function GET() {
	try {
		const weeks = await findAllWeeks();
		return NextResponse.json(weeks);
	} catch (error) {
		console.error("GET /api/weeks error:", error);
		return NextResponse.json({ error: "Error al obtener semanas" }, { status: 500 });
	}
}

export async function POST(req: Request) {
	try {
		const data = await req.json();
		await closeOpenWeeks();
		const newWeek = await createWeek({ ...data, closed: false });
		return NextResponse.json(newWeek, { status: 201 });
	} catch (error) {
		console.error("POST /api/weeks error:", error);
		return NextResponse.json({ error: "Error al crear la semana" }, { status: 500 });
	}
}
