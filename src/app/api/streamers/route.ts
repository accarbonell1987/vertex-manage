import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

export async function GET() {
	const streamers = await prisma.streamer.findMany({
		include: {
			referals: true,
			referredBy: true,
		},
	});
	return NextResponse.json(streamers);
}

export async function POST(req: Request) {
	const body = await req.json();
	const { name, phoneNumber, bankAccount } = body;

	const streamer = await prisma.streamer.create({
		data: {
			name,
			phoneNumber,
			bankAccount,
		},
	});

	return NextResponse.json(streamer);
}
