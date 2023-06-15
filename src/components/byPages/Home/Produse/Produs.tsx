import Image, { StaticImageData } from "next/image";

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
            <button>- </button>
            <span>cantitate </span>
            <button>+ </button>
          </div>
        </section>
        <button className="bg-roz text-crem">Comanda</button>
      </div>
    </section>
  );
};

export default Produs;
