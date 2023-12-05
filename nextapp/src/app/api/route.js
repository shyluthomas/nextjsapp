import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/db";
import { hashPassword } from "@/app/lib/auth";



export async function POST(req) {
  try {
    const data = await req.json();
    const {email,password} = data;
    console.log('first',data);
    if(!email || !password) {
        return NextResponse.json(
          {
            error: "invalid credentials",
          },
          {
          status: 422,
          }
        );
    }
  const client = await connectToDatabase();
  const db = client.db();
  const result = db.collection('user').insertOne({email:email,password: hashPassword(password)})
    return NextResponse.json(
      {
      status: 200,
      message: "user created"
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get admins" },
      {
        status: 500,
      }
    );
  }
}