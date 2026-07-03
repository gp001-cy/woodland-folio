import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/ponudba")({
  head: () => ({
    meta: [
      { title: "Ponudba — Mizarstvo Šetina" },
      { name: "description", content: "Kuhinje, mize, stopnice, vgradne omare in notranja oprema po meri iz masivnega lesa." },
      { property: "og:title", content: "Ponudba — Mizarstvo Šetina" },
      { property: "og:description", content: "Kaj izdelujemo v naši delavnici." },
    ],
  }),
  component: Offer,
});

const SERVICES = [
  { n: "01", t: "Kuhinje po meri", d: "Od zasnove do vgradnje. Masivne fronte, ročno kovani okovi, popolna integracija aparatov." },
  { n: "02", t: "Mize in klopi", d: "Jedilne mize, pisalne mize, klopi — iz enotnih plošč masivnega lesa ali živih robov." },
  { n: "03", t: "Vgradne omare", d: "Od stene do stene, prilagojene arhitekturi prostora. Notranjost po vaših navadah." },
  { n: "04", t: "Stopnice", d: "Konzolne, lebdeče, klasične. V kombinaciji s kovino ali steklom." },
  { n: "05", t: "Notranja oprema poslovnih prostorov", d: "Recepcije, restavracije, hoteli. Rešitve, ki dvignejo prostor." },
  { n: "06", t: "Restavriranje", d: "Skrb za stare kose, ki si zaslužijo drugo življenje." },
];

function Offer() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-16 md:pt-56 md:pb-24">
        <div className="container-page grid gap-8 md:grid-cols-12">
          <div className="md:col-span-2">
            <p className="eyebrow">Ponudba</p>
          </div>
          <div className="md:col-span-10">
            <h1 className="h-display">Šest<br />poglavij<br />ene obrti.</h1>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-40">
        <div className="container-page">
          <div className="border-t border-border/60">
            {SERVICES.map((s) => (
              <article
                key={s.n}
                className="group grid grid-cols-[auto_1fr] items-start gap-6 border-b border-border/60 py-10 md:grid-cols-[100px_1fr_1fr] md:gap-16 md:py-14"
              >
                <span className="font-display text-lg text-beige-deep">{s.n}</span>
                <h2 className="font-display text-3xl font-light leading-tight md:text-5xl">{s.t}</h2>
                <p className="col-start-2 max-w-xl text-foreground/75 md:col-start-3 md:pt-2">{s.d}</p>
              </article>
            ))}
          </div>

          <div className="mt-24 text-center md:mt-40">
            <p className="eyebrow">Pripravljeni?</p>
            <h2 className="h-section mt-6">Pogovorimo se o vašem projektu.</h2>
            <Link
              to="/kontakt"
              className="mt-10 inline-flex items-center gap-3 border border-foreground px-8 py-4 text-sm uppercase tracking-[0.25em] transition-colors hover:bg-foreground hover:text-background"
            >
              Kontaktirajte nas
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
