import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/confidentialite")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-dvh bg-paper text-ink-fg">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-5 pb-24 pt-28 sm:px-8 sm:pt-32">
        <p className="font-display text-xs font-medium uppercase tracking-[0.16em] text-muted">
          Strong Diet
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Politique de confidentialité
        </h1>
        <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed">
          <p>
            Valentin Diamantini, diététicien-nutritionniste, est responsable du
            traitement des données envoyées via le formulaire de contact de Strong Diet.
          </p>
          <p>
            Les informations demandées — prénom et nom, email, téléphone s’il est
            renseigné, objet et message — servent uniquement à te recontacter au sujet
            de ta demande.
          </p>
          <p>
            Elles ne sont pas vendues ni cédées à des tiers. Elles sont transmises par
            un service d’envoi de formulaire (Web3Forms) afin que le message arrive
            dans la messagerie de Strong Diet.
          </p>
          <p>
            Tu peux demander l’accès, la rectification ou la suppression de tes
            données en écrivant à{" "}
            <a className="text-forest underline underline-offset-4" href="mailto:diamantini.nutrition@gmail.com">
              diamantini.nutrition@gmail.com
            </a>
            .
          </p>
        </div>
        <p className="mt-10">
          <Link to="/" className="text-sm font-semibold text-forest underline-offset-4 hover:underline">
            Retour au site
          </Link>
        </p>
      </main>
      <SiteFooter tone="paper" />
    </div>
  );
}
