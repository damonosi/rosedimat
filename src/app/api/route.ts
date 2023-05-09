import User from "@/models/User";
import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await db.connect();
    const user = await User.find();
    db.disconnect();
    return NextResponse.json(user.reverse());
  } catch {
    return NextResponse.json("error", {
      status: 500,
    });
  }
}
