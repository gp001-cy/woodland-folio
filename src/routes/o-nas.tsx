import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import portrait from "@/assets/about-portrait.jpg";
import wide1 from "@/assets/wide-1.jpg";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nas — Mizarstvo Šetina" },
      { name: "description", content: "Družinska mizarska delavnica z več kot 25 leti izkušenj z ročno obdelavo masivnega lesa." },
      { property: "og:title", content: "O nas — Mizarstvo Šetina" },
      { property: "og:description", content: "Družinska mizarska delavnica z več kot 25 leti izkušenj." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-16 md:pt-56 md:pb-24">
        <div className="container-page grid gap-8 md:grid-cols-12">
          <div className="md:col-span-2">
            <p className="eyebrow">O nas</p>
          </div>
          <div className="md:col-span-10">
            <h1 className="h-display">
              Družina,<br />delavnica,<br />les.
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <img
              src={portrait}
              alt="Marko Šetina"
              width={1200}
              height={1500}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
              Marko Šetina — ustanovitelj
            </p>
          </div>
          <div className="md:col-span-7 md:pt-12">
            <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
              <p>
                Mizarstvo Šetina je nastalo leta 1998 v skromni delavnici na
                obrobju Kranja. Marko Šetina se je obrti izučil pri očetu, ta
                pri svojem — tretja generacija, ki ve, kako v les vstopiti brez
                sile.
              </p>
              <p>
                Danes nas je sedem: dva mojstra, štirje mizarji in oblikovalka.
                Delamo v prenovljeni sušilnici, kjer se les počiva leta, preden
                dobi svojo obliko. Ne hitimo. Nikoli.
              </p>
              <p>
                Sodelujemo z arhitekti, oblikovalci in naročniki, ki verjamejo
                v isto: da je predmet, ki ga naredi človek, bolj vreden od
                predmeta, ki ga naredi stroj.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[60vh] w-full overflow-hidden md:h-[80vh]">
        <img
          src={wide1}
          alt="Delavnica"
          width={1920}
          height={1080}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </section>

      <section className="py-24 md:py-40">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Načela</p>
          </div>
          <div className="md:col-span-8 space-y-16">
            {[
              { n: "01", t: "Slovenski les", d: "Uporabljamo predvsem hrast, oreh, češnjo in javor iz slovenskih gozdov. Vsak kos poznamo po izvoru." },
              { n: "02", t: "Tradicionalne vezi", d: "Rojenice, lastovičji rep, čep in luknja — spojine, ki so preživele stoletja, so preživele preizkus." },
              { n: "03", t: "Naravni finiši", d: "Olja in voski na rastlinski osnovi. Brez sintetičnih lakov, brez toksinov v vašem domu." },
              { n: "04", t: "Odgovorno", d: "Za vsako drevo, ki ga porabimo, posadimo tri. To ni marketing — to je pogoj, da lahko sploh delamo naprej." },
            ].map((p) => (
              <div key={p.n} className="grid grid-cols-[auto_1fr] gap-6 border-t border-border/60 pt-8 md:grid-cols-[80px_1fr] md:gap-10">
                <span className="font-display text-2xl text-beige-deep">{p.n}</span>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl">{p.t}</h3>
                  <p className="mt-3 max-w-xl text-foreground/75">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
