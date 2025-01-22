import { NextResponse } from 'next/server';
import { consultarTiposAlternativa } from '@/lib/actions/questionario-actions';

export async function GET() {
  try {
    const tipos = await consultarTiposAlternativa();
    return NextResponse.json(tipos);
  } catch (error) {
    console.error('Erro ao consultar tipos:', error);
    return NextResponse.json({ error: 'Erro ao consultar tipos' }, { status: 500 });
  }
}
