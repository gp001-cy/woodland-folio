import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/projekti/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.project.title} — Mizarstvo Šetina` },
            { name: "description", content: loaderData.project.intro },
            { property: "og:title", content: loaderData.project.title },
            { property: "og:description", content: loaderData.project.intro },
            { property: "og:image", content: loaderData.project.cover },
            { name: "twitter:image", content: loaderData.project.cover },
          ],
        }
      : { meta: [{ title: "Projekt — Mizarstvo Šetina" }] },
  component: ProjectDetail,
  notFoundComponent: () => (
    <SiteLayout>
      <section className="flex min-h-[60vh] items-center pt-40">
        <div className="container-page text-center">
          <p className="eyebrow">404</p>
          <h1 className="h-section mt-4">Projekt ne obstaja</h1>
          <Link to="/projekti" className="mt-8 inline-block border-b border-foreground pb-1 text-sm">
            Nazaj na projekte
          </Link>
        </div>
      </section>
    </SiteLayout>
  ),
  errorComponent: () => (
    <SiteLayout>
      <div className="container-page pt-40 text-center">Napaka pri nalaganju.</div>
    </SiteLayout>
  ),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <SiteLayout>
      {/* HERO: cover image full width */}
      <section className="relative h-[80svh] w-full overflow-hidden md:h-[100svh]">
        <img
          src={project.cover}
          alt={project.title}
          width={1920}
          height={1200}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/20" />
        <div className="container-page absolute inset-x-0 bottom-10 md:bottom-16">
          <p className="text-xs uppercase tracking-[0.3em] text-bone/80">{project.category} · {project.year}</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-light leading-[0.98] text-bone md:text-7xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* META + INTRO */}
      <section className="py-24 md:py-40">
        <div className="container-page grid gap-12 md:grid-cols-12 md:gap-16">
          <aside className="md:col-span-4 space-y-8">
            <Meta label="Lokacija" value={project.location} />
            <Meta label="Leto" value={project.year} />
            <Meta label="Kategorija" value={project.category} />
            <Meta label="Material" value={project.material} />
          </aside>
          <div className="md:col-span-8">
            <p className="font-display text-2xl leading-[1.3] text-foreground md:text-4xl">
              {project.intro}
            </p>
            <div className="mt-12 space-y-6 text-lg leading-relaxed text-foreground/80">
              {project.story.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="pb-24 md:pb-40">
        <div className="container-page space-y-6 md:space-y-10">
          {project.gallery.map((src, i) => (
            <figure
              key={i}
              className={
                i % 3 === 1
                  ? "mx-auto max-w-3xl"
                  : ""
              }
            >
              <img
                src={src}
                alt={`${project.title} — slika ${i + 1}`}
                width={1600}
                height={1200}
                loading="lazy"
                className="h-auto w-full"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* NEXT */}
      <section className="border-t border-border/60 py-16 md:py-24">
        <div className="container-page flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Naslednji projekt</p>
            <Link
              to="/projekti/$slug"
              params={{ slug: next.slug }}
              className="mt-4 block font-display text-3xl leading-tight hover:text-beige-deep md:text-5xl"
            >
              {next.title} →
            </Link>
          </div>
          <Link
            to="/projekti"
            className="text-sm uppercase tracking-[0.25em] border-b border-foreground pb-1"
          >
            Vsi projekti
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-border/60 pt-4">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-2 text-base text-foreground">{value}</p>
    </div>
  );
}
