import ApaTrandafiri from "@/public/imagini/apa.png";
import BannerDreapta from "@/public/imagini/banner-lateral-dreapta.svg";
import BannerStanga from "@/public/imagini/banner-lateral-stanga.svg";

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
            Apa de trandafiri Rose Dimat
          </h1>
          <p className="max-w-3xl text-base text-[#4d2a2e]/80 sm:text-lg">
            Distilăm un singur produs pentru că punem toate resursele în perfecționarea
            apei de trandafiri. Fiecare sticlă concentrează prospețimea petalelor
            culese manual și apa de izvor filtrată natural, oferind un tonic facial
            premium, potrivit pentru aromaterapie, îngrijirea părului și ritualurile
            spa de acasă.
          </p>
        </div>
        <HrProduse className="max-w-3xl" />
        <Produs
          src={ApaTrandafiri}
          titlu="Apă de trandafiri de Damasc"
          descriere="Transformă-ți rutina de îngrijire într-un moment de rafinament olfactiv și vizual, cu note delicate, floral-condimentate."
          continutProdus="Ingrediente: apă distilată din petale proaspete de trandafiri de Damasc, fără alcool, fără coloranți"
          pret="85 RON"
          cantitate="200 ml"
        />
      </div>
    </section>
  );
};

export default ProduseSection;
