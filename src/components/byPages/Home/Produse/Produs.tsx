import Cart from "@/public/imagini/cart.svg";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface IProdus {
  src: StaticImageData | string;
  titlu: string;
  descriere: string;
  pret: string;
  cantitate: string;
  continutProdus: string;
}

const Produs = ({
  src,
  titlu,
  descriere,
  pret,
  cantitate,
  continutProdus,
}: IProdus) => {
  const [cantitateDorita, setCantitateDorita] = useState(1);
  const handleScadereCantitateDorita = () => {
    cantitateDorita <= 1
      ? setCantitateDorita(1)
      : setCantitateDorita(cantitateDorita - 1);
  };
  const handleAdaugaCantitateDorita = () => {
    setCantitateDorita(cantitateDorita + 1);
  };

  return (
    <section className="flex flex-col items-center gap-12 lg:flex-row lg:items-stretch lg:gap-20">
      <div className="w-full lg:w-1/2">
        <div className="group relative mx-auto flex aspect-[4/5] w-full max-w-sm items-center justify-center rounded-[48px] bg-gradient-to-br from-white via-roz/30 to-roz/50 p-6 shadow-2xl shadow-roz/20 ring-1 ring-roz/20 sm:max-w-md lg:max-w-full">
          <div className="absolute inset-6 rounded-[38px] border border-white/60 opacity-70" />
          <div className="absolute -left-6 top-10 hidden h-20 w-20 rounded-full bg-white/60 blur-3xl md:block" />
          <div className="absolute -right-8 bottom-10 hidden h-24 w-24 rounded-full bg-roz/40 blur-3xl md:block" />
          <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-white/90 shadow-inner shadow-roz/20">
            <Image
              alt={titlu}
              src={src}
              fill
              className="object-contain p-6 transition duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 90vw"
              placeholder={typeof src === "string" ? "empty" : "blur"}
            />
          </div>
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center rounded-full bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-roz shadow-lg shadow-roz/30">
            Bestseller Rose Dimat
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-8 text-center lg:w-1/2 lg:items-start lg:text-left">
        <h2 className="text-3xl font-semibold text-[#3f1f24] sm:text-4xl">{titlu}</h2>
        <p className="text-base leading-relaxed text-[#4d2a2e]/90 sm:text-lg">
          {descriere}
        </p>
        <div className="w-full rounded-3xl bg-white/80 p-6 text-left shadow-lg shadow-roz/15 ring-1 ring-roz/10 backdrop-blur">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-roz">Compoziție și beneficii</h3>
          <p className="mt-3 text-sm text-[#4d2a2e]/80 sm:text-base">{continutProdus}</p>
          <ul className="mt-4 grid gap-2 text-sm text-[#4d2a2e]/80 sm:grid-cols-2">
            {[
              "Calmează iritațiile și roșeața tenului sensibil",
              "Revitalizează părul și scalpul cu un parfum discret",
              "Perfecționează machiajul ca spray fixator natural",
              "Ideală pentru tratamente spa și aromaterapie",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-roz" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-2xl font-semibold text-verde">
            <span>{pret}</span>
            <span className="text-base font-medium text-verde/70">/ {cantitate}</span>
          </div>
          <div className="flex items-center rounded-full border border-verde/40 bg-white/80 px-2 py-1 shadow-sm">
            <button
              onClick={handleScadereCantitateDorita}
              className="flex h-10 w-10 items-center justify-center rounded-full text-xl text-verde transition hover:bg-verde/10"
              aria-label="Scade cantitatea"
            >
              −
            </button>
            <span className="flex h-10 w-12 items-center justify-center text-lg font-semibold text-verde">
              {cantitateDorita}
            </span>
            <button
              onClick={handleAdaugaCantitateDorita}
              className="flex h-10 w-10 items-center justify-center rounded-full text-xl text-verde transition hover:bg-verde/10"
              aria-label="Crește cantitatea"
            >
              +
            </button>
          </div>
        </div>
        <button className="inline-flex items-center gap-3 rounded-full bg-roz px-8 py-3 text-base font-semibold text-crem shadow-lg shadow-roz/20 transition hover:bg-[#c05c55]">
          <span>Comandă acum</span>
          <Cart className="h-6 w-6" />
        </button>
        <p className="text-sm text-[#4d2a2e]/70">
          Livrare în 24-48h · Retur gratuit în 30 de zile · Plata securizată online
        </p>
      </div>
    </section>
  );
};

export default Produs;
