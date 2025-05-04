import { ImportedStreamingData } from "@/types/streamers.types";
import { NextRequest, NextResponse } from "next/server";
import { bulkImportStreamingData, createStreamingData, findStreamingDataByWeek } from "../../lib/repositories/streamingData";

export async function GET(req: NextRequest) {
	const weekId = req.nextUrl.searchParams.get("weekId");
	if (!weekId) return NextResponse.json({ error: "weekId es requerido" }, { status: 400 });

	const data = await findStreamingDataByWeek(weekId);
	return NextResponse.json(data);
}

export async function POST(req: Request) {
	const body = await req.json();
	const created = await createStreamingData(body);
	return NextResponse.json(created, { status: 201 });
}

export async function PUT(req: Request) {
	const body = await req.json();
	const { weekId, data } = body as { weekId: string; data: ImportedStreamingData[] };

	if (!weekId || !Array.isArray(data)) {
		return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
	}

	await bulkImportStreamingData(weekId, data);
	return NextResponse.json({ ok: true });
}
