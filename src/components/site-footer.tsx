import { Link } from "@tanstack/react-router";
import logo from "@/assets/setina-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-bone md:mt-40">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr] md:gap-8 md:py-24">
        <div className="min-w-0">
          <img
            src={logo.url}
            alt="Mizarstvo Šetina"
            width={72}
            height={48}
            className="h-12 w-auto"
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Ročno izdelano pohištvo po meri iz masivnega lesa. Slovenske
            delavnice, počasna obrt, kosi za več generacij.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-5">Navigacija</p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/ponudba" className="hover:text-foreground text-foreground/70">Ponudba</Link></li>
            
            <li><Link to="/o-nas" className="hover:text-foreground text-foreground/70">O nas</Link></li>
            <li><Link to="/kontakt" className="hover:text-foreground text-foreground/70">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">Delavnica</p>
          <address className="space-y-3 text-sm not-italic text-foreground/70">
            <p>Mizarstvo Šetina<br/>Obrtna cona 12<br/>4000 Kranj, Slovenija</p>
            <p><a href="mailto:info@setina.si" className="hover:text-foreground">info@setina.si</a></p>
            <p><a href="tel:+38641000000" className="hover:text-foreground">+386 41 000 000</a></p>
          </address>
        </div>
      </div>

      <div className="container-page flex flex-col items-start justify-between gap-2 border-t border-border/60 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Mizarstvo Šetina. Vse pravice pridržane.</p>
        <p className="tracking-widest uppercase">Ročno. Počasi. Za dolgo.</p>
      </div>
    </footer>
  );
}
