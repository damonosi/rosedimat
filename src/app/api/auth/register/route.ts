import User from "@/models/User";
import db from "@/utils/db";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Numele, emailul și parola sunt obligatorii." },
        { status: 400 },
      );
    }

    await db.connect();

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { message: "Adresa de email este deja folosită." },
        { status: 409 },
      );
    }

    const hashedPassword = await hash(password, 10);

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "Cont creat cu succes.", userId: user._id },
      { status: 201 },
    );
  } catch (error) {
    console.error("Eroare la crearea contului", error);
    return NextResponse.json(
      { message: "A apărut o eroare neașteptată." },
      { status: 500 },
    );
  } finally {
    await db.disconnect();
  }
}
