import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const response = await fs.readFile(`${process.cwd()}/something.txt`, 'utf-8');

  return NextResponse.json({ data: response }, { status: 200 });
}
