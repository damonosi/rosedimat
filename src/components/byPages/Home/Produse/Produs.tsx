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
  return (
    <section
      className={`flex relative  w-full gap-5  ${
        titlu === "Ulei esential de trandafir" && "flex-row-reverse"
      } `}
      id="apa-trandafiri"
    >
      <div
        className={`w-1/2 flex ${
          titlu === "Ulei esential de trandafir" && "justify-end"
        }`}
      >
        {" "}
        <Image
          alt="banner-stanga"
          className="relative"
          src={src}
        />
      </div>
      <div className="w-1/2 flex flex-col justify-between items-start gap-8 text-start">
        {" "}
        <h1 className="text-3xl font-bold">{titlu}</h1>
        <h2 className="leading-9">
          {descriere}
          <br />
          <span className="font-bold mt-2">{continutProdus}</span>
        </h2>
        <section className="flex gap-5">
          <div
            className="text-2xl text-verde"
            id="cantitate+pret"
          >
            <span>{pret} </span>
            <span>/ </span>
            <span className="opacity-50">{cantitate} </span>
          </div>
          <div
            id="selecteaza cantitate"
            className="flex "
          >
            <button
              onClick={handleScadereCantitateDorita}
              className="text-verde border w-8 h-8 opacity-50"
            >
              -{" "}
            </button>
            <span className="text-verde border flex items-center justify-center w-8 h-8 opacity-50">
              {cantitateDorita}
            </span>
            <button
              onClick={handleAdaugaCantitateDorita}
              className="text-verde border w-8 h-8 opacity-50"
            >
              +{" "}
            </button>
          </div>
        </section>
        <button className="bg-roz text-crem flex p-4 gap-[10px]">
          <span>Comanda</span> <Cart className="w-7 h-7 " />{" "}
        </button>
      </div>
    </section>
  );
};

export default Produs;
