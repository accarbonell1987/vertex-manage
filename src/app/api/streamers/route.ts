import { ImportedContactsData } from "@/types/streamers.types";
import { NextResponse } from "next/server";
import {
	bulkImportContactsEntries,
	createStreamer,
	findStreamersByCriteria,
	updateApplyPenaltiesToAll,
} from "../../lib/repositories/streamers";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);

	const name = searchParams.get("name") ?? undefined;
	const phoneNumber = searchParams.get("phoneNumber") ?? undefined;
	const bankAccount = searchParams.get("bankAccount") ?? undefined;
	const wahaID = searchParams.get("wahaID") ?? undefined;
	const wahaName = searchParams.get("wahaName") ?? undefined;

	const streamers = await findStreamersByCriteria({ name, phoneNumber, bankAccount, wahaID, wahaName });

	return NextResponse.json(streamers);
}

export async function POST(req: Request) {
	const body = await req.json();
	const { name, phoneNumber, bankAccount, wahaID, wahaName } = body;

	const streamer = await createStreamer({
		name,
		phoneNumber,
		bankAccount,
		wahaID,
		wahaName,
	});

	return NextResponse.json(streamer);
}

export async function PUT(req: Request) {
	const body = await req.json();
	const { data } = body as { data: ImportedContactsData[] };

	if (!Array.isArray(data)) {
		return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
	}

	await bulkImportContactsEntries(data);
	return NextResponse.json({ ok: true });
}

export async function PATCH(req: Request) {
	const body = await req.json();
	const { applyPenaltiesToAll } = body as { applyPenaltiesToAll: boolean };

	await updateApplyPenaltiesToAll(applyPenaltiesToAll);
	return NextResponse.json({ ok: true });
}
