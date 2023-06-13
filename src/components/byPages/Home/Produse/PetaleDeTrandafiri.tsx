import PetaleTrandafiri from "@/public/imagini/petale.svg";
import Image from "next/image";
const PetaleDeTrandafiri = () => {
  return (
    <section
      id="petale trandafir"
      className=" flex relative  w-full gap-5 "
    >
      {" "}
      <div className="w-1/2">
        {" "}
        <Image
          alt="banner-stanga"
          className="relative"
          src={PetaleTrandafiri}
        />
      </div>
      <div className="w-1/2">
        {" "}
        <h1>Apa de trandafir</h1>
        <h2>Transforma-ti rutina intr-o experienta florala</h2>
        <span className="text-bold">
          100 % apa din petale de trandafiri de damasc{" "}
        </span>
        <section className="flex ">
          <div id="cantitate+pret">
            <span>25 Ron </span>
            <span>/ </span>
            <span>100 ml </span>
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
        <button className="bg-roz">Comanda</button>
      </div>
    </section>
  );
};

export default PetaleDeTrandafiri;
