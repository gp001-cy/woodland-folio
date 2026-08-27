import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { FadeInSection } from "@/components/fade-in-section";
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
      <section className="pt-40 pb-8 md:pt-56 md:pb-12">
        <FadeInSection className="container-page grid gap-8 md:grid-cols-12">
          <div className="md:col-span-2">
            <p className="eyebrow">O nas</p>
          </div>
          <div className="md:col-span-10">
            <h1 className="h-display">
              Poslušamo,<br />svetujemo,<br />ustvarjamo.
            </h1>
          </div>
        </FadeInSection>
      </section>

      <section className="pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container-page grid gap-12 md:grid-cols-12 md:gap-16">
          <FadeInSection delay={120} className="md:col-span-12 md:pt-12">
            <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
              <p>
                Dobro pohištvo ni le kos opreme, temveč premišljeno oblikovan del prostora. Vsak projekt obravnavamo individualno, prisluhnemo željam stranke in skupaj poiščemo rešitev, ki združuje estetiko, funkcionalnost ter kakovost izdelave. Naš cilj ni izdelati čim več pohištva, pač pa izdelati kose, pod katere se z veseljem podpišemo. Od prve ideje do montaže želimo držati enak standard kakovosti in poskrbeti, da je celoten proces za stranko čim bolj prijeten in brezskrben.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      <FadeInSection as="section" className="relative h-[60vh] w-full overflow-hidden md:h-[80vh]">
        <img
          src={wide1}
          alt="Delavnica"
          width={1920}
          height={1080}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </FadeInSection>

      <section className="py-24 md:py-40">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <FadeInSection className="md:col-span-4">
            <p className="eyebrow">Načela</p>
          </FadeInSection>
          <div className="md:col-span-8 space-y-16">
            {[
              { n: "01", t: "Premišljeno oblikovanje prostora", d: "Pohištva ne obravnavamo kot izoliranega kosa, temveč kot ključen element, ki sooblikuje vaš bivalni ali delovni ambient. Ustvarjamo rešitve, ki prostor povežejo in mu dodajo vrednost." },
              { n: "02", t: "Osebni in individualni pristop", d: "Vsak projekt je zgodba zase. Vašim željam in potrebam pozorno prisluhnemo ter z vami sodelujemo kot partnerji, da skupaj poiščemo popolno rešitev po vaši meri." },
              { n: "03", t: "Zavezništvo estetike, funkcionalnosti in kakovosti", d: "Verjamemo, da lepota ne sme sklepati kompromisov pri uporabnosti. Naši izdelki so vizualno dovršeni, prijazni za uporabo in izdelani iz materialov, ki zagotavljajo dolgo življenjsko dobo." },
              { n: "04", t: "Kakovost pred kvantiteto", d: "Naš cilj ni serijska proizvodnja, temveč ustvarjanje unikatnih kosov. Izdelujemo le tisto pohištvo, pod katerega se z največjim ponosom in veseljem podpišemo." },
              { n: "05", t: "Brezskrbna izkušnja od A do Ž", d: "Prevzamemo odgovornost za celoten proces – od prve ideje in izrisa do končne montaže. Ohranjamo dosleden standard kakovosti na vsakem koraku in skrbimo, da je pot do vašega novega pohištva prijetna in popolnoma brez stresa." },
            ].map((p, i) => (
              <FadeInSection key={p.n} delay={i * 100} className="grid grid-cols-[auto_1fr] gap-6 border-t border-border/60 pt-8 md:grid-cols-[80px_1fr] md:gap-10">
                <span className="font-display text-2xl text-beige-deep">{p.n}</span>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl">{p.t}</h3>
                  <p className="mt-3 max-w-xl text-foreground/75">{p.d}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
