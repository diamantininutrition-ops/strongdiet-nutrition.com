import { createFileRoute } from "@tanstack/react-router";
import { BlockAxis } from "@/components/block-axis";
import { BlockBio } from "@/components/block-bio";
import { BlockBook } from "@/components/block-book";
import { BlockHero } from "@/components/block-hero";
import { BlockPillars } from "@/components/block-pillars";
import { BlockClose } from "@/components/block-close";
import { BlockContact } from "@/components/block-contact";
import { BlockMark } from "@/components/block-mark";
import { BlockStart } from "@/components/block-start";
import { BlockWhy } from "@/components/block-why";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const title = "Nutrition du sport | STRONGDIET";
const description =
  "La nutrition du sportif pensée pour le haut niveau. Analyse, individualisation et accompagnement. Valentin DIAMANTINI, Nutritionniste du sport.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://www.strongdiet-nutrition.com/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-dvh bg-ink text-fg">
      <SiteHeader />
      <main>
        <BlockHero />
        <BlockAxis />
        <BlockBook />
        <BlockBio />
        <BlockWhy />
        <BlockPillars />
        <BlockStart />
        <BlockContact />
        <BlockMark />
        <BlockClose />
      </main>
      <SiteFooter tone="paper" />
    </div>
  );
}
