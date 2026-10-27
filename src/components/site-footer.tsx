import { cn } from "@/lib/utils";
import { site } from "@/lib/site-content";

export function SiteFooter({ tone = "ink" }: { tone?: "ink" | "paper" }) {
  const dark = tone === "ink";
  return (
    <footer
      className={cn(
        "border-t",
        dark ? "border-hairline bg-ink text-muted" : "border-hairline-dark bg-paper text-muted",
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm">{site.name}</p>
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "text-sm",
            dark ? "text-fg" : "text-ink-fg",
          )}
        >
          Prendre rendez-vous
        </a>
      </div>
    </footer>
  );
}
