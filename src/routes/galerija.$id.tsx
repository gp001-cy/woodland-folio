import { useEffect, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { X } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
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

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openIndex]);

  const active = openIndex === null ? null : category.gallery[openIndex];

  return (
    <SiteLayout>
      <section className="pt-40 pb-12 md:pt-56 md:pb-16">
        <div className="container-page">
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
        </div>
      </section>


      <section className="pb-24 md:pb-40">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            {category.gallery.map((img, i) => (
              <button
                key={`${img.src}-${i}`}
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
            ))}
          </div>

          <div className="mt-20 text-center md:mt-32">
            <Link
              to="/ponudba"
              className="inline-flex items-center gap-3 border border-foreground px-8 py-4 text-sm uppercase tracking-[0.25em] transition-colors hover:bg-foreground hover:text-background"
            >
              Nazaj na ponudbo
            </Link>
          </div>
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-[80] bg-ink/95"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            className="absolute top-6 right-6 z-20 flex cursor-pointer items-center gap-2 border border-bone/40 bg-ink/60 px-5 py-3 text-xs uppercase tracking-[0.25em] text-bone transition-colors hover:bg-bone hover:text-ink"
          >
            <X className="h-4 w-4" />
            Zapri
          </button>

          <TransformWrapper
            key={openIndex}
            initialScale={1}
            minScale={1}
            maxScale={5}
            doubleClick={{ mode: "toggle", step: 1.6 }}
            wheel={{ step: 0.12 }}
            pinch={{ step: 5 }}
            centerOnInit
          >
            <TransformComponent
              wrapperClass="!h-full !w-full"
              contentClass="!h-full !w-full !flex !items-center !justify-center"
            >
              <img
                src={active.src}
                alt={active.alt}
                draggable={false}
                className="max-h-[88vh] w-auto max-w-[92vw] object-contain select-none"
              />
            </TransformComponent>
          </TransformWrapper>

          <p className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.25em] text-bone/60">
            Dvojni klik ali ščipanje za povečavo
          </p>
        </div>
      )}

    </SiteLayout>
  );
}
