import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { FadeInSection } from "@/components/fade-in-section";
import { ImageGallery } from "@/components/image-gallery";
import { MobileReveal } from "@/components/mobile-reveal";


import wide1 from "@/assets/wide-1.jpg";
import mobileBigImageAsset from "@/assets/IMG_3813.jpeg.asset.json";
import desktopBigImageAsset from "@/assets/IMG_9642-2.jpeg.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mizarstvo Šetina — Ročno izdelano pohištvo po meri" },
      { name: "description", content: "Slovenska mizarska delavnica: kuhinje, stopnice, mize in notranja oprema iz masivnega lesa." },
    ],
  }),
  component: Home,
});



const REVIEWS = [
  {
    text: "Odlično svetovanje in izvedba brez kompliciranja. Rezultat je točno to, kar smo iskali.",
    author: "Ana K.",
    place: "Ljubljana - Bežigrad",
  },
  {
    text: "Znali so prisluhniti našim željam in predlagali pametne izboljšave, na katere sami nismo pomislili.",
    author: "Leon B.",
    place: "Ljubljana - Šiška",
  },
  {
    text: "Vzeli so si čas. Poslušali. In naredili točno to, kar smo si predstavljali.",
    author: "Matjaž S.",
    place: "Kamnik",
  },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO — galerija */}
      <section className="relative pt-16 md:pt-20">
        <ImageGallery />
      </section>



      {/* PHILOSOPHY / STORY */}
      <MobileReveal as="section" className="bg-background py-24 md:py-40">
        <div className="container-page grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="eyebrow">Filozofija</p>
            <h2 className="h-section mt-4 max-w-sm">Poslušamo, svetujemo, ustvarjamo</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-base leading-relaxed text-foreground/80 md:text-lg max-w-3xl">
              Dobro pohištvo ni le kos opreme, temveč premišljeno oblikovan del prostora. Vsak projekt obravnavamo individualno, prisluhnemo željam stranke in skupaj poiščemo rešitev, ki združuje estetiko, funkcionalnost ter kakovost izdelave. Naš cilj ni izdelati čim več pohištva, pač pa izdelati kose, pod katere se z veseljem podpišemo. Od prve ideje do montaže želimo držati enak standard kakovosti in poskrbeti, da je celoten proces za stranko čim bolj prijeten in brezskrben.
            </p>
          </div>
        </div>
      </MobileReveal>


      {/* Full-width image break */}
      <FadeInSection as="section" className="relative h-[60vh] w-full overflow-hidden md:h-[85vh]">
        <img
          src={wide1}
          alt="Delavnica Šetina"
          width={1920}
          height={1080}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </FadeInSection>


      {/* REVIEWS */}
      <section className="bg-bone py-24 md:py-40">
        <div className="container-page">
          <FadeInSection>
            <p className="eyebrow">Stranke</p>
            <h2 className="h-section mt-4 max-w-3xl">Besede naših strank</h2>
          </FadeInSection>

          <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-12">
            {REVIEWS.map((r, i) => (
              <FadeInSection as="figure" key={i} delay={i * 120} className="flex flex-col">
                <blockquote className="font-display text-xl leading-[1.35] text-foreground md:text-2xl">
                  <span aria-hidden className="text-beige-deep">“</span>
                  {r.text}
                  <span aria-hidden className="text-beige-deep">”</span>
                </blockquote>
                <figcaption className="mt-8 border-t border-border/60 pt-4 text-sm">
                  <span className="text-foreground">{r.author}</span>
                  <span className="text-muted-foreground"> · {r.place}</span>
                </figcaption>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* BIG IMAGE */}
      <FadeInSection as="section" className="relative h-[70vh] w-full overflow-hidden md:h-[95vh]">
        <img
          src={mobileBigImageAsset.url}
          alt="Vgradna garderoba po meri"
          width={1920}
          height={1200}
          loading="lazy"
          className="h-full w-full object-cover md:hidden"
        />
        <img
          src={desktopBigImageAsset.url}
          alt="Pisalna miza in omare po meri"
          width={1920}
          height={1200}
          loading="lazy"
          className="hidden h-full w-full object-cover md:block"
        />
      </FadeInSection>

      {/* CLOSING QUOTE */}
      <section className="bg-background py-32 md:py-40">
        <FadeInSection className="container-page">
          <blockquote className="mx-auto max-w-5xl text-center">
            <p className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-7xl">
              <span className="text-beige-deep">„</span>Les si zapomni vse —
              roko, ki ga je obdelala, in dom, v katerega je odšel.<span className="text-beige-deep">”</span>
            </p>
            <footer className="mt-10 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              — Matej Šetina
            </footer>
          </blockquote>

          <div className="mt-24 flex justify-center">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-3 border border-foreground px-8 py-4 text-sm uppercase tracking-[0.25em] transition-colors hover:bg-foreground hover:text-background"
            >
              Začnimo projekt
            </Link>
          </div>
        </FadeInSection>
      </section>
    </SiteLayout>
  );
}
