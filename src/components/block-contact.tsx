import { useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

const OBJECTS = [
  "Prise de rendez-vous",
  "Préparation compétition",
  "Prise de masse / sèche",
  "Partenariat",
  "Autre",
] as const;

function FieldIcon({ children }: { children: ReactNode }) {
  return (
    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-mustard">
      {children}
    </span>
  );
}

const control =
  "w-full rounded-lg border border-white/25 bg-ink px-3 py-3 pl-11 text-base text-fg outline-none placeholder:text-white/40 focus-visible:border-mustard";

export function BlockContact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const objet = String(data.get("objet") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const consent = (form.elements.namedItem("consent") as HTMLInputElement | null)?.checked;

    if (!name) {
      setStatus("error");
      setError("Indique ton prénom et ton nom.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError("Indique une adresse email valide.");
      return;
    }
    if (!objet) {
      setStatus("error");
      setError("Choisis un objet.");
      return;
    }
    if (!message) {
      setStatus("error");
      setError("Écris ton message.");
      return;
    }
    if (!consent) {
      setStatus("error");
      setError("Coche la case pour accepter l’utilisation de tes données.");
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
    <section id="contact" data-block="8" className="relative scroll-mt-20 overflow-hidden bg-ink px-5 pb-20 pt-16 text-fg sm:px-8 sm:pb-28 sm:pt-20">
      <div className="relative mx-auto max-w-3xl">
        <h2 className="text-center font-display text-4xl font-bold uppercase leading-none tracking-[0.04em] sm:text-6xl lg:whitespace-nowrap lg:text-[clamp(2rem,3.6vw,3.75rem)]">
          Formulaire de contact
        </h2>
        <p
          className="mt-4 whitespace-nowrap text-center text-[clamp(0.68rem,3.35vw,1.05rem)] font-light sm:whitespace-normal sm:text-2xl lg:text-center"
          style={{ fontFamily: '"Calibri Light", Calibri, sans-serif' }}
        >
          Prends contact avec moi pour aller plus loin.
        </p>
        <div className="mx-auto mt-5 h-px w-40 bg-mustard" aria-hidden="true" />

        <div className="mt-8 rounded-2xl border border-white/20 bg-black/50 p-5 sm:p-8">
          {status === "sent" ? (
            <p className="py-10 text-center font-display text-2xl font-semibold" role="status">
              Merci, je te réponds sous 48h.
            </p>
          ) : (
            <form className="flex flex-col gap-6" noValidate onSubmit={onSubmit}>
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

              <label className="block">
                <span className="font-display text-xs font-semibold uppercase tracking-[0.14em]">
                  Prénom & nom <span className="text-mustard">*</span>
                </span>
                <span className="relative mt-2 block">
                  <FieldIcon>
                    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                      <circle cx="12" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
                      <path d="M5.5 19.2c.8-3.2 3.2-4.8 6.5-4.8s5.7 1.6 6.5 4.8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                    </svg>
                  </FieldIcon>
                  <input name="name" autoComplete="name" placeholder="Votre prénom et nom" className={control} />
                </span>
              </label>

              <label className="block">
                <span className="font-display text-xs font-semibold uppercase tracking-[0.14em]">
                  Email <span className="text-mustard">*</span>
                </span>
                <span className="relative mt-2 block">
                  <FieldIcon>
                    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
                      <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.7" />
                    </svg>
                  </FieldIcon>
                  <input name="email" type="email" autoComplete="email" placeholder="Votre adresse email (ex: nom@exemple.fr)" className={control} />
                </span>
              </label>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="font-display text-xs font-semibold uppercase tracking-[0.14em]">Téléphone</span>
                  <span className="relative mt-2 block">
                    <FieldIcon>
                      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                        <path d="M8 4.5h2.2l1.1 3.2-1.6 1a12 12 0 0 0 5.6 5.6l1-1.6 3.2 1.1V16a2 2 0 0 1-2.2 2A14.5 14.5 0 0 1 6 6.7 2 2 0 0 1 8 4.5Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                      </svg>
                    </FieldIcon>
                    <input name="phone" type="tel" autoComplete="tel" placeholder="Votre numéro de téléphone (facultatif)" className={control} />
                  </span>
                </label>

                <label className="block">
                  <span className="font-display text-xs font-semibold uppercase tracking-[0.14em]">
                    Objet <span className="text-mustard">*</span>
                  </span>
                  <span className="relative mt-2 block">
                    <FieldIcon>
                      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                        <path d="M6 7.5h12v8.2H9.2L6 18.2V7.5Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                      </svg>
                    </FieldIcon>
                    <select name="objet" defaultValue="" className={`${control} appearance-none pr-10`}>
                      <option value="" disabled>
                        Sélectionnez un objet
                      </option>
                      {OBJECTS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-mustard" aria-hidden="true">
                      <svg viewBox="0 0 24 24" className="size-4">
                        <path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                  </span>
                </label>
              </div>

              <label className="block">
                <span className="font-display text-xs font-semibold uppercase tracking-[0.14em]">
                  Message <span className="text-mustard">*</span>
                </span>
                <span className="relative mt-2 block">
                  <span className="pointer-events-none absolute left-3.5 top-3.5 text-mustard">
                    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                      <path d="M5 19.5 8.2 16H19a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 19 4H5.5A1.5 1.5 0 0 0 4 5.5v12.2Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
                      <path d="M8 9h8M8 12.5h5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                    </svg>
                  </span>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Votre message... (détails, objectifs, questions...)"
                    className={`${control} min-h-36 resize-y py-3`}
                  />
                </span>
              </label>

              <div>
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="consent"
                    value="oui"
                    className="mt-0.5 size-5 shrink-0 accent-mustard"
                  />
                  <span className="text-sm font-semibold leading-snug sm:text-base">
                    J'accepte que mes données soient utilisées pour être recontacté(e){" "}
                    <span className="text-mustard">*</span>
                  </span>
                </label>
                <p className="mt-2 pl-8 text-sm text-white/70">
                  Conformément à notre politique de confidentialité
                </p>
                <p className="mt-1 pl-8">
                  <Link
                    to="/confidentialite"
                    className="text-sm font-semibold text-mustard underline underline-offset-4"
                  >
                    voir la politique de confidentialité
                  </Link>
                </p>
              </div>

              <div>
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="newsletter"
                    value="Oui"
                    className="mt-0.5 size-5 shrink-0 accent-mustard"
                  />
                  <span className="text-sm font-semibold leading-snug sm:text-base">
                    Je souhaite recevoir la newsletter StrongDiet (conseils nutrition du sport,
                    actualités et contenus exclusifs). Désinscription possible à tout moment.
                  </span>
                </label>
              </div>

              {error ? (
                <p className="text-sm font-semibold text-[#ffb4b0]" role="alert">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex h-14 items-center justify-center rounded-xl bg-mustard text-base font-semibold text-ink hover:opacity-90 disabled:opacity-60"
              >
                {status === "sending" ? "Envoi…" : "Envoyer"}
              </button>
            </form>
          )}
        </div>

        <p className="mx-auto mt-8 flex max-w-xl items-start justify-center gap-3 text-center text-sm text-white/75">
          <svg viewBox="0 0 24 24" className="mt-0.5 size-7 shrink-0 text-mustard" aria-hidden="true">
            <path d="M12 3.2 19 6v6.2c0 4.2-2.8 7.2-7 8.6-4.2-1.4-7-4.4-7-8.6V6l7-2.8Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <path d="m8.5 12 2.2 2.2 4.3-4.4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <span>
            Vos données sont sécurisées et utilisées uniquement pour vous recontacter.
            <br />
            Vous pouvez exercer vos droits à tout moment.
          </span>
        </p>
      </div>
    </section>
  );
}
