import { NextResponse } from 'next/server';
import { deleteStreamer, findStreamerById, updateStreamer } from '../../../lib/repositories/streamers';

type Params = {
  params: Promise<{ id: string }>;
};

export async function GET(_: Request, { params }: Params) {
  try {
    const streamer = await findStreamerById((await params).id);
    if (!streamer) {
      return NextResponse.json({ error: 'Streamer no encontrado' }, { status: 404 });
    }
    return NextResponse.json(streamer);
  } catch (error) {
    console.error('GET /api/streamers error:', error);
    return NextResponse.json({ error: 'Error al obtener streamer' }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: Params) {
  try {
    await deleteStreamer((await params).id);
    return NextResponse.json({ message: 'Streamer eliminado' });
  } catch (error) {
    console.error('DELETE /api/streamers error:', error);
    return NextResponse.json({ error: 'No se pudo eliminar el streamer' }, { status: 500 });
  }
}

export async function PATCH(_: Request, { params }: Params) {
  try {
    const body = await _.json();
    await updateStreamer((await params).id, body);
    return NextResponse.json({ message: 'Streamer actualizado' });
  } catch (error) {
    console.error('PATCH /api/streamers error:', error);
    return NextResponse.json({ error: 'No se pudo actualizar el streamer' }, { status: 500 });
  }
}
