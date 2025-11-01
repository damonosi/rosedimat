const faqs = [
  {
    question: "Apa de trandafiri conține alcool sau conservanți?",
    answer:
      "Nu. Distilăm apa din petale proaspete și o îmbuteliam imediat în sticlă sterilă. Nu adăugăm alcool, parfumuri sintetice sau conservanți, iar termenul de valabilitate este de 12 luni de la deschidere.",
  },
  {
    question: "Este potrivită pentru ten sensibil sau acneic?",
    answer:
      "Da. Apa de trandafiri Rose Dimat este testată dermatologic și recomandată pentru piele sensibilă, inclusiv pentru ten predispus la acnee. Proprietățile antiinflamatoare ajută la calmarea iritațiilor și la reducerea sebumului în exces.",
  },
  {
    question: "Cum se păstrează corect apa de trandafiri?",
    answer:
      "Recomandăm să păstrezi sticla într-un loc răcoros și întunecat. Pentru un efect de răcorire instantă, depozitează produsul în frigider și pulverizează direct pe piele sau păr.",
  },
  {
    question: "Livrați și internațional?",
    answer:
      "Momentan expediem doar în România, prin curier rapid. Pentru comenzi corporate sau distribuție internațională, te rugăm să ne scrii la office@rosedimat.com pentru o ofertă personalizată.",
  },
];

const FAQSection = () => {
  return (
    <section className="w-full bg-site px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-roz">Întrebări frecvente</p>
          <h2 className="text-3xl font-semibold text-[#3f1f24] sm:text-4xl">
            Tot ce trebuie să știi despre apa noastră de trandafiri
          </h2>
          <p className="text-base text-[#4d2a2e]/80 sm:text-lg">
            Am adunat cele mai întâlnite întrebări pentru a te ajuta să iei o decizie informată și să ai grijă corespunzător de produsul nostru artizanal.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-3xl bg-white/80 p-6 shadow-lg shadow-roz/10 ring-1 ring-roz/10 backdrop-blur"
            >
              <summary className="cursor-pointer list-none text-left text-lg font-semibold text-[#3f1f24]">
                <span className="inline-flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-roz/10 text-sm font-semibold uppercase tracking-[0.2em] text-roz">
                    Q
                  </span>
                  {question}
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-[#4d2a2e]/80">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
