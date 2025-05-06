import { createReferal } from "@/app/lib/repositories/referals";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const { streamerId, referredId } = await req.json();

		if (!streamerId || !referredId) {
			return NextResponse.json({ error: "Missing streamerId or referredId" }, { status: 400 });
		}

		const newReferal = await createReferal(streamerId, referredId);
		return NextResponse.json(newReferal);
	} catch (error) {
		console.error("POST /api/referals error:", error);
		return NextResponse.json({ error: "Error creating referal" }, { status: 500 });
	}
}
