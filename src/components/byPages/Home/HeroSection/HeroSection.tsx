import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative isolate flex w-full justify-center overflow-hidden bg-site"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 right-[-20%] w-[65%] rounded-full bg-roz/10 blur-3xl md:right-[-10%]" />
        <div className="absolute bottom-[-30%] left-[-10%] h-64 w-64 rounded-full bg-verde/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#f6f3db] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-white to-transparent" />
      </div>
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-16 px-4 pb-20 pt-24 text-center sm:px-6 lg:gap-20 lg:px-8 lg:pb-24 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
          viewport={{ once: true, amount: 0.4 }}
          className="flex w-full max-w-3xl flex-col items-center gap-6 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true, amount: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-roz/30 bg-white/60 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-roz backdrop-blur sm:text-sm"
          >
            Apă de trandafiri artizanală
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-4xl font-semibold text-[#3f1f24] sm:text-5xl lg:text-6xl"
          >
            ROSE DIMAT – Ritualul complet cu apă de trandafiri de Damasc
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-lg leading-relaxed text-[#4d2a2e] sm:text-xl"
          >
            Tonifică, parfumează și iluminează pielea cu singurul produs pe care îl
            creăm: apa de trandafiri Rose Dimat, distilată lent din petale culese la
            răsărit în livezile noastre din România. Formula pură, fără alcool,
            păstrează intact parfumul damascen autentic pentru a reda strălucire
            tenului și starea de bine ritualului tău zilnic.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="#produse"
              className="inline-flex items-center justify-center rounded-full bg-roz px-8 py-3 text-base font-semibold text-crem shadow-lg shadow-roz/20 transition hover:bg-[#c05c55]"
            >
              Comandă apa de trandafiri
            </Link>
            <a
              href="#despre-noi"
              className="inline-flex items-center justify-center rounded-full border border-[#d9c9aa] px-8 py-3 text-base font-semibold text-[#3f1f24] transition hover:border-roz hover:text-roz"
            >
              Povestea noastră
            </a>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, amount: 0.4 }}
            className="grid w-full gap-4 text-left sm:grid-cols-2"
          >
            {[
              "Distilare la abur din petale de Damasc culese manual",
              "Certificare dermatologică pentru toate tipurile de piele",
              "Livrare rapidă în toată țara și abonamente flexibile",
              "Ambalaj din sticlă reciclată și etichetă eco-friendly",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white/70 p-4 text-sm text-[#4d2a2e] shadow-sm shadow-roz/10 backdrop-blur"
              >
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-roz" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          viewport={{ once: true, amount: 0.35 }}
          className="grid w-full max-w-4xl gap-6 rounded-[40px] bg-white/70 p-6 text-left shadow-lg shadow-roz/10 backdrop-blur sm:grid-cols-3"
        >
          {[ 
            {
              title: "Preț transparent",
              value: "85 RON / 100ml",
              description: "sticla de 100 ml cu pulverizator premium",
            },
            {
              title: "Proces lent",
              value: "12 ore",
              description: "distilare tradițională la temperatură controlată",
            },
            {
              title: "Origine locală",
              value: "Valea Trandafirilor",
              description: "plantanție proprie din județul Bacău",
            },
          ].map(({ title, value, description }) => (
            <div key={title} className="rounded-3xl bg-gradient-to-br from-white to-roz/10 p-6 shadow-inner shadow-roz/10">
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-roz">{title}</dt>
              <dd className="mt-3 text-3xl font-semibold text-[#3f1f24]">{value}</dd>
              <p className="mt-2 text-sm text-[#4d2a2e]/80">{description}</p>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default HeroSection;
