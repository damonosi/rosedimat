import BannerStanga from "@/public/imagini/banner-lateral-stanga.svg";
import HrProduse from "@/public/imagini/hrProduse.svg";
import Image from "next/image";
import ApaDeTrandafiri from "./ApaDeTrandafiri";
import PetaleDeTrandafiri from "./PetaleDeTrandafiri";
import UleiDeTrandafiri from "./UleiDeTrandafiri";

const ProduseSection = () => {
  return (
    <div className=" text-center w-full pt-24 px-96 relative gap-">
      <h1 className="text-3xl text-roz ">
        Produse din petale de trandafir culese manual
      </h1>

      <Image
        alt="banner-stanga"
        className="py-12"
        src={HrProduse}
      />
      <Image
        alt="banner-stanga"
        className="absolute left-0 top-0"
        src={BannerStanga}
      />
      <section id="produse">
        <ApaDeTrandafiri />
        <Image
          alt="banner-stanga"
          className="py-12"
          src={HrProduse}
        />
        <UleiDeTrandafiri />
        <Image
          alt="banner-stanga"
          className="py-12"
          src={HrProduse}
        />
        <PetaleDeTrandafiri />
      </section>
    </div>
  );
};

export default ProduseSection;
