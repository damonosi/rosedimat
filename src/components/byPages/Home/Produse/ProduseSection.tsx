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
    <section
      id="produse"
      className="relative flex w-full justify-center overflow-hidden bg-gradient-to-b from-white to-site px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden lg:flex">
        <BannerStanga className="h-full w-auto opacity-60" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:flex">
        <BannerDreapta className="h-full w-auto opacity-60" />
      </div>
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-16 text-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-semibold text-[#3f1f24] sm:text-4xl">
            Produse din petale de trandafir culese manual
          </h1>
          <p className="max-w-3xl text-base text-[#4d2a2e]/80 sm:text-lg">
            O selecție rafinată de apă, ulei și petale de trandafir de Damasc,
            obținute responsabil și îmbuteliate în loturi mici pentru a păstra aroma
            autentică a florilor.
          </p>
        </div>
        <HrProduse className="max-w-3xl" />
        <div className="flex w-full flex-col gap-16">
          <Produs
            src={ApaTrandafiri}
            titlu="Apa de trandafir"
            descriere="Transformă-ți rutina într-o experiență florală."
            continutProdus="100% apă din petale de trandafiri de Damasc"
            pret="25 RON"
            cantitate="100 ml"
          />
          <HrProduse className="max-w-3xl self-center" />
          <Produs
            src={UleiTrandafiri}
            titlu="Ulei esențial de trandafir"
            descriere="Un elixir prețios pentru piele și simțuri."
            continutProdus="100% ulei din petale de trandafiri de Damasc"
            pret="450 RON"
            cantitate="2 ml"
          />
          <HrProduse className="max-w-3xl self-center" />
          <Produs
            src={PetaleTrandafiri}
            titlu="Petale de trandafir"
            descriere="Petale proaspete culese la primele ore ale dimineții."
            continutProdus="100% petale de trandafiri de Damasc proaspete"
            pret="40 RON"
            cantitate="1 kg"
          />
        </div>
      </div>
    </section>
  );
};

export default ProduseSection;
