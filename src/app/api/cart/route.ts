import Cart from "@/models/Cart";
import db from "@/utils/db";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const normalizeCart = (cart: any) => {
  if (!cart) {
    return null;
  }

  return {
    _id: cart._id.toString(),
    user: cart.user.toString(),
    items: (cart.items ?? []).map((item: any) => ({
      _id: item._id.toString(),
      slug: item.slug,
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: item.quantity,
      product: item.product ? item.product.toString() : null,
    })),
    createdAt: cart.createdAt?.toString(),
    updatedAt: cart.updatedAt?.toString(),
  };
};

const ensureSession = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    throw new Error("UNAUTHORIZED");
  }
  return session;
};

export async function GET() {
  try {
    const session = await ensureSession();
    await db.connect();
    const cart = await Cart.findOne({ user: session.user.id }).lean();
    return NextResponse.json({ cart: normalizeCart(cart) });
  } catch (error) {
    if (error instanceof Error && error.message === "UNAUTHORIZED") {
      return NextResponse.json({ message: "Neautorizat" }, { status: 401 });
    }
    console.error("Eroare la preluarea coșului", error);
    return NextResponse.json({ message: "Nu am putut încărca coșul." }, { status: 500 });
  } finally {
    await db.disconnect();
  }
}

export async function POST(request: Request) {
  try {
    const session = await ensureSession();
    const { slug, name, image, price, quantity, productId } = await request.json();

    if (!slug || !name || !image || quantity === undefined || price === undefined) {
      return NextResponse.json(
        { message: "Toate câmpurile produsului sunt obligatorii." },
        { status: 400 },
      );
    }

    const parsedQuantity = Number(quantity);
    const parsedPrice = Number(price);
    if (!Number.isFinite(parsedQuantity) || parsedQuantity <= 0) {
      return NextResponse.json(
        { message: "Cantitatea trebuie să fie un număr pozitiv." },
        { status: 400 },
      );
    }

    if (!Number.isFinite(parsedPrice) || parsedPrice <= 0) {
      return NextResponse.json(
        { message: "Prețul trebuie să fie un număr pozitiv." },
        { status: 400 },
      );
    }

    await db.connect();

    let cart = await Cart.findOne({ user: session.user.id });

    if (!cart) {
      cart = await Cart.create({
        user: session.user.id,
        items: [],
      });
    }

    const existingItem = cart.items.find(
      (item: { slug: string; quantity: number }) => item.slug === slug,
    );

    if (existingItem) {
      existingItem.quantity += parsedQuantity;
    } else {
      cart.items.push({
        slug,
        name,
        image,
        price: parsedPrice,
        quantity: parsedQuantity,
        product: productId,
      });
    }

    await cart.save();

    return NextResponse.json({ cart: normalizeCart(cart.toObject()) }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === "UNAUTHORIZED") {
      return NextResponse.json({ message: "Neautorizat" }, { status: 401 });
    }
    console.error("Eroare la adăugarea în coș", error);
    return NextResponse.json({ message: "Nu am putut actualiza coșul." }, { status: 500 });
  } finally {
    await db.disconnect();
  }
}

export async function PUT(request: Request) {
  try {
    const session = await ensureSession();
    const { itemId, quantity } = await request.json();

    const parsedQuantity = Number(quantity);

    if (!itemId || !Number.isFinite(parsedQuantity)) {
      return NextResponse.json(
        { message: "Elementul și cantitatea sunt obligatorii." },
        { status: 400 },
      );
    }

    await db.connect();

    const cart = await Cart.findOne({ user: session.user.id });

    if (!cart) {
      return NextResponse.json({ message: "Coșul nu există." }, { status: 404 });
    }

    const item = cart.items.id(itemId);

    if (!item) {
      return NextResponse.json({ message: "Produsul nu a fost găsit în coș." }, { status: 404 });
    }

    if (parsedQuantity <= 0) {
      item.remove();
    } else {
      item.quantity = parsedQuantity;
    }

    await cart.save();

    return NextResponse.json({ cart: normalizeCart(cart.toObject()) });
  } catch (error) {
    if (error instanceof Error && error.message === "UNAUTHORIZED") {
      return NextResponse.json({ message: "Neautorizat" }, { status: 401 });
    }
    console.error("Eroare la actualizarea coșului", error);
    return NextResponse.json({ message: "Nu am putut actualiza coșul." }, { status: 500 });
  } finally {
    await db.disconnect();
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await ensureSession();
    const { itemId } = await request.json();

    if (!itemId) {
      return NextResponse.json(
        { message: "Trebuie să specifici produsul pe care vrei să îl elimini." },
        { status: 400 },
      );
    }

    await db.connect();

    const cart = await Cart.findOne({ user: session.user.id });

    if (!cart) {
      return NextResponse.json({ message: "Coșul nu există." }, { status: 404 });
    }

    const item = cart.items.id(itemId);

    if (!item) {
      return NextResponse.json({ message: "Produsul nu a fost găsit în coș." }, { status: 404 });
    }

    item.remove();

    await cart.save();

    return NextResponse.json({ cart: normalizeCart(cart.toObject()) });
  } catch (error) {
    if (error instanceof Error && error.message === "UNAUTHORIZED") {
      return NextResponse.json({ message: "Neautorizat" }, { status: 401 });
    }
    console.error("Eroare la eliminarea din coș", error);
    return NextResponse.json({ message: "Nu am putut actualiza coșul." }, { status: 500 });
  } finally {
    await db.disconnect();
  }
}
