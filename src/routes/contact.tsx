import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name) {
      setStatus("error");
      setError("Indique ton nom.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError("Indique une adresse email valide.");
      return;
    }
    if (!message) {
      setStatus("error");
      setError("Écris ton message.");
      return;
    }

    data.set("name", name);
    data.set("email", email);
    data.set("message", message);
    data.delete("newsletter");
    data.set(
      "newsletter",
      (form.elements.namedItem("newsletter") as HTMLInputElement | null)?.checked ? "Oui" : "Non",
    );
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = (await res.json()) as { success?: boolean };
      if (!res.ok || json.success === false) {
        setStatus("error");
        setError("L’envoi n’a pas abouti. Réessaie dans un instant.");
        return;
      }
      setStatus("sent");
    } catch {
      setStatus("error");
      setError("L’envoi n’a pas abouti. Vérifie ta connexion et réessaie.");
    }
  }

  return (
    <div className="min-h-dvh bg-paper text-ink-fg">
      <SiteHeader />
      <main className="mx-auto max-w-xl px-5 pb-24 pt-28 sm:px-8 sm:pt-32">
        <p className="font-display text-xs font-medium uppercase tracking-wide text-muted">
          Contact
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink-fg sm:text-5xl">
          Parlons de votre saison.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted">
          Un échange, sans formulaire interminable. Dites qui vous êtes et ce
          que vous visez.
        </p>

        {status === "sent" ? (
          <p className="mt-12 border-t border-hairline-dark pt-8 text-base text-ink-fg" role="status">
            Merci, je te réponds sous 48h.
          </p>
        ) : (
          <form className="mt-12 space-y-6" noValidate onSubmit={onSubmit}>
            <input type="hidden" name="access_key" value="9f9e8e62-43be-456b-9b5e-5e0c6242c9c3" />
            <input type="hidden" name="subject" value="Contact général - StrongDiet" />
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <div className="space-y-2">
              <Label htmlFor="name">Nom</Label>
              <Input id="name" name="name" required autoComplete="name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required />
            </div>
            <label className="flex items-start gap-3 text-sm leading-snug text-ink-fg">
              <input
                type="checkbox"
                name="newsletter"
                value="Oui"
                className="mt-0.5 size-4 shrink-0 accent-forest"
              />
              <span>
                Je souhaite recevoir la newsletter StrongDiet (conseils nutrition du sport,
                actualités et contenus exclusifs). Désinscription possible à tout moment.
              </span>
            </label>
            {error ? (
              <p className="text-sm font-semibold text-cendre" role="alert">
                {error}
              </p>
            ) : null}
            <Button type="submit" variant="forest" size="lg" disabled={status === "sending"}>
              {status === "sending" ? "Envoi…" : "Envoyer"}
            </Button>
          </form>
        )}
      </main>
      <SiteFooter tone="paper" />
    </div>
  );
}
