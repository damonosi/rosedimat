const steps = [
  {
    title: "Purificare și pregătire",
    description:
      "Curăță tenul cu un gel blând, apoi pulverizează apă de trandafiri Rose Dimat pe față și gât pentru a reechilibra pH-ul și a reduce senzația de piele care ține.",
  },
  {
    title: "Aplicarea tratamentelor",
    description:
      "În timp ce pielea este ușor umedă, aplică serul preferat bogat în acid hialuronic sau vitamina C. Apa florală intensifică absorbția ingredientelor active.",
  },
  {
    title: "Fixare și revigorare",
    description:
      "Folosește apă de trandafiri peste machiaj pentru un efect de glowy finish. Pulverizează și pe păr sau pernă pentru o experiență aromatică relaxantă înainte de somn.",
  },
];

const RitualSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-site px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(211,115,109,0.25),_transparent_55%)]" />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-12 text-center">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-roz">Ritual de frumusețe</p>
          <h2 className="text-3xl font-semibold text-[#3f1f24] sm:text-4xl">
            Cum integrezi apa de trandafiri în rutina zilnică
          </h2>
          <p className="text-base text-[#4d2a2e]/80 sm:text-lg">
            Urmează pașii recomandați de experții noștri pentru a profita la maximum de proprietățile calmante, hidratante și aromaterapeutice ale apei de trandafiri Rose Dimat.
          </p>
        </div>
        <div className="grid gap-8 text-left sm:grid-cols-3">
          {steps.map(({ title, description }, index) => (
            <div
              key={title}
              className="flex h-full flex-col gap-4 rounded-3xl bg-white/80 p-6 shadow-lg shadow-roz/20 backdrop-blur ring-1 ring-roz/10"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-roz text-base font-semibold text-crem shadow shadow-roz/30">
                0{index + 1}
              </span>
              <h3 className="text-xl font-semibold text-[#3f1f24]">{title}</h3>
              <p className="text-sm leading-relaxed text-[#4d2a2e]/80">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RitualSection;
