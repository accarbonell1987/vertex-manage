import { NextRequest, NextResponse } from 'next/server';
import { deleteStreamingData, updateStreamingData } from '../../../lib/repositories/streamingData';

type Params = {
  params: Promise<{ id: string }>;
};

export async function DELETE(_: Request, { params }: Params) {
  const { id } = await params;
  await deleteStreamingData(id);
  return NextResponse.json({ ok: true });
}

export async function PATCH(req: NextRequest, { params }: Params) {
  const { id } = await params;
  const body = await req.json();

  const updated = await updateStreamingData(id, body);
  return NextResponse.json(updated);
}
