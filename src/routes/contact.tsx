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
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Strong Diet — message de ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:contact@strongdiet.fr?subject=${subject}&body=${body}`;
    setSent(true);
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

        {sent ? (
          <p className="mt-12 border-t border-hairline-dark pt-8 text-base text-ink-fg">
            Votre messagerie s’ouvre. Si rien ne se passe, écrivez à{" "}
            <a
              className="text-forest underline-offset-4 hover:underline"
              href="mailto:contact@strongdiet.fr"
            >
              contact@strongdiet.fr
            </a>
            .
          </p>
        ) : (
          <form className="mt-12 space-y-6" onSubmit={onSubmit}>
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
            <Button type="submit" variant="forest" size="lg">
              Envoyer
            </Button>
          </form>
        )}
      </main>
      <SiteFooter tone="paper" />
    </div>
  );
}
