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
            <h1 className="h-display">Bivalno in stavbno pohištvo,<br />pod katere spada:</h1>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-40">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-20">
            {categories.map((c) => (
              <Link
                key={c.id}
                to="/galerija/$id"
                params={{ id: c.id }}
                className="group block transition-opacity duration-300 hover:opacity-90"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={c.cover}
                    alt={c.title}
                    width={1600}
                    height={1200}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="mt-6">
                  <span className="font-display text-lg text-beige-deep">{c.n}</span>
                  <h2 className="mt-2 font-display text-3xl font-light leading-tight md:text-4xl">{c.title}</h2>
                </div>
              </Link>
            ))}

            {SERVICES.map((s) => (
              <article key={s.n} className="group">
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
                <div className="mt-6">
                  <span className="font-display text-lg text-beige-deep">{s.n}</span>
                  <h2 className="mt-2 font-display text-3xl font-light leading-tight md:text-4xl">{s.t}</h2>
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
