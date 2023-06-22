import ApaTrandafiri from "@/public/imagini/apa.png";
import BannerDreapta from "@/public/imagini/banner-lateral-dreapta.svg";
import BannerStanga from "@/public/imagini/banner-lateral-stanga.svg";
import HrProduse from "@/public/imagini/hrProduse.svg";
import PetaleTrandafiri from "@/public/imagini/petale.png";
import UleiTrandafiri from "@/public/imagini/ulei.png";
import Produs from "./Produs";
const ProduseSection = () => {
  return (
    <div className="flex flex-col text-center w-full pt-24 px-2 md:px-96 relative overflow-hidden ">
      <h1 className="text-3xl text-roz ">
        Produse din petale de trandafir culese manual
      </h1>

      <HrProduse
        alt="pauza-sectiune"
        className=" w-full  h-2 my-12"
      />
      <BannerStanga
        alt="banner-stanga"
        className="absolute left-0 w-[281px] h-[772px]  top-0"
      />
      <BannerDreapta
        alt="banner-dreapta"
        className="absolute right-0 w-[281px] h-[772px]  top-1/2 "
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
        <HrProduse
          alt="pauza-sectiune"
          className="w-full  h-2 my-12"
        />
        <Produs
          src={UleiTrandafiri}
          titlu="Ulei esential de trandafir"
          descriere=" Transforma-ti rutina intr-o experienta florala"
          continutProdus="100 % ulei din petale de trandafiri de damasc"
          pret="450 Ron"
          cantitate="2 ml"
        />
        <HrProduse
          alt="pauza-sectiune"
          className="w-full  h-2 my-12"
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
