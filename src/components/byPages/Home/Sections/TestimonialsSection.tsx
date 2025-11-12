const testimonials = [
  {
    name: "Andreea, specialist spa",
    quote:
      "Apa de trandafiri Casa Damaskin este nelipsită din masajele faciale pe care le ofer. Clienții observă imediat diferența de parfum și de confort al pielii față de alte ape florale.",
  },
  {
    name: "Irina, make-up artist",
    quote:
      "O folosesc ca spray de pregătire și fixare pentru mirese. Machiajul rezistă impecabil, iar mirosul delicat relaxează clientele înaintea evenimentului.",
  },
  {
    name: "Mihai, antreprenor",
    quote:
      "Îmi place să pulverizez apa pe lenjerie și în birou pentru o atmosferă calmă. Este un cadou memorabil pentru partenerii mei de business.",
  },
];

const certifications = [
  "Dermatologic testată în România",
  "100% petale de trandafiri de Damasc",
  "Distilare la abur, fără alcool",
  "Ambalaj din sticlă reciclabilă",
];

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[2fr_1fr] lg:items-start">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-roz">Părerile clienților</p>
            <h2 className="text-3xl font-semibold text-[#3f1f24] sm:text-4xl">
              Profesioniștii recomandă Casa Damaskin
            </h2>
            <p className="text-base text-[#4d2a2e]/80 sm:text-lg">
              Împărtășim feedbackul primit din partea specialiștilor care folosesc zilnic apa de trandafiri în tratamente faciale, machiaje și ritualuri corporale.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {testimonials.map(({ name, quote }) => (
              <blockquote
                key={name}
                className="flex h-full flex-col justify-between gap-4 rounded-3xl bg-site p-6 text-left shadow-lg shadow-roz/10 ring-1 ring-roz/10"
              >
                <p className="text-sm leading-relaxed text-[#4d2a2e]/80">“{quote}”</p>
                <cite className="text-sm font-semibold text-[#3f1f24]">{name}</cite>
              </blockquote>
            ))}
          </div>
        </div>
        <aside className="flex flex-col gap-6 rounded-3xl bg-site p-6 text-left shadow-lg shadow-roz/10 ring-1 ring-roz/10">
          <h3 className="text-xl font-semibold text-[#3f1f24]">Certificări și garanții</h3>
          <p className="text-sm leading-relaxed text-[#4d2a2e]/80">
            Ne mândrim cu procesul transparent de producție și cu parteneriatele locale care mențin standardele înalte pentru fiecare lot de apă de trandafiri.
          </p>
          <ul className="flex flex-col gap-3 text-sm text-[#4d2a2e]/80">
            {certifications.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-roz" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default TestimonialsSection;
