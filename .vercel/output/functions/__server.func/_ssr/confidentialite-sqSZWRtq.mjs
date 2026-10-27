import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-header-CALwFXGp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/confidentialite-sqSZWRtq.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-ink-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-2xl px-5 pb-24 pt-28 sm:px-8 sm:pt-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs font-medium uppercase tracking-[0.16em] text-muted",
						children: "Strong Diet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
						children: "Politique de confidentialité"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-5 text-base leading-relaxed",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Valentin Diamantini, diététicien-nutritionniste, est responsable du traitement des données envoyées via le formulaire de contact de Strong Diet." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Les informations demandées — prénom et nom, email, téléphone s’il est renseigné, objet et message — servent uniquement à te recontacter au sujet de ta demande." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Elles ne sont pas vendues ni cédées à des tiers. Elles sont transmises par un service d’envoi de formulaire (Web3Forms) afin que le message arrive dans la messagerie de Strong Diet." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Tu peux demander l’accès, la rectification ou la suppression de tes données en écrivant à",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "text-forest underline underline-offset-4",
									href: "mailto:contact@strongdiet.fr",
									children: "contact@strongdiet.fr"
								}),
								"."
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "text-sm font-semibold text-forest underline-offset-4 hover:underline",
							children: "Retour au site"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, { tone: "paper" })
		]
	});
}
//#endregion
export { PrivacyPage as component };
