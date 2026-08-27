import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { FadeInSection } from "@/components/fade-in-section";
import { Lightbox } from "@/components/lightbox";
import { getCategory } from "@/data/categories";


export const Route = createFileRoute("/galerija/$id")({
  loader: ({ params }) => {
    const category = getCategory(params.id);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Galerija ni na voljo — Mizarstvo Šetina" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { title, description } = loaderData.category;
    return {
      meta: [
        { title: `${title} — Mizarstvo Šetina` },
        { name: "description", content: description.slice(0, 155) },
        { property: "og:title", content: `${title} — Mizarstvo Šetina` },
        { property: "og:description", content: description.slice(0, 155) },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CategoryGallery,
});

function CategoryGallery() {
  const { category } = Route.useLoaderData();
  const [openIndex, setOpenIndex] = useState<number | null>(null);


  const active = openIndex === null ? null : category.gallery[openIndex];

  return (
    <SiteLayout>
      <section className="pt-40 pb-12 md:pt-56 md:pb-16">
        <FadeInSection className="container-page">
          <div className="flex w-full items-center justify-between">
            <p className="eyebrow">Ponudba / {category.title}</p>
            <Link
              to="/ponudba"
              aria-label="Nazaj na ponudbo"
              className="group inline-flex items-center text-foreground transition-opacity hover:opacity-60"
            >
              <ArrowLeft className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>
          </div>

          <div className="mt-8 grid gap-8 md:mt-12 md:grid-cols-12">
            <div className="md:col-span-12">
              <h1 className="h-display">{category.title}</h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {category.description}
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>


      <section className="pb-24 md:pb-40">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            {category.gallery.map((img, i) => (
              <FadeInSection key={`${img.src}-${i}`} delay={(i % 3) * 120}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group aspect-square cursor-pointer overflow-hidden bg-muted"
                aria-label={`Odpri sliko: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                />
              </button>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection className="mt-20 text-center md:mt-32">
            <Link
              to="/ponudba"
              className="inline-flex items-center gap-3 border border-foreground px-8 py-4 text-sm uppercase tracking-[0.25em] transition-colors hover:bg-foreground hover:text-background"
            >
              Nazaj na ponudbo
            </Link>
          </FadeInSection>
        </div>
      </section>

      {active && (
        <Lightbox
          src={active.src}
          alt={active.alt}
          open
          onClose={() => setOpenIndex(null)}
          onPrev={() =>
            setOpenIndex((i) =>
              i === null
                ? null
                : (i - 1 + category.gallery.length) % category.gallery.length,
            )
          }
          onNext={() =>
            setOpenIndex((i) =>
              i === null ? null : (i + 1) % category.gallery.length,
            )
          }
        />
      )}


    </SiteLayout>
  );
}
