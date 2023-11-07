import UserRegister from '@/database/models/registration';
import { connectToMongo } from '@/database/mongo';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // MONGO CONNECTION
  await connectToMongo();
  const response = NextResponse;
  const data = await req.json();
  try {
    const user = await UserRegister.findOne(data);
    // console.log(user)
    return response.json({ user }, { status: 200 });
  } catch (error) {
    return response.json(error);
  }
}
