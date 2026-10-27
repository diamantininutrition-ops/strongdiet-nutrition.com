import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as block1 } from "./router-Cvo1y9OH.mjs";
import { i as cn, n as SiteFooter, r as SiteHeader, t as Button } from "./site-header-k6nM7eQE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CJohTcxx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BlockHero() {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const id = requestAnimationFrame(() => setReady(true));
		return () => cancelAnimationFrame(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"data-block": "1",
		className: "relative min-h-dvh overflow-hidden bg-ink text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid min-h-dvh max-w-7xl items-stretch lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center px-5 py-24 sm:px-8 lg:px-12 lg:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: cn("reveal-prep font-display text-sm font-medium text-muted stagger-1", ready && "reveal-in"),
						children: block1.pretitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: cn("reveal-prep mt-5 font-display text-hero font-semibold leading-none tracking-display stagger-2", ready && "reveal-in"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: block1.line1Gold
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg",
								children: block1.line1Rest
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg",
								children: block1.line2
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("reveal-prep mt-7 max-w-lg text-base leading-relaxed text-muted stagger-3", ready && "reveal-in"),
						children: block1.lede
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("reveal-prep mt-10 stagger-4", ready && "reveal-in"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "forest",
								size: "lg",
								children: block1.cta
							})
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("reveal-prep relative aspect-portrait w-full overflow-hidden bg-ink lg:aspect-auto lg:min-h-dvh stagger-2", ready && "reveal-in"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/portrait.jpg",
					alt: "Portrait Strong Diet",
					className: "absolute inset-0 size-full object-cover object-top lg:object-contain lg:object-center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": "true",
					className: "pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-linear-to-r from-ink to-transparent lg:block"
				})]
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-ink text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockHero, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, { tone: "ink" })
		]
	});
}
//#endregion
export { Home as component };
