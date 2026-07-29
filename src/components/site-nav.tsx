import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/setina-antler.png.asset.json";

const NAV = [
  { to: "/", label: "Domov" },
  { to: "/ponudba", label: "Ponudba" },
  { to: "/projekti", label: "Projekti" },
  { to: "/o-nas", label: "O nas" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/60">
        <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 md:py-5">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex min-w-0 items-center gap-3"
          >
            <img
              src={logo.url}
              alt="Mizarstvo Šetina"
              width={44}
              height={30}
              className="h-8 w-auto shrink-0 md:h-10"
            />
            <span className="hidden truncate font-display text-lg tracking-tight sm:inline">
              Mizarstvo Šetina
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm tracking-wide text-foreground/70 transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Meni"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-[70] flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-px w-6 bg-foreground transition-transform ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-foreground transition-transform ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-[60] h-[100svh] w-screen bg-beige transition-opacity duration-500 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Zapri meni"
          onClick={() => setOpen(false)}
          className="absolute right-6 top-6 z-10 text-3xl leading-none text-ink/70"
        >
          ×
        </button>
        <nav className="flex h-full w-full flex-col items-center justify-center gap-7 px-6 text-center">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="font-display text-4xl tracking-tight text-ink/90 transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

