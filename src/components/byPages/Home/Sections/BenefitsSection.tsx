import { motion } from "framer-motion";

const benefits = [
  {
    title: "Răcorire instantă",
    description:
      "Formula noastră pură calmează tenul după expunerea la soare, tratamente cosmetice sau epilare, reducând roșeața în doar câteva minute.",
  },
  {
    title: "Hidratare delicată",
    description:
      "Apă florală bogată în antioxidanți naturali care menține bariera cutanată echilibrată și pregătește pielea pentru seruri și creme nutritive.",
  },
  {
    title: "Aromaterapie autentică",
    description:
      "Mirosul floral-dulce cu note condimentate restabilește starea de bine și este preferat în masaje faciale, saune umede și terapii holistice.",
  },
  {
    title: "Multiplu mod de utilizare",
    description:
      "Potrivită pentru ten, corp, păr și textile. Perfectă ca spray de pernă, tonic pentru scalp sau adaos în rețete culinare gourmet.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 text-center">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-roz">Beneficii cheie</p>
          <h2 className="text-3xl font-semibold text-[#3f1f24] sm:text-4xl">
            De ce să alegi apa de trandafiri Rose Dimat?
          </h2>
          <p className="max-w-3xl text-base text-[#4d2a2e]/80 sm:text-lg">
            Apa noastră florală, produsă artizanal, este apreciată de cosmeticiene și terapeuți spa pentru efectele calmante, rafinate și aromatice.
            Descoperă principalele motive pentru care clienții aleg Rose Dimat pentru ritualul lor zilnic de îngrijire.
          </p>
        </div>
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, description }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex h-full flex-col gap-4 rounded-3xl bg-site p-6 text-left shadow-lg shadow-roz/10 ring-1 ring-roz/10"
            >
              <h3 className="text-xl font-semibold text-[#3f1f24]">{title}</h3>
              <p className="text-sm leading-relaxed text-[#4d2a2e]/80">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
