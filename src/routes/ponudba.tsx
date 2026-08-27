import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import hero1 from "@/assets/hero-1.jpg";
import wide2 from "@/assets/wide-2.jpg";

export const Route = createFileRoute("/ponudba")({
  head: () => ({
    meta: [
      { title: "Ponudba — Mizarstvo Šetina" },
      { name: "description", content: "Kuhinje, kopalnice, vgradne omare, predsobe, postelje, stopnice in 3D izrisi po meri iz masivnega lesa." },
      { property: "og:title", content: "Ponudba — Mizarstvo Šetina" },
      { property: "og:description", content: "Bivalno in stavbno pohištvo po meri." },
    ],
  }),
  component: Offer,
});

const SERVICES = [
  { n: "01", t: "Kuhinje po meri", img: project1 },
  { n: "02", t: "Kopalnice", img: wide2 },
  { n: "03", t: "Vgradne omare", img: project3 },
  { n: "04", t: "Predsobe", img: hero1 },
  { n: "05", t: "Pohištvo za dnevne in otroške sobe", img: project6 },
  { n: "06", t: "Postelje", img: project5 },
  { n: "07", t: "Stopnice", img: project2 },
  { n: "08", t: "3D Izrisi", img: project4 },
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
            {SERVICES.map((s, i) => (
              <article
                key={s.n}
                className="group grid grid-cols-1 items-start gap-8 border-b border-border/60 py-12 md:grid-cols-12 md:gap-12 md:py-20"
              >
                <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={s.img}
                      alt={s.t}
                      width={1600}
                      height={1200}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <div className="md:col-span-6 md:pt-4">
                  <span className="font-display text-lg text-beige-deep">{s.n}</span>
                  <h2 className="mt-3 font-display text-3xl font-light leading-tight md:text-5xl">{s.t}</h2>
                  <p className="mt-5 max-w-xl text-foreground/75">{s.d}</p>
                </div>
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
