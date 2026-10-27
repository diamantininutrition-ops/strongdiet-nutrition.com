import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, d as useRouterState, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as site } from "./router-Cvo1y9OH.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-header-k6nM7eQE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-[opacity,transform,background-color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2", {
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
			lg: "h-12 min-w-12 rounded-pill px-7 text-sm"
		}
	},
	defaultVariants: {
		variant: "forest",
		size: "md"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
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
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: cn("text-sm transition-opacity hover:opacity-80", dark ? "text-fg" : "text-ink-fg"),
				children: "Prendre rendez-vous"
			})]
		})
	});
}
function SiteHeader() {
	const onInk = useRouterState({ select: (s) => s.location.pathname }) === "/";
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-200", scrolled ? onInk ? "border-b border-hairline bg-ink/80 backdrop-blur-md" : "border-b border-hairline-dark bg-paper/85 backdrop-blur-md" : "border-b border-transparent bg-transparent"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-7xl items-center justify-between px-5 sm:h-16 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: cn("font-display text-sm font-semibold tracking-tight", onInk ? "text-fg" : "text-ink-fg"),
				children: site.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: cn("inline-flex h-11 items-center rounded-pill px-4 text-sm font-medium transition-opacity duration-150 hover:opacity-70", onInk ? "text-fg" : "text-ink-fg"),
				children: "Rendez-vous"
			})]
		})
	});
}
//#endregion
export { cn as i, SiteFooter as n, SiteHeader as r, Button as t };
