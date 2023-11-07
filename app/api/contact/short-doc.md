import { NextRequest, NextResponse } from 'next/server';

export function GET(req: NextRequest) {
  try {
    return NextResponse.json({ message: 'ok' });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export function POST(req: NextRequest) {
<!--  -->
const body=await req.json()

  try {
    return NextResponse.json({ message: 'ok' });
  } catch (error) {
    return NextResponse.json(error);
  }
}
