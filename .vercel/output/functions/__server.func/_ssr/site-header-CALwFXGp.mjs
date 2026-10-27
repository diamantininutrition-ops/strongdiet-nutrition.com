import { S as require_jsx_runtime, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as site } from "./router-DPVMcZF8.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-header-CALwFXGp.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function SiteFooter({ tone = "ink" }) {
	const dark = tone === "ink";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: cn("border-t", dark ? "border-hairline bg-ink text-muted" : "border-hairline-dark bg-paper text-muted"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm",
				children: site.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: site.bookingUrl,
				target: "_blank",
				rel: "noopener noreferrer",
				className: cn("text-sm", dark ? "text-fg" : "text-ink-fg"),
				children: "Prendre rendez-vous"
			})]
		})
	});
}
function scrollTo(id) {
	if (window.location.pathname !== "/") {
		window.location.assign(`/#${id}`);
		return;
	}
	document.getElementById(id)?.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}
function SiteHeader() {
	const onHome = useRouterState({ select: (s) => s.location.pathname }) === "/";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center gap-2 px-3 sm:h-[4.5rem] sm:gap-4 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "/",
				onClick: (event) => {
					if (!onHome) return;
					event.preventDefault();
					window.scrollTo({
						top: 0,
						behavior: "smooth"
					});
				},
				className: "flex min-w-0 items-center gap-2 sm:gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/logo-header.png",
					alt: "",
					className: "h-8 w-auto shrink-0 sm:h-11"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-[0.62rem] font-semibold leading-tight tracking-tight sm:text-sm md:text-base",
					children: "STRONGDIET - Nutrition du sportif"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "ml-auto flex shrink-0 items-center gap-2 sm:gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => scrollTo("contact"),
					className: "text-xs font-medium text-ink sm:text-base",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => scrollTo("produits"),
					className: "inline-flex h-9 items-center rounded-full bg-gold px-2.5 text-[0.65rem] font-semibold text-ink sm:h-11 sm:px-5 sm:text-sm",
					children: "Prendre rendez-vous"
				})]
			})]
		})
	});
}
//#endregion
export { SiteHeader as n, cn as r, SiteFooter as t };
