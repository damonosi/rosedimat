import ApaTrandafiri from "@/public/imagini/apa.png";
import BannerDreapta from "@/public/imagini/banner-lateral-dreapta.svg";
import BannerStanga from "@/public/imagini/banner-lateral-stanga.svg";

import PetaleTrandafiri from "@/public/imagini/petale.png";
import UleiTrandafiri from "@/public/imagini/ulei.png";

import Produs from "./Produs";

const HrProduse = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 823 6"
      className={`${className}  my-12 h-2 w-full  `}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 0.5C1.61929 0.5 0.5 1.61929 0.5 3C0.5 4.38071 1.61929 5.5 3 5.5V0.5ZM3 5.5H822.022V0.5H3V5.5Z"
        fill="url(#paint0_linear_330_130)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_330_130"
          x1="822.011"
          y1="6.48451"
          x2="3.02731"
          y2="-0.185606"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor="#F2EECB"
            stopOpacity="0.22"
          />
          <stop
            offset="0.489583"
            stopColor="#D3736D"
            stopOpacity="0.32"
          />
          <stop
            offset="1"
            stopColor="#F2EECB"
            stopOpacity="0.22"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
const ProduseSection = () => {
  return (
    <div className="flex flex-col text-center w-full pt-24 px-2 md:px-96 relative overflow-hidden ">
      <h1 className="text-3xl text-roz ">
        Produse din petale de trandafir culese manual
      </h1>

      <HrProduse />
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
        <HrProduse />
        <Produs
          src={UleiTrandafiri}
          titlu="Ulei esential de trandafir"
          descriere=" Transforma-ti rutina intr-o experienta florala"
          continutProdus="100 % ulei din petale de trandafiri de damasc"
          pret="450 Ron"
          cantitate="2 ml"
        />
        <HrProduse />
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
