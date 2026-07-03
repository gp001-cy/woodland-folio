import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Mizarstvo Šetina" },
      { name: "description", content: "Kontaktirajte Mizarstvo Šetina za pohištvo po meri. Delavnica v Kranju, Slovenija." },
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
        <div className="container-page grid gap-8 md:grid-cols-12">
          <div className="md:col-span-2">
            <p className="eyebrow">Kontakt</p>
          </div>
          <div className="md:col-span-10">
            <h1 className="h-display">Povejte<br />nam o<br />projektu.</h1>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-40">
        <div className="container-page grid gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5 space-y-12">
            <div>
              <p className="eyebrow mb-4">Delavnica</p>
              <address className="not-italic text-lg leading-relaxed">
                Mizarstvo Šetina<br />
                Obrtna cona 12<br />
                4000 Kranj, Slovenija
              </address>
            </div>
            <div>
              <p className="eyebrow mb-4">Pišite</p>
              <a href="mailto:info@setina.si" className="block font-display text-2xl hover:text-beige-deep">
                info@setina.si
              </a>
              <a href="tel:+38641000000" className="mt-2 block font-display text-2xl hover:text-beige-deep">
                +386 41 000 000
              </a>
            </div>
            <div>
              <p className="eyebrow mb-4">Odpiralni čas</p>
              <p className="text-foreground/80">Po dogovoru<br />Pon — Pet · 8:00 — 16:00</p>
            </div>
          </div>

          <form
            className="md:col-span-7 space-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Hvala! Vaše sporočilo je bilo poslano.");
            }}
          >
            <div className="grid gap-8 md:grid-cols-2">
              <Field label="Ime in priimek" name="name" required />
              <Field label="E-pošta" name="email" type="email" required />
            </div>
            <Field label="Telefon" name="phone" />
            <Field label="Tip projekta" name="project" placeholder="npr. kuhinja, miza, vgradna omara" />
            <div>
              <label className="eyebrow block" htmlFor="msg">Sporočilo</label>
              <textarea
                id="msg"
                name="message"
                rows={5}
                className="mt-3 w-full resize-none border-b border-border bg-transparent py-3 text-lg focus:border-foreground focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-3 border border-foreground px-8 py-4 text-sm uppercase tracking-[0.25em] transition-colors hover:bg-foreground hover:text-background"
            >
              Pošlji sporočilo
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-3 w-full border-b border-border bg-transparent py-3 text-lg placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
      />
    </div>
  );
}
