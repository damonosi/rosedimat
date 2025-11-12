"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl,
    });

    setLoading(false);

    if (result?.error) {
      setError("Datele de autentificare sunt invalide.");
      return;
    }

    router.push(result?.url ?? callbackUrl);
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-site px-4 py-24">
      <div className="w-full max-w-md rounded-3xl bg-white/80 p-8 text-[#3f1f24] shadow-xl shadow-roz/10 backdrop-blur">
        <h1 className="text-3xl font-semibold text-center">Bun venit la Casa Damaskin</h1>
        <p className="mt-2 text-center text-sm text-[#4d2a2e]/80">
          Autentifică-te în contul tău pentru a salva preferințele și a comanda rapid.
        </p>
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="login-email">
              Adresă de email
            </label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full rounded-full border border-roz/30 bg-white/90 px-4 py-2 text-sm text-[#3f1f24] shadow-inner outline-none transition focus:border-roz focus:ring-2 focus:ring-roz/30"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="login-password">
              Parolă
            </label>
            <input
              id="login-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="w-full rounded-full border border-roz/30 bg-white/90 px-4 py-2 text-sm text-[#3f1f24] shadow-inner outline-none transition focus:border-roz focus:ring-2 focus:ring-roz/30"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-full bg-roz px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-site shadow-lg shadow-roz/20 transition hover:bg-roz/90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Se autentifică…" : "Autentificare"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-[#4d2a2e]/80">
          Nu ai încă un cont? {" "}
          <Link href={`/register?callbackUrl=${encodeURIComponent(callbackUrl)}`} className="font-semibold text-roz hover:text-roz/80">
            Înregistrează-te
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
