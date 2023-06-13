import Imagine from "@/public/imagini/coverHero.jpg";
import Image from "next/image";
const DespreNoi = () => {
  return (
    <section className="px-96 text-center">
      <h1>Cine suntem?</h1>
      <div className="w-full flex">
        <Image
          alt="img-despre-noi"
          src={Imagine}
          className="w-1/3"
        />
        <Image
          alt="img-despre-noi"
          src={Imagine}
          className="w-1/3"
        />
        <Image
          alt="img-despre-noi"
          src={Imagine}
          className="w-1/3"
        />
      </div>
    </section>
  );
};

export default DespreNoi;
