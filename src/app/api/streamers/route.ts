import { NextResponse } from "next/server";
import { createStreamer, findAllStreamers } from "../../lib/repositories/streamers";

export async function GET() {
	const streamers = await findAllStreamers();
	return NextResponse.json(streamers);
}

export async function POST(req: Request) {
	const body = await req.json();
	const { name, phoneNumber, bankAccount } = body;

	const streamer = await createStreamer({
		name,
		phoneNumber,
		bankAccount,
	});

	return NextResponse.json(streamer);
}
