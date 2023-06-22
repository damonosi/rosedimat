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
    <section className="relative overflow-hidden flex flex-col px-96 text-center gap-[60px] mt-52">
      <h1 className="text-[32px] font-light">Cine suntem?</h1>
      <div className="w-full flex gap-[10px]">
        <Image
          alt="img-despre-noi"
          src={Prima}
          className="w-1/3"
        />
        <Image
          alt="img-despre-noi"
          src={Adoua}
          className="w-1/3"
        />
        <Image
          alt="img-despre-noi"
          src={Atreia}
          className="w-1/3"
        />
      </div>
      <h2 className="text-xl ">
        Rose Dimat este o afacere de familie ce a luat nastere din dragostea si
        respectul fata de natura.{" "}
      </h2>
      <h3 className="text-lg font-extralight ">
        Lorem ipsum dolor sit amet consectetur. Non sit accumsan id lectus nulla
        pellentesque gravida facilisi. Donec id a vitae leo pellentesque.
        Pulvinar at nascetur pulvinar turpis cras sit ultrices. Orci senectus
        vulputate erat nunc sed mauris.
      </h3>
      <section
        className="flex flex-col gap-14 justify-center items-center"
        id="sectiune contact"
      >
        <h2 className="text-[32px] font-light">Contacteaza-ne!</h2>
        <div
          className="flex gap-[10px]"
          id="contact"
        >
          <button className="flex items-center justify-center gap-[10px] border  px-3 py-2 border-[rgba(211, 115, 109, 0.20)]">
            {" "}
            <Email className="w-[18px] h-[18px]" />{" "}
            <span>office@rosedimat.com</span>
          </button>
          <button className="flex items-center justify-center gap-[10px] border px-3 py-2 border-[rgba(211, 115, 109, 0.20)]">
            {" "}
            <Telefon className="w-[18px] h-[18px]" />{" "}
            <span>+4436436346663</span>
          </button>
        </div>
        <h2 className="text-[32px] font-light">Urmareste-ne! </h2>
        <div className="flex gap-4">
          <Instagram className="w-4 h-4" />
          <Facebook className="w-4 h-4" />
          <Twitter className="w-4 h-4" />
        </div>
        <BannerFooter className=" bottom-0 transform translate-y-1/4 left-0 right-0" />
      </section>
    </section>
  );
};

export default DespreNoi;
