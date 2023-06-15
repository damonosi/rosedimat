import ApaTrandafiri from "@/public/imagini/apa.png";
import BannerStanga from "@/public/imagini/banner-lateral-stanga.svg";
import HrProduse from "@/public/imagini/hrProduse.svg";
import PetaleTrandafiri from "@/public/imagini/petale.png";
import UleiTrandafiri from "@/public/imagini/ulei.png";
import Image from "next/image";
import Produs from "./Produs";
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
        <Produs
          src={ApaTrandafiri}
          titlu="Apa de trandafir"
          descriere=" Transforma-ti rutina intr-o experienta florala"
          continutProdus="100 % apa din petale de trandafiri de damasc"
          pret="25 Ron"
          cantitate="100 ml"
        />
        <Image
          alt="banner-stanga"
          className="py-12"
          src={HrProduse}
        />
        <Produs
          src={UleiTrandafiri}
          titlu="Ulei esential de trandafir"
          descriere=" Transforma-ti rutina intr-o experienta florala"
          continutProdus="100 % ulei din petale de trandafiri de damasc"
          pret="450 Ron"
          cantitate="2 ml"
        />
        <Image
          alt="banner-stanga"
          className="py-12"
          src={HrProduse}
        />{" "}
        <Produs
          src={PetaleTrandafiri}
          titlu="Petale de trandafir"
          descriere=" Transforma-ti rutina intr-o experienta florala"
          continutProdus="100 %  petale de trandafiri de damasc proaspete"
          pret="40 Ron"
          cantitate="1 kg"
        />
      </section>
    </div>
  );
};

export default ProduseSection;
