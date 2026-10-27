import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/preparation-a2p")({
  component: PreparationPage,
});

const field =
  "mt-2 w-full rounded-md border border-white/35 bg-transparent px-3 py-3 text-base text-fg outline-none placeholder:text-white/35 focus-visible:border-[#e10600]";

export function PreparationPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nom = String(data.get("nom") ?? "").trim();
    const prenom = String(data.get("prenom") ?? "").trim();
    const discipline = String(data.get("discipline") ?? "").trim();
    const niveau = String(data.get("niveau") ?? "").trim();
    const objectifs = String(data.get("objectifs") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const consent = (form.elements.namedItem("consent") as HTMLInputElement | null)?.checked;

    if (!nom) {
      setStatus("error");
      setError("Indique ton nom.");
      return;
    }
    if (!prenom) {
      setStatus("error");
      setError("Indique ton prénom.");
      return;
    }
    if (!discipline) {
      setStatus("error");
      setError("Indique ta discipline sportive.");
      return;
    }
    if (!niveau) {
      setStatus("error");
      setError("Choisis ton niveau : Professionnel ou Amateur.");
      return;
    }
    if (!objectifs) {
      setStatus("error");
      setError("Décris tes objectifs.");
      return;
    }
    if (!phone) {
      setStatus("error");
      setError("Indique ton numéro de téléphone.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError("Indique une adresse mail valide.");
      return;
    }
    if (!consent) {
      setStatus("error");
      setError("Coche la case pour accepter l’utilisation de tes données.");
      return;
    }

    data.set("nom", nom);
    data.set("prenom", prenom);
    data.set("discipline", discipline);
    data.set("objectifs", objectifs);
    data.set("phone", phone);
    data.set("email", email);
    data.set("name", `${prenom} ${nom}`);
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
    <div className="min-h-dvh bg-ink px-4 py-12 text-fg sm:px-8 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <h1
          className="text-center text-[clamp(1.7rem,6vw,3.4rem)] font-bold uppercase leading-[0.95] tracking-tight"
          style={{ fontFamily: "Calibri, sans-serif" }}
        >
          Préparation
          <span className="mt-1 block text-[#e10600]">Nutritionnelle A2P</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-white/90 sm:text-base lg:text-2xl">
          Un plan nutritionnel sur mesure, conçu pour performer.
        </p>

        <div className="mt-8 rounded-2xl border border-white/25 p-4 sm:p-7">
          {status === "sent" ? (
            <p className="py-16 text-center font-display text-2xl font-semibold leading-snug" role="status">
              Merci, tu as fait le bon choix. Tu seras recontacté(e) sous 48h pour ta
              Préparation Nutritionnelle A2P
            </p>
          ) : (
            <form className="flex flex-col gap-5" noValidate onSubmit={onSubmit}>
              <input type="hidden" name="access_key" value="9f9e8e62-43be-456b-9b5e-5e0c6242c9c3" />
              <input type="hidden" name="subject" value="Demande Préparation A2P - StrongDiet" />
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

              <div className="flex items-center gap-3 border-b border-white/20 pb-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#e10600]">
                  <svg viewBox="0 0 24 24" className="size-6 text-white" aria-hidden="true">
                    <path d="M7 8h10v2a5 5 0 0 1-10 0V8Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M7 9H5.2A2.2 2.2 0 0 0 7 13.2M17 9h1.8A2.2 2.2 0 0 1 17 13.2M12 15v2.2M9 20h6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </span>
                <p className="font-display text-sm font-bold uppercase tracking-tight sm:text-lg">
                  Préparation nutritionnelle A2P
                </p>
              </div>

              <label className="block">
                <span className="font-display text-xs font-bold uppercase tracking-[0.12em]">
                  Nom <span className="text-[#e10600]">*</span>
                </span>
                <input name="nom" autoComplete="family-name" placeholder="Entrez votre nom" className={field} />
              </label>

              <label className="block">
                <span className="font-display text-xs font-bold uppercase tracking-[0.12em]">
                  Prénom <span className="text-[#e10600]">*</span>
                </span>
                <input name="prenom" autoComplete="given-name" placeholder="Entrez votre prénom" className={field} />
              </label>

              <label className="block">
                <span className="font-display text-xs font-bold uppercase tracking-[0.12em]">
                  Discipline sportive pratiquée <span className="text-[#e10600]">*</span>
                </span>
                <input name="discipline" placeholder="Ex. : Haltérophilie, CrossFit, Bodybuilding, Course, Autre..." className={field} />
              </label>

              <fieldset>
                <legend className="font-display text-xs font-bold uppercase tracking-[0.12em]">
                  Niveau <span className="text-[#e10600]">*</span>
                </legend>
                <p className="mt-1 text-sm text-white/55">Sélectionnez votre niveau</p>
                <div className="mt-2 grid grid-cols-2 rounded-md border border-white/35">
                  <label className="flex items-center gap-3 border-r border-white/25 px-4 py-3">
                    <input type="radio" name="niveau" value="Professionnel" className="size-4 accent-[#e10600]" />
                    Professionnel
                  </label>
                  <label className="flex items-center gap-3 px-4 py-3">
                    <input type="radio" name="niveau" value="Amateur" className="size-4 accent-[#e10600]" />
                    Amateur
                  </label>
                </div>
              </fieldset>

              <label className="block">
                <span className="font-display text-xs font-bold uppercase tracking-[0.12em]">
                  Objectifs <span className="text-[#e10600]">*</span>
                </span>
                <p className="mt-1 text-sm text-white/55">
                  Décrivez vos objectifs nutritionnels, vos contraintes, vos habitudes alimentaires, etc.
                </p>
                <textarea
                  name="objectifs"
                  rows={5}
                  placeholder="Décrivez vos objectifs nutritionnels, vos contraintes, les problématiques personnelles, etc."
                  className={`${field} min-h-32 resize-y`}
                />
              </label>

              <label className="block">
                <span className="font-display text-xs font-bold uppercase tracking-[0.12em]">
                  Numéro de téléphone <span className="text-[#e10600]">*</span>
                </span>
                <input name="phone" type="tel" autoComplete="tel" placeholder="Ex. : 06 12 34 56 78" className={field} />
              </label>

              <label className="block">
                <span className="font-display text-xs font-bold uppercase tracking-[0.12em]">
                  Adresse mail <span className="text-[#e10600]">*</span>
                </span>
                <input name="email" type="email" autoComplete="email" placeholder="Ex. : votre.email@exemple.fr" className={field} />
              </label>

              <div>
                <label className="flex items-start gap-3">
                  <input type="checkbox" name="consent" value="oui" className="mt-0.5 size-5 shrink-0 accent-[#e10600]" />
                  <span className="text-sm leading-snug sm:text-base">
                    J'accepte que mes données soient utilisées pour être{" "}
                    <span className="text-[#e10600]">recontacté(e)</span>
                  </span>
                </label>
                <p className="mt-2 pl-8 text-sm text-white/80">
                  En savoir plus sur notre{" "}
                  <Link to="/confidentialite" className="text-[#e10600] underline underline-offset-2">
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </div>

              <div>
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="newsletter"
                    value="Oui"
                    className="mt-0.5 size-5 shrink-0 accent-[#e10600]"
                  />
                  <span className="text-sm leading-snug sm:text-base">
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
                className="flex h-14 items-center justify-center gap-2 rounded-md bg-[#e10600] text-sm font-bold uppercase tracking-[0.12em] text-white hover:opacity-90 disabled:opacity-60"
              >
                <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
                  <rect x="5" y="11" width="14" height="9" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M8 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                {status === "sending" ? "Envoi…" : "Envoyer ma demande"}
              </button>
            </form>
          )}
        </div>

        <p className="mx-auto mt-6 flex max-w-xl items-start justify-center gap-2 text-center text-xs text-white/70 sm:text-sm">
          <svg viewBox="0 0 24 24" className="mt-0.5 size-5 shrink-0 text-[#e10600]" aria-hidden="true">
            <path d="M12 3.2 19 6v6.2c0 4.2-2.8 7.2-7 8.6-4.2-1.4-7-4.4-7-8.6V6l7-2.8Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          <span>Vos données sont sécurisées et utilisées uniquement dans le cadre de votre demande.</span>
        </p>
      </div>
    </div>
  );
}
