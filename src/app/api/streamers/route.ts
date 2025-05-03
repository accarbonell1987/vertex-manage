import { NextResponse } from "next/server";
import { createStreamer, findStreamersByCriteria } from "../../lib/repositories/streamers";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);

	const name = searchParams.get("name") ?? undefined;
	const phoneNumber = searchParams.get("phoneNumber") ?? undefined;
	const bankAccount = searchParams.get("bankAccount") ?? undefined;
	const wahaID = searchParams.get("wahaID") ?? undefined;

	const streamers = await findStreamersByCriteria({ name, phoneNumber, bankAccount, wahaID });

	return NextResponse.json(streamers);
}

export async function POST(req: Request) {
	const body = await req.json();
	const { name, phoneNumber, bankAccount, wahaID } = body;

	const streamer = await createStreamer({
		name,
		phoneNumber,
		bankAccount,
		wahaID,
	});

	return NextResponse.json(streamer);
}
