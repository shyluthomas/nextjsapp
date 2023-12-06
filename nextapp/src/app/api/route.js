import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/db";
import { hashPassword } from "@/app/lib/auth";



export async function POST(req) {
  try {
    const data = await req.json();
    const {email,password} = data;
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
  const pw = await hashPassword(password);
  const result = db.collection('user').insertOne({email:email,password: pw})
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