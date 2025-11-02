import Link from "next/link";

const navigationLinks = [
  { label: "Produse", href: "/" },
  { label: "Despre noi", href: "/" },
  { label: "Contact", href: "/" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-roz/20 bg-gradient-to-br from-site via-site to-crem/40 text-[#3f1f24]">
      <span
        aria-hidden
        className="absolute inset-x-0 -top-px h-0.5 bg-gradient-to-r from-transparent via-roz/40 to-transparent"
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-12 md:px-12 lg:px-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr,1fr,1fr]">
          <div className="space-y-5">
            <div>
              <p className="text-sm font-semibold tracking-[0.3em] uppercase text-roz">Rose Dimat</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-wide text-[#3f1f24]">
                Esențe artizanale din România
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#3f1f24]/80">
              Distilăm cu grijă aromele autentice ale trandafirilor din Județul Bacău, pentru a oferi colecții rafinate
              de parfumuri și produse pentru casă. Fiecare lot este creat în serii limitate și finisat manual în
              atelierul nostru.
            </p>
            <div className="space-y-1 text-sm text-[#3f1f24]/70">
              <p>Program: Luni – Vineri, 09:00 – 18:00</p>
              <p>
                Email:
                <a href="mailto:atelier@rosedimat.ro" className="ml-1 font-medium text-roz hover:text-roz/80">
                  atelier@rosedimat.ro
                </a>
              </p>
              <p>
                Telefon:
                <a href="tel:+40700111222" className="ml-1 font-medium text-roz hover:text-roz/80">
                  +40 700 111 222
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#3f1f24]/80">Navigație</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[#3f1f24]/80 transition hover:bg-roz/10 hover:text-roz"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-roz/70" aria-hidden />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#3f1f24]/80">Ținem legătura</h3>
            <p className="text-sm leading-relaxed text-[#3f1f24]/80">
              Înscrie-te în jurnalul nostru lunar pentru povești despre procesul de creație, lansări de colecții și
              recomandări de cadouri parfumate.
            </p>
            <form className="flex w-full flex-col gap-3 sm:flex-row" action="#" method="post">
              <label className="sr-only" htmlFor="footer-email">
                Adresă de email
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                placeholder="nume@email.com"
                className="w-full rounded-full border border-roz/30 bg-white/70 px-4 py-2 text-sm text-[#3f1f24] shadow-inner outline-none transition focus:border-roz focus:ring-2 focus:ring-roz/40"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full border border-roz bg-roz px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-site shadow-sm transition hover:bg-roz/90"
              >
                Trimite
              </button>
            </form>
            <div className="flex items-center gap-4 text-sm text-[#3f1f24]/70">
              <Link href="#" className="transition hover:text-roz">
                Instagram
              </Link>
              <span className="h-1 w-1 rounded-full bg-roz/60" aria-hidden />
              <Link href="#" className="transition hover:text-roz">
                Facebook
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 border-t border-roz/10 pt-6 text-xs tracking-[0.3em] uppercase text-[#3f1f24]/60 md:flex-row">
          <p>&copy; {currentYear} Rose Dimat. Toate drepturile rezervate.</p>
          <p>Creat cu drag în România.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
