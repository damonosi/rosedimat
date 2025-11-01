import Adoua from "@/public/imagini/about/adoua.png";
import Atreia from "@/public/imagini/about/atreia.png";
import Prima from "@/public/imagini/about/prima.png";
import Email from "@/public/imagini/email.svg";
import Facebook from "@/public/imagini/facebook.svg";
import BannerFooter from "@/public/imagini/footer-banner.svg";
import Instagram from "@/public/imagini/instagram.svg";
import Telefon from "@/public/imagini/telefon.svg";
import Twitter from "@/public/imagini/twitter.svg";
import Image from "next/image";
const DespreNoi = () => {
  return (
    <section
      id="despre-noi"
      className="relative flex w-full justify-center overflow-hidden bg-site px-4 sm:px-6"
    >
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-16 rounded-[48px] bg-white/70 px-6 py-20 text-center shadow-xl shadow-roz/10 backdrop-blur sm:px-10 lg:px-16">
        <h1 className="text-3xl font-light text-[#3f1f24] sm:text-4xl">Cine suntem?</h1>
        <div className="grid w-full gap-4 sm:grid-cols-3">
          {[Prima, Adoua, Atreia].map((imagine, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-lg shadow-roz/20"
            >
              <Image
                alt="Echipa Rose Dimat"
                src={imagine}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                placeholder="blur"
              />
            </div>
          ))}
        </div>
        <div className="flex max-w-3xl flex-col gap-6 text-[#4d2a2e]">
          <h2 className="text-xl font-medium sm:text-2xl">
            Rose Dimat este o afacere de familie născută din dragostea și respectul
            față de natură.
          </h2>
          <p className="text-base leading-relaxed sm:text-lg">
            Cultivăm trandafiri de Damasc în grădinile noastre din România și îi
            transformăm în produse autentice, create manual. Fiecare colecție este
            realizată în loturi mici, cu atenție la detalii și grijă pentru oameni și
            mediu.
          </p>
          <p className="text-base leading-relaxed sm:text-lg">
            Viziunea noastră este să păstrăm tradițiile artizanale și să aducem în
            casele voastre aroma pură a petalelor, prin produse curate, transparente
            și elegante.
          </p>
        </div>
        <section
          className="flex w-full flex-col items-center gap-10 rounded-[32px] bg-roz/5 p-8 text-[#3f1f24] sm:p-12"
          id="sectiune-contact"
        >
          <h2 className="text-2xl font-light sm:text-3xl">Contactează-ne!</h2>
          <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:office@rosedimat.com"
              className="flex w-full items-center justify-center gap-3 rounded-full border border-roz/30 bg-white/70 px-6 py-3 text-base font-medium transition hover:border-roz hover:text-roz sm:w-auto"
            >
              <Email className="h-5 w-5" />
              <span>office@rosedimat.com</span>
            </a>
            <a
              href="tel:+4436436346663"
              className="flex w-full items-center justify-center gap-3 rounded-full border border-roz/30 bg-white/70 px-6 py-3 text-base font-medium transition hover:border-roz hover:text-roz sm:w-auto"
            >
              <Telefon className="h-5 w-5" />
              <span>+44 364 363 46663</span>
            </a>
          </div>
          <h2 className="text-2xl font-light sm:text-3xl">Urmărește-ne!</h2>
          <div className="flex items-center justify-center gap-6 text-roz">
            <Instagram className="h-5 w-5" />
            <Facebook className="h-5 w-5" />
            <Twitter className="h-5 w-5" />
          </div>
          <BannerFooter className="mt-8 w-full max-w-3xl" />
        </section>
      </div>
    </section>
  );
};

export default DespreNoi;
