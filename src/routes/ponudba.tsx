import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { FadeInSection } from "@/components/fade-in-section";
import { categories } from "@/data/categories";

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

function Offer() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-24 md:pt-56 md:pb-40">
        <div className="container-page">
          <FadeInSection className="mb-12">
            <p className="eyebrow">Ponudba</p>
          </FadeInSection>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-20">
            {categories.map((c, i) => (
              <FadeInSection key={c.id} delay={(i % 2) * 120}>
              <Link
                to="/galerija/$id"
                params={{ id: c.id }}
                className="group block transition-opacity duration-300 hover:opacity-90"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={c.coverImage}
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
              </FadeInSection>
            ))}
          </div>




          <FadeInSection className="mt-24 text-center md:mt-40">
            <p className="eyebrow">Pripravljeni?</p>
            <h2 className="h-section mt-6">Pogovorimo se o vašem projektu.</h2>
            <Link
              to="/kontakt"
              className="mt-10 inline-flex items-center gap-3 border border-foreground px-8 py-4 text-sm uppercase tracking-[0.25em] transition-colors hover:bg-foreground hover:text-background"
            >
              Kontaktirajte nas
            </Link>
          </FadeInSection>
        </div>
      </section>
    </SiteLayout>
  );
}
