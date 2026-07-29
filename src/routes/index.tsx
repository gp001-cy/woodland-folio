import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";
import hero4 from "@/assets/hero-4-kitchen.jpg";
import hero5 from "@/assets/hero-5-hands.jpg";
import wide2 from "@/assets/wide-2.jpg";
import wide1 from "@/assets/wide-1.jpg";
import project4 from "@/assets/project-4.jpg";
import { projects } from "@/data/projects";

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
    text: "Šetina ne dela pohištva — dela dediščino. Miza, ki smo jo naročili pri njih, bo v družini ostala dlje kot mi sami.",
    author: "Ana K.",
    place: "Ljubljana",
  },
  {
    text: "Popolna natančnost, brez kompromisov. Vsak detajl je premišljen, vsaka spojina brezhibna.",
    author: "arh. Matej P.",
    place: "Studio MP",
  },
  {
    text: "Vzeli so si čas. Poslušali. In naredili točno to, kar smo si predstavljali — samo lepše.",
    author: "Nina in Rok",
    place: "Bled",
  },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO — glavna slika */}
      <section className="relative pt-16 md:pt-20">
        <img
          src="/IMG_9636.jpeg"
          alt="Mizarstvo Šetina"
          loading="eager"
          className="w-full h-auto"
        />
      </section>


      {/* PHILOSOPHY / STORY */}
      <section className="bg-background py-24 md:py-40">
        <Reveal className="container-page grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="eyebrow">Filozofija</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="h-section max-w-3xl text-foreground">
              Delamo počasi, ker les si tega zasluži.
            </h2>
            <div className="mt-10 grid gap-8 text-base leading-relaxed text-foreground/80 md:grid-cols-2 md:text-lg">
              <p>
                Vsak kos v naši delavnici začne kot deblo — pogosto iz gozdov,
                ki jih poznamo po imenu. Sušimo ga leta, preden ga narežemo.
                Rezemo ga tako, da spoštujemo smer vlaken. Sestavimo ga s
                spojinami, ki so starejše od strojev.
              </p>
              <p>
                Rezultat ni pohištvo v katalogu. Je predmet, ki bo v vašem
                prostoru čez pet, deset, petdeset let — in bo takrat lepši kot
                danes. To je edini razlog, zakaj to delo počnemo.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Full-width image break */}
      <Reveal as="section" className="relative h-[60vh] w-full overflow-hidden md:h-[85vh]">
        <img
          src={wide1}
          alt="Delavnica Šetina"
          width={1920}
          height={1080}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </Reveal>

      {/* SELECTED PROJECTS TEASE */}
      <section className="bg-background py-24 md:py-40">
        <div className="container-page">
          <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="eyebrow">Izbrani projekti</p>
              <h2 className="h-section mt-4 max-w-2xl">Nedavno delo</h2>
            </div>
            <Link
              to="/projekti"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground border-b border-foreground/40 pb-1 w-fit"
            >
              Vsi projekti →
            </Link>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
              <Link
                to="/projekti/$slug"
                params={{ slug: p.slug }}
                className="group block"
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
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl leading-tight">{p.title}</h3>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground shrink-0">{p.year}</span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-widest text-beige-deep">{p.category}</p>
              </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-bone py-24 md:py-40">
        <div className="container-page">
          <p className="eyebrow">Naročniki</p>
          <h2 className="h-section mt-4 max-w-3xl">Besede tistih, ki živijo z našim delom.</h2>

          <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-12">
            {REVIEWS.map((r, i) => (
              <Reveal as="figure" key={i} delay={i * 120} className="flex flex-col">
                <blockquote className="font-display text-xl leading-[1.35] text-foreground md:text-2xl">
                  <span aria-hidden className="text-beige-deep">“</span>
                  {r.text}
                  <span aria-hidden className="text-beige-deep">”</span>
                </blockquote>
                <figcaption className="mt-8 border-t border-border/60 pt-4 text-sm">
                  <span className="text-foreground">{r.author}</span>
                  <span className="text-muted-foreground"> · {r.place}</span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BIG IMAGE */}
      <Reveal as="section" className="relative h-[70vh] w-full overflow-hidden md:h-[95vh]">
        <img
          src={project4}
          alt="Živi rob orehove mize"
          width={1920}
          height={1200}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </Reveal>

      {/* CLOSING QUOTE */}
      <section className="bg-background py-32 md:py-56">
        <Reveal className="container-page">
          <blockquote className="mx-auto max-w-5xl text-center">
            <p className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-7xl">
              <span className="text-beige-deep">„</span>Les si zapomni vse —
              roko, ki ga je obdelala, in dom, v katerega je odšel.<span className="text-beige-deep">”</span>
            </p>
            <footer className="mt-10 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              — Marko Šetina, mojster mizar
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
        </Reveal>
      </section>
    </SiteLayout>
  );
}
