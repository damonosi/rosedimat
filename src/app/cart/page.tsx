import CartView from "@/components/cart/CartView";
import Cart from "@/models/Cart";
import db from "@/utils/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

const CartPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect(`/login?callbackUrl=/cart`);
  }

  await db.connect();
  let cartData;
  try {
    cartData = await Cart.findOne({ user: session.user.id }).lean();
  } finally {
    await db.disconnect();
  }

  const serializedCart = cartData
    ? {
        _id: cartData._id.toString(),
        items: cartData.items.map((item: any) => ({
          _id: item._id.toString(),
          slug: item.slug,
          name: item.name,
          image: item.image,
          price: item.price,
          quantity: item.quantity,
        })),
      }
    : null;

  return (
    <section className="flex min-h-screen items-center justify-center bg-site px-4 py-24">
      <CartView cart={serializedCart} />
    </section>
  );
};

export default CartPage;
