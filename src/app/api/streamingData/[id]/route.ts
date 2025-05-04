import { NextRequest, NextResponse } from "next/server";
import { deleteStreamingData, updateStreamingData } from "../../../lib/repositories/streamingData";

export async function DELETE(_: Request, context: { params: { id: string } }) {
	const { id } = context.params;
	await deleteStreamingData(id);
	return NextResponse.json({ ok: true });
}

export async function PATCH(req: NextRequest, context: { params: { id: string } }) {
	const { id } = context.params;
	const body = await req.json();

	const updated = await updateStreamingData(id, body);
	return NextResponse.json(updated);
}
