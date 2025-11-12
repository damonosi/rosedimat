import User from "@/models/User";
import db from "@/utils/db";
import { hash } from "bcryptjs";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ message: "Neautorizat" }, { status: 401 });
  }

  try {
    await db.connect();
    const user = await User.findById(session.user.id).select("-password").lean();

    if (!user) {
      return NextResponse.json({ message: "Utilizatorul nu există." }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error("Eroare la preluarea profilului", error);
    return NextResponse.json(
      { message: "Nu am putut încărca profilul utilizatorului." },
      { status: 500 },
    );
  } finally {
    await db.disconnect();
  }
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ message: "Neautorizat" }, { status: 401 });
  }

  try {
    const { name, image, password } = await request.json();

    await db.connect();

    const user = await User.findById(session.user.id);

    if (!user) {
      return NextResponse.json({ message: "Utilizatorul nu există." }, { status: 404 });
    }

    if (name) {
      user.name = name;
    }

    if (image) {
      user.image = image;
    }

    if (password) {
      user.password = await hash(password, 10);
    }

    await user.save();

    return NextResponse.json({ message: "Profil actualizat cu succes." });
  } catch (error) {
    console.error("Eroare la actualizarea profilului", error);
    return NextResponse.json(
      { message: "Nu am putut actualiza profilul." },
      { status: 500 },
    );
  } finally {
    await db.disconnect();
  }
}
