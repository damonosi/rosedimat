"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type CartItem = {
  _id: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type CartData = {
  _id: string;
  items: CartItem[];
};

const formatPrice = (price: number) => `${price.toFixed(2)} RON`;

const CartView = ({ cart }: { cart: CartData | null }) => {
  const [items, setItems] = useState<CartItem[]>(cart?.items ?? []);
  const [loadingItemId, setLoadingItemId] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const refreshCart = (updatedCart: CartData | null) => {
    setItems(updatedCart?.items ?? []);
  };

  const handleUpdateQuantity = async (itemId: string, quantity: number) => {
    setLoadingItemId(itemId);
    setStatusMessage(null);

    const response = await fetch("/api/cart", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemId, quantity }),
    });

    const data = await response.json().catch(() => ({}));
    setLoadingItemId(null);

    if (!response.ok) {
      setStatusMessage(data?.message ?? "Nu am putut actualiza coșul.");
      return;
    }

    refreshCart(data.cart ?? null);
    setStatusMessage("Coș actualizat.");
  };

  const handleRemoveItem = async (itemId: string) => {
    setLoadingItemId(itemId);
    setStatusMessage(null);

    const response = await fetch("/api/cart", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemId }),
    });

    const data = await response.json().catch(() => ({}));
    setLoadingItemId(null);

    if (!response.ok) {
      setStatusMessage(data?.message ?? "Nu am putut actualiza coșul.");
      return;
    }

    refreshCart(data.cart ?? null);
    setStatusMessage("Produs eliminat din coș.");
  };

  const cartIsEmpty = items.length === 0;
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="w-full max-w-5xl rounded-3xl bg-white/80 p-8 shadow-xl shadow-roz/10 backdrop-blur">
      <div className="flex flex-col gap-4 text-center text-[#3f1f24]">
        <h1 className="text-3xl font-semibold">Coșul meu de cumpărături</h1>
        <p className="text-sm text-[#4d2a2e]/80">
          Revizuiește produsele selectate din Casa Damaskin și finalizează comanda atunci când ești gata.
        </p>
      </div>
      {statusMessage && (
        <p className="mt-6 rounded-full bg-roz/10 px-4 py-2 text-center text-sm text-[#3f1f24]">
          {statusMessage}
        </p>
      )}
      {cartIsEmpty ? (
        <div className="mt-8 flex flex-col items-center gap-4 text-center text-sm text-[#4d2a2e]/80">
          <p>Coșul tău este gol momentan.</p>
          <Link
            href="/#produse"
            className="inline-flex items-center justify-center rounded-full bg-roz px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-site shadow-lg shadow-roz/20 transition hover:bg-roz/90"
          >
            Înapoi la colecție
          </Link>
        </div>
      ) : (
        <div className="mt-8 space-y-6">
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item._id}
                className="flex flex-col gap-4 rounded-3xl bg-site/70 p-6 text-[#3f1f24] shadow-inner shadow-roz/10 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex flex-1 items-center gap-4">
                  <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-white/80">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-[#4d2a2e]/80">{formatPrice(item.price)}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
                  <div className="flex items-center rounded-full border border-roz/30 bg-white/80 px-2 py-1 text-sm text-[#3f1f24]">
                    <button
                      type="button"
                      onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}
                      disabled={loadingItemId === item._id || item.quantity <= 1}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-lg transition hover:bg-roz/10 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      −
                    </button>
                    <span className="mx-3 min-w-[2rem] text-center font-semibold">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}
                      disabled={loadingItemId === item._id}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-lg transition hover:bg-roz/10 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(item._id)}
                    disabled={loadingItemId === item._id}
                    className="inline-flex items-center justify-center rounded-full border border-roz/30 bg-white/70 px-4 py-2 text-sm font-medium text-[#3f1f24] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Elimină
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-end gap-4">
            <div className="text-right text-[#3f1f24]">
              <p className="text-sm uppercase tracking-[0.3em] text-[#4d2a2e]/80">Total estimat</p>
              <p className="text-3xl font-semibold">{formatPrice(total)}</p>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-roz px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-site shadow-lg shadow-roz/20 transition hover:bg-roz/90"
            >
              Mergi la plată
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartView;
