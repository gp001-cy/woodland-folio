import { createRootRouteWithContext, HeadContent, Outlet, Scripts, useRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { PageTransition } from "@/components/page-transition";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="h-section mt-4">Stran ne obstaja</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Iskana stran je bila premaknjena ali ne obstaja več.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center border-b border-foreground pb-1 text-sm tracking-wide hover:text-beige-deep"
        >
          Nazaj na domov
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="h-section">Stran se ni naložila</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Prišlo je do napake. Poskusite znova ali se vrnite na domov.
        </p>
        <div className="mt-8 flex justify-center gap-6 text-sm">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="border-b border-foreground pb-1 hover:text-beige-deep"
          >
            Poskusi znova
          </button>
          <a href="/" className="border-b border-foreground pb-1 hover:text-beige-deep">Domov</a>
        </div>
      </div>
    </div>
  );
}

import ogImageAsset from "../assets/onlynatler-2.png.asset.json";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mizarstvo Šetina" },
      { name: "description", content: "Mizarstvo Šetina izdeluje pohištvo po meri iz kvalitetnih materialov. Prilagajamo se vašim željam, meri prostora, skrbimo za funkcionalnost in udobje." },
      { property: "og:title", content: "Mizarstvo Šetina" },
      { property: "og:description", content: "Mizarstvo Šetina izdeluje pohištvo po meri iz kvalitetnih materialov. Prilagajamo se vašim željam, meri prostora, skrbimo za funkcionalnost in udobje." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mizarstvo Šetina" },
      { name: "twitter:description", content: "Mizarstvo Šetina izdeluje pohištvo po meri iz kvalitetnih materialov. Prilagajamo se vašim željam, meri prostora, skrbimo za funkcionalnost in udobje." },
      { property: "og:image", content: ogImageAsset.url },
      { name: "twitter:image", content: ogImageAsset.url },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="sl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <PageTransition>
        <Outlet />
      </PageTransition>
    </QueryClientProvider>
  );
}
