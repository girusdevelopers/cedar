import UserRegister from '@/database/models/registration';
import { connectToMongo } from '@/database/mongo';
import { NextRequest, NextResponse } from 'next/server';

// /api/contact/smiple@gmail.com

type ContactRoute = {
  params: {
    id: string;
  };
};

export async function GET(request: NextRequest, { params }: ContactRoute) {
  const response = NextResponse;
  await connectToMongo();
  try {
    const user = await UserRegister.findById(params.id);
    console.log(user);
    return response.json('user has been deleted');
  } catch (error) {
    return response.json(error);
  }
}

// params.id
export async function DELETE(request: NextRequest, { params }: ContactRoute) {
  const response = NextResponse;
  await connectToMongo();
  try {
    const user = await UserRegister.findByIdAndDelete(params.id);
    console.log(user);
    return response.json('user has been deleted');
  } catch (error) {
    return response.json(error);
  }
}
