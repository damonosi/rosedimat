"use client";

import { FormEvent, useState } from "react";

type ProfileFormProps = {
  user: {
    name: string;
    email: string;
    image?: string;
  };
};

const ProfileForm = ({ user }: ProfileFormProps) => {
  const [name, setName] = useState(user.name);
  const [image, setImage] = useState(user.image ?? "");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    const response = await fetch("/api/user/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        image,
        password: password.trim() ? password : undefined,
      }),
    });

    const data = await response.json().catch(() => ({}));

    setLoading(false);

    if (!response.ok) {
      setErrorMessage(data?.message ?? "Nu am putut actualiza profilul.");
      return;
    }

    setPassword("");
    setSuccessMessage("Profilul a fost actualizat.");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="profile-name">
            Nume complet
          </label>
          <input
            id="profile-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="w-full rounded-full border border-roz/30 bg-white/90 px-4 py-2 text-sm text-[#3f1f24] shadow-inner outline-none transition focus:border-roz focus:ring-2 focus:ring-roz/30"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="profile-email">
            Adresă de email
          </label>
          <input
            id="profile-email"
            type="email"
            value={user.email}
            disabled
            className="w-full cursor-not-allowed rounded-full border border-roz/30 bg-white/60 px-4 py-2 text-sm text-[#4d2a2e]/80 shadow-inner outline-none"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="profile-image">
          URL fotografie de profil
        </label>
        <input
          id="profile-image"
          type="url"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          className="w-full rounded-full border border-roz/30 bg-white/90 px-4 py-2 text-sm text-[#3f1f24] shadow-inner outline-none transition focus:border-roz focus:ring-2 focus:ring-roz/30"
          placeholder="https://..."
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="profile-password">
          Schimbă parola
        </label>
        <input
          id="profile-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          minLength={6}
          placeholder="Completează doar dacă dorești o parolă nouă"
          className="w-full rounded-full border border-roz/30 bg-white/90 px-4 py-2 text-sm text-[#3f1f24] shadow-inner outline-none transition focus:border-roz focus:ring-2 focus:ring-roz/30"
        />
      </div>
      {successMessage && <p className="text-sm text-green-700">{successMessage}</p>}
      {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center rounded-full bg-roz px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-site shadow-lg shadow-roz/20 transition hover:bg-roz/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Se salvează…" : "Salvează modificările"}
      </button>
    </form>
  );
};

export default ProfileForm;
