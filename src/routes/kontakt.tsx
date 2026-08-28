import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { FadeInSection } from "@/components/fade-in-section";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Mizarstvo Šetina" },
      { name: "description", content: "Kontaktirajte Mizarstvo Šetina za pohištvo po meri." },
      { property: "og:title", content: "Kontakt — Mizarstvo Šetina" },
      { property: "og:description", content: "Pišite nam. Odgovorimo v 48 urah." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-16 md:pt-56 md:pb-24">
        <FadeInSection className="container-page grid gap-8 md:grid-cols-12">
          <div className="md:col-span-2">
            <p className="eyebrow">Kontakt</p>
          </div>
          <div className="md:col-span-10">
            <h1 className="h-display">Začnimo<br />vaš<br />projekt.</h1>
          </div>
        </FadeInSection>
      </section>

      <section className="pb-24 md:pb-40">
        <div className="container-page grid gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5 space-y-12">
            <FadeInSection>
              <p className="eyebrow mb-4">KONTAKTIRAJTE NAS</p>
              <p className="font-display text-2xl text-foreground mb-4">
                Matej Šetina
              </p>
              <a
                href="mailto:info@mizarstvosetina.si"
                className="group flex items-center gap-3 font-display text-2xl text-foreground/80 underline decoration-dotted underline-offset-4 hover:text-beige-deep"
              >
                <Mail className="h-5 w-5 stroke-1" />
                info@mizarstvosetina.si
              </a>
              <a
                href="tel:031433903"
                className="group mt-3 flex items-center gap-3 font-display text-2xl text-foreground/80 underline decoration-dotted underline-offset-4 hover:text-beige-deep"
              >
                <Phone className="h-5 w-5 stroke-1" />
                031 433 903
              </a>
            </FadeInSection>
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}
