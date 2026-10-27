import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { site } from "@/lib/site-content";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: site.title },
      { name: "description", content: site.description },
      { name: "theme-color", content: "#0A0A0A" },
      { property: "og:title", content: "Nutrition du sport | STRONGDIET" },
      { name: "twitter:title", content: "Nutrition du sport | STRONGDIET" },
      {
        property: "og:description",
        content:
          "La nutrition du sportif pensée pour le haut niveau. Analyse, individualisation et accompagnement. Valentin DIAMANTINI, Nutritionniste du sport.",
      },
      {
        name: "twitter:description",
        content:
          "La nutrition du sportif pensée pour le haut niveau. Analyse, individualisation et accompagnement. Valentin DIAMANTINI, Nutritionniste du sport.",
      },
      { property: "og:url", content: "https://www.strongdiet-nutrition.com/" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:site_name", content: "STRONGDIET" },
      { property: "og:image", content: "https://www.strongdiet-nutrition.com/og.jpg" },
      { name: "twitter:image", content: "https://www.strongdiet-nutrition.com/og.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="fr" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
