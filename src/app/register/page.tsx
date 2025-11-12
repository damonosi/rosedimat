"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";

const RegisterPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Parolele nu coincid.");
      return;
    }

    setLoading(true);

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      setLoading(false);
      setError(data?.message ?? "Nu am putut crea contul.");
      return;
    }

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl,
    });

    setLoading(false);

    if (result?.error) {
      router.push("/login");
      return;
    }

    router.push(result?.url ?? callbackUrl);
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-site px-4 py-24">
      <div className="w-full max-w-lg rounded-3xl bg-white/80 p-8 text-[#3f1f24] shadow-xl shadow-roz/10 backdrop-blur">
        <h1 className="text-3xl font-semibold text-center">Creează-ți contul Casa Damaskin</h1>
        <p className="mt-2 text-center text-sm text-[#4d2a2e]/80">
          Un cont îți oferă acces rapid la comenzi, la istoricul preferințelor și la oferte speciale.
        </p>
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="register-name">
              Nume complet
            </label>
            <input
              id="register-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="w-full rounded-full border border-roz/30 bg-white/90 px-4 py-2 text-sm text-[#3f1f24] shadow-inner outline-none transition focus:border-roz focus:ring-2 focus:ring-roz/30"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="register-email">
              Adresă de email
            </label>
            <input
              id="register-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full rounded-full border border-roz/30 bg-white/90 px-4 py-2 text-sm text-[#3f1f24] shadow-inner outline-none transition focus:border-roz focus:ring-2 focus:ring-roz/30"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="register-password">
                Parolă
              </label>
              <input
                id="register-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                minLength={6}
                className="w-full rounded-full border border-roz/30 bg-white/90 px-4 py-2 text-sm text-[#3f1f24] shadow-inner outline-none transition focus:border-roz focus:ring-2 focus:ring-roz/30"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="register-confirm">
                Confirmă parola
              </label>
              <input
                id="register-confirm"
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
                minLength={6}
                className="w-full rounded-full border border-roz/30 bg-white/90 px-4 py-2 text-sm text-[#3f1f24] shadow-inner outline-none transition focus:border-roz focus:ring-2 focus:ring-roz/30"
              />
            </div>
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-full bg-roz px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-site shadow-lg shadow-roz/20 transition hover:bg-roz/90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Se creează contul…" : "Creează cont"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-[#4d2a2e]/80">
          Ai deja cont? {" "}
          <Link href={`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`} className="font-semibold text-roz hover:text-roz/80">
            Autentifică-te aici
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
