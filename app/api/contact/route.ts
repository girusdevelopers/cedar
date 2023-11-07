import UserRegister from '@/database/models/registration';
import { connectToMongo } from '@/database/mongo';
import { NextRequest, NextResponse } from 'next/server';

export function GET(req: NextRequest) {
  try {
    return NextResponse.json({ message: 'ok' });
  } catch (error) {
    return NextResponse.json(error);
  }
}

const CreateRegistration = () => {};
// /api/contact - POST
export async function POST(req: NextRequest) {
  // MONGO CONNECTION
  await connectToMongo();
  const response = NextResponse;
  const data = await req.json();
  try {
    const user = await UserRegister.create(data);
    return response.json({ user }, { status: 200 });
  } catch (error) {
    return response.json(error);
  }
}
