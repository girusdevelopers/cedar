import UserRegister from '@/database/models/registration';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json({ message: 'ok' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
}
