import { useRouterState } from "@tanstack/react-router";

function scrollTo(id: string) {
  if (window.location.pathname !== "/") {
    window.location.assign(`/#${id}`);
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Brand() {
  return (
    <>
      <img src="/logo-header.png" alt="" className="h-8 w-auto shrink-0 sm:h-11" />
      <span className="font-display text-[0.62rem] font-semibold leading-tight tracking-tight sm:text-sm md:text-base">
        STRONGDIET - Nutrition du sportif
      </span>
    </>
  );
}

export function SiteHeader() {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });
  const onHome = pathname === "/";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white text-ink">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-3 sm:h-[4.5rem] sm:gap-4 sm:px-8">
        {onHome ? (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex min-w-0 items-center gap-2 text-left sm:gap-3"
          >
            <Brand />
          </button>
        ) : (
          <a href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
            <Brand />
          </a>
        )}
        <nav className="ml-auto flex shrink-0 items-center gap-2 sm:gap-5">
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="text-xs font-medium text-ink sm:text-base"
          >
            Contact
          </button>
          <button
            type="button"
            onClick={() => scrollTo("produits")}
            className="inline-flex h-9 items-center rounded-full bg-gold px-2.5 text-[0.65rem] font-semibold text-ink sm:h-11 sm:px-5 sm:text-sm"
          >
            Prendre rendez-vous
          </button>
        </nav>
      </div>
    </header>
  );
}
