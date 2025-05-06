import { deleteReferal, findReferalsByStreamerId } from "@/app/lib/repositories/referals";
import { NextRequest, NextResponse } from "next/server";

type Params = {
	params: { id: string };
};

export async function GET(_: NextRequest, { params }: Params) {
	const streamerId = params.id;

	if (!streamerId) {
		return NextResponse.json({ error: "Missing streamerId" }, { status: 400 });
	}

	try {
		const referals = await findReferalsByStreamerId(streamerId);
		return NextResponse.json(referals);
	} catch (error) {
		console.error("GET /api/referals error:", error);
		return NextResponse.json({ error: "Error fetching referals" }, { status: 500 });
	}
}
export async function DELETE(_: NextRequest, { params }: Params) {
	try {
		const id = params.id;

		if (!id) {
			return NextResponse.json({ error: "Missing referal id" }, { status: 400 });
		}

		await deleteReferal(id);
		return NextResponse.json({ message: "Referal deleted" });
	} catch (error) {
		console.error("DELETE /api/referals error:", error);
		return NextResponse.json({ error: "Error deleting referal" }, { status: 500 });
	}
}
