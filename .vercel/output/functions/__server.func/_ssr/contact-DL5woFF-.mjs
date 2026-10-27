import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as SiteHeader, r as cn, t as SiteFooter } from "./site-header-CALwFXGp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DL5woFF-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium tracking-tight disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2", {
	variants: {
		variant: {
			forest: "bg-forest text-fg hover:bg-forest-hover focus-visible:outline-gold",
			gold: "bg-gold text-ink hover:opacity-90 focus-visible:outline-gold",
			outline: "border border-hairline bg-transparent text-fg hover:bg-fg/5 focus-visible:outline-fg",
			ghost: "text-fg hover:opacity-70 focus-visible:outline-fg",
			ink: "bg-ink text-fg hover:opacity-90 focus-visible:outline-ink"
		},
		size: {
			md: "h-11 min-w-11 rounded-pill px-6 text-sm",
			lg: "h-12 min-w-12 rounded-pill px-7 text-base",
			xl: "h-14 min-w-14 rounded-pill px-8 text-lg"
		}
	},
	defaultVariants: {
		variant: "forest",
		size: "md"
	}
});
function Button({ className, variant, size, href, ...props }) {
	const classes = cn(buttonVariants({
		variant,
		size
	}), className);
	if (href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: classes,
		target: "_blank",
		rel: "noopener noreferrer",
		children: props.children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: classes,
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md border border-hairline-dark bg-snow px-4 text-base text-ink-fg", "placeholder:text-muted", "outline-none", "focus-visible:border-forest focus-visible:shadow-[0_0_0_3px_rgb(0_107_63_/_0.18)]", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("block text-sm font-medium text-ink-fg", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-36 w-full rounded-lg border border-hairline-dark bg-snow px-4 py-3 text-base text-ink-fg", "placeholder:text-muted", "outline-none", "focus-visible:border-forest focus-visible:shadow-[0_0_0_3px_rgb(0_107_63_/_0.18)]", className),
		...props
	});
}
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-ink-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-xl px-5 pb-24 pt-28 sm:px-8 sm:pt-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs font-medium uppercase tracking-wide text-muted",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl font-semibold tracking-tight text-ink-fg sm:text-5xl",
						children: "Parlons de votre saison."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base leading-relaxed text-muted",
						children: "Un échange, sans formulaire interminable. Dites qui vous êtes et ce que vous visez."
					}),
					sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-12 border-t border-hairline-dark pt-8 text-base text-ink-fg",
						children: [
							"Votre messagerie s’ouvre. Si rien ne se passe, écrivez à",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-forest underline-offset-4 hover:underline",
								href: "mailto:contact@strongdiet.fr",
								children: "contact@strongdiet.fr"
							}),
							"."
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-12 space-y-6",
						onSubmit,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "name",
									children: "Nom"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									name: "name",
									required: true,
									autoComplete: "name"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "email",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									name: "email",
									type: "email",
									required: true,
									autoComplete: "email"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "message",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "message",
									name: "message",
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								variant: "forest",
								size: "lg",
								children: "Envoyer"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, { tone: "paper" })
		]
	});
}
//#endregion
export { ContactPage as component };
