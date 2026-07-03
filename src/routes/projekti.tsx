import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projekti")({
  head: () => ({
    meta: [
      { title: "Projekti — Mizarstvo Šetina" },
      { name: "description", content: "Izbrani projekti mizarstva Šetina — kuhinje, stopnice, mize in notranja oprema po meri." },
      { property: "og:title", content: "Projekti — Mizarstvo Šetina" },
      { property: "og:description", content: "Portfolio dokončanih del." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-16 md:pt-56 md:pb-24">
        <div className="container-page grid gap-8 md:grid-cols-12">
          <div className="md:col-span-2">
            <p className="eyebrow">Projekti</p>
          </div>
          <div className="md:col-span-10">
            <h1 className="h-display">Izbrano<br />delo,<br />odprto.</h1>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-40">
        <div className="container-page grid gap-16 md:grid-cols-2 md:gap-x-12 md:gap-y-28">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to="/projekti/$slug"
              params={{ slug: p.slug }}
              className={`group block ${i % 2 === 1 ? "md:mt-32" : ""}`}
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={p.cover}
                  alt={p.title}
                  width={1600}
                  height={2000}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-6 flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-beige-deep">{p.category}</p>
                  <h2 className="mt-2 font-display text-2xl leading-tight md:text-3xl">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.location}</p>
                </div>
                <span className="shrink-0 text-xs uppercase tracking-widest text-muted-foreground">
                  {p.year}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
