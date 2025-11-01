import Cart from "@/public/imagini/cart.svg";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
interface IProdus {
  src: StaticImageData;
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
  const reverseLayout = titlu === "Ulei esențial de trandafir";

  return (
    <section
      className={`flex flex-col-reverse items-center gap-10 lg:gap-16 ${
        reverseLayout ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="w-full lg:w-1/2">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[40px] bg-white shadow-xl shadow-roz/15 ring-1 ring-roz/10 sm:max-w-md lg:max-w-full">
          <Image
            alt={titlu}
            src={src}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 90vw"
            placeholder="blur"
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-8 text-center lg:w-1/2 lg:items-start lg:text-left">
        <h2 className="text-3xl font-semibold text-[#3f1f24] sm:text-4xl">{titlu}</h2>
        <p className="text-base leading-relaxed text-[#4d2a2e]/90 sm:text-lg">
          {descriere}
          <br />
          <span className="mt-4 block font-semibold text-[#3f1f24]">
            {continutProdus}
          </span>
        </p>
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
      </div>
    </section>
  );
};

export default Produs;
