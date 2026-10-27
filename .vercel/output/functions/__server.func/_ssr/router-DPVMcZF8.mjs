import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DPVMcZF8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var site = {
	name: "Strong Diet",
	title: "Strong Diet — Nutrition du sport",
	description: "Une approche nutritionnelle conçue pour la haute performance, auprès de combattants professionnels, d’athlètes olympiques et de sportifs de haut niveau.",
	bookingUrl: "https://www.doctolib.fr/dieteticien/metz/valentin-diamantini/booking/motives?specialityId=414&telehealth=false&placeId=practice-170936&motiveCategoryIds%5B%5D=468601&pid=practice-170936&source=profile&utm_campaign=gmb&utm_medium=organic&utm_source=google_appointment_redirect"
};
var block1 = {
	id: 1,
	kind: "hero",
	pretitle: "Nutrition du sport",
	line1: "Construis ta stratégie.",
	line2: "Atteins tes objectifs.",
	lede: "Une approche nutritionnelle conçue pour la haute performance et utilisée auprès de combattants professionnels, d’athlètes olympiques et de sportifs de haut niveau. Pensée pour mieux performer, récupérer plus vite et obtenir des résultats à la hauteur de l’engagement.",
	cta: "Commencer ma préparation nutritionnelle"
};
var block2 = {
	id: 2,
	items: [
		{
			label: "GESTION DU\nPOIDS",
			icon: "scale"
		},
		{
			label: "COMPÉTITION",
			icon: "trophy"
		},
		{
			label: "RÉCUPÉRATION",
			icon: "recovery"
		},
		{
			label: "COMPLÉMENTS\nALIMENTAIRES",
			icon: "pill"
		},
		{
			label: "OPTIMISATION\nDES PERFORMANCES",
			icon: "gauge"
		}
	]
};
var block3 = {
	id: 3,
	title: "COMMENCER MON ACCOMPAGNEMENT",
	lede: "Analyse individualisée - Stratégie sur mesure - Suivi réactif",
	proofs: [
		{
			kicker: "Nutrition du sportif",
			label: "Combat, endurance et sports de force"
		},
		{
			kicker: "+ de 500",
			label: "Sportifs accompagnés"
		},
		{
			kicker: "8 ans",
			label: "D’expérience"
		},
		{
			kicker: "Athlètes professionnels",
			label: "Olympiques et de haut niveau"
		}
	],
	intro: {
		lead: "Je suis Valentin Diamantini, diététicien-nutritionniste du sport.",
		paragraphs: [
			"Depuis plusieurs années, j’accompagne des sportifs amateurs, compétiteurs et athlètes de haut niveau dans leur préparation nutritionnelle.",
			"J’ai accompagné plusieurs centaines de sportifs, dont des athlètes olympiques et professionnels, et travaille avec des structures de haut niveau comme le CREPS, l’INSEP et des pôles France en boxe, tir à l’arc et judo. Ces années de terrain ont forgé une expertise technique et scientifique de la nutrition sportive, fondée sur l’analyse, la précision et l’individualisation des stratégies de performance.",
			"Mon objectif : mettre la rigueur, la précision et les exigences du haut niveau au service de chaque sportif déterminé à progresser."
		]
	}
};
var block4 = {
	id: 4,
	title: [
		{
			text: "Optimise tes performances",
			tone: "mustard"
		},
		{
			text: " au plus haut",
			tone: "fg"
		},
		{
			text: "niveau avec la ",
			tone: "fg",
			breakBefore: true
		},
		{
			text: "biostratégie fonctionnelle",
			tone: "lime"
		},
		{
			text: ".",
			tone: "fg"
		}
	],
	body: [
		{
			text: "La biostratégie fonctionnelle analyse le fonctionnement de ton corps pour ",
			bold: false
		},
		{
			text: "construire la stratégie nutritionnelle la plus adaptée à ton profil",
			bold: true
		},
		{
			text: ". Issue d’un ",
			bold: false
		},
		{
			text: "système utilisé auprès d’athlètes d’élite",
			bold: true
		},
		{
			text: ", elle transpose dans ton ",
			bold: false
		},
		{
			text: "accompagnement",
			bold: true
		},
		{
			text: " le degré de précision et d’ajustement exigé par le sport de haut niveau. Contrairement aux méthodes figées, elle évolue selon tes spécificités métaboliques, tes besoins nutritionnels et tes échéances sportives.",
			bold: false
		}
	]
};
var block5 = {
	id: 5,
	title: [
		{ text: "Pourquoi " },
		{
			text: "les meilleurs",
			bold: true
		},
		{ text: " construisent-ils " },
		{
			text: "leur propre ",
			bold: true
		},
		{
			text: "stratégie",
			bold: true,
			lime: true
		},
		{ text: " ?" }
	],
	body: [
		{ text: "Au départ, beaucoup de méthodes semblent fonctionner uniquement parce que le corps compense les limites : " },
		{
			text: "cet équilibre ",
			bold: true
		},
		{
			text: "ne dure pas",
			bold: true,
			ash: true
		},
		{ text: ". Puis, insidieusement, les résultats ne suivent plus : les performances stagnent, la récupération se dégrade et ton poids devient plus difficile à maîtriser. La plupart des méthodes restent basées sur des protocoles génériques" },
		{ text: ", peu adaptés aux exigences réelles de la performance." },
		{
			text: "Pour continuer à progresser, la nutrition doit se construire autrement.",
			breakBefore: true
		}
	],
	senseTitle: [
		{
			text: "C’est ici que la ",
			tone: "fg"
		},
		{
			text: "stratégie",
			tone: "lime"
		},
		{
			text: " prend tout son sens.",
			tone: "fg"
		}
	],
	kicker: [
		{
			text: "La biostratégie fonctionnelle est un ",
			gold: false
		},
		{
			text: "avantage stratégique",
			gold: true
		},
		{
			text: ".",
			gold: false
		}
	],
	senseLead: "Au plus haut niveau, les athlètes adaptent leurs apports avec précision.",
	senseBody: [
		{
			text: "Ils adaptent leur hydratation, leur nutrition et leurs protocoles selon les charges d’entraînement, leur récupération et leurs échéances. ",
			bold: false
		},
		{
			text: "Chaque décision s’appuie sur les réponses de l’organisme et les résultats observés",
			semibold: true
		},
		{
			text: " pour déterminer ce qui doit être conservé, affiné ou corrigé. Lorsque chaque détail compte, la différence ne se joue plus sur la discipline, elle se joue sur la ",
			bold: false
		},
		{
			text: "précision stratégique de la méthode",
			bold: true
		},
		{
			text: ".",
			bold: false
		}
	],
	senseClose: [
		{ text: "Ce sont " },
		{
			text: "les petits détails",
			bold: true
		},
		{ text: " qui font " },
		{
			text: "les ",
			bold: true
		},
		{
			text: "grands résultats",
			bold: true,
			lime: true
		},
		{ text: "." }
	]
};
var block7 = {
	id: 7,
	title: "Commençons ta stratégie nutritionnelle !",
	body: [[
		{
			text: "Tu stagnes",
			bold: true
		},
		{ text: " malgré tes efforts ? " },
		{
			text: "Tu veux améliorer tes performances",
			bold: true
		},
		{ text: " et " },
		{
			text: "tu en as assez des conseils contradictoires",
			bold: true
		},
		{ text: " qui ralentissent ta progression ?" }
	], [
		{
			text: "Débute dès maintenant ta ",
			bold: true
		},
		{
			text: "préparation nutritionnelle",
			bold: true,
			lime: true
		},
		{ text: " adaptée à tes besoins, à ton fonctionnement et aux exigences de ta discipline, pour performer et atteindre tes objectifs." }
	]],
	next: "Deux façons de commencer."
};
var styles_default = "/assets/styles-D5FBhLpH.css";
var Route$4 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: site.title },
			{
				name: "description",
				content: site.description
			},
			{
				name: "theme-color",
				content: "#0A0A0A"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "fr",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$2 = () => import("./routes-nt7wjeBC.mjs");
var title = "Nutrition du sport | STRONGDIET";
var description = "La nutrition du sportif pensée pour le haut niveau. Analyse, individualisation et accompagnement. Valentin DIAMANTINI, Nutritionniste du sport.";
var Route$3 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./confidentialite-sqSZWRtq.mjs");
var Route$2 = createFileRoute("/confidentialite")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./contact-DL5woFF-.mjs");
var Route$1 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var Route = createFileRoute("/preparation-a2p")({ component: PreparationPage });
var field = "mt-2 w-full rounded-md border border-white/35 bg-transparent px-3 py-3 text-base text-fg outline-none placeholder:text-white/35 focus-visible:border-[#e10600]";
function PreparationPage() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [error, setError] = (0, import_react.useState)("");
	async function onSubmit(e) {
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
		const consent = form.elements.namedItem("consent")?.checked;
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
		data.set("newsletter", form.elements.namedItem("newsletter")?.checked ? "Oui" : "Non");
		setStatus("sending");
		setError("");
		try {
			const res = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: data
			});
			const json = await res.json();
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-ink px-4 py-12 text-fg sm:px-8 sm:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-center text-[clamp(1.7rem,6vw,3.4rem)] font-bold uppercase leading-[0.95] tracking-tight",
					style: { fontFamily: "Calibri, sans-serif" },
					children: ["Préparation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-[#e10600]",
						children: "Nutritionnelle A2P"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-white/90 sm:text-base lg:text-2xl",
					children: "Un plan nutritionnel sur mesure, conçu pour performer."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 rounded-2xl border border-white/25 p-4 sm:p-7",
					children: status === "sent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-16 text-center font-display text-2xl font-semibold leading-snug",
						role: "status",
						children: "Merci, tu as fait le bon choix. Tu seras recontacté(e) sous 48h pour ta Préparation Nutritionnelle A2P"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "flex flex-col gap-5",
						noValidate: true,
						onSubmit,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "hidden",
								name: "access_key",
								value: "9f9e8e62-43be-456b-9b5e-5e0c6242c9c3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "hidden",
								name: "subject",
								value: "Demande Préparation A2P - StrongDiet"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								name: "botcheck",
								className: "hidden",
								tabIndex: -1,
								autoComplete: "off",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 border-b border-white/20 pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-11 shrink-0 place-items-center rounded-full bg-[#e10600]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										viewBox: "0 0 24 24",
										className: "size-6 text-white",
										"aria-hidden": "true",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M7 8h10v2a5 5 0 0 1-10 0V8Z",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "1.7"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M7 9H5.2A2.2 2.2 0 0 0 7 13.2M17 9h1.8A2.2 2.2 0 0 1 17 13.2M12 15v2.2M9 20h6",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "1.7",
											strokeLinecap: "round"
										})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-sm font-bold uppercase tracking-tight sm:text-lg",
									children: "Préparation nutritionnelle A2P"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-xs font-bold uppercase tracking-[0.12em]",
									children: ["Nom ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#e10600]",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "nom",
									autoComplete: "family-name",
									placeholder: "Entrez votre nom",
									className: field
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-xs font-bold uppercase tracking-[0.12em]",
									children: ["Prénom ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#e10600]",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "prenom",
									autoComplete: "given-name",
									placeholder: "Entrez votre prénom",
									className: field
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-xs font-bold uppercase tracking-[0.12em]",
									children: ["Discipline sportive pratiquée ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#e10600]",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "discipline",
									placeholder: "Ex. : Haltérophilie, CrossFit, Bodybuilding, Course, Autre...",
									className: field
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
									className: "font-display text-xs font-bold uppercase tracking-[0.12em]",
									children: ["Niveau ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#e10600]",
										children: "*"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-white/55",
									children: "Sélectionnez votre niveau"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 grid grid-cols-2 rounded-md border border-white/35",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-3 border-r border-white/25 px-4 py-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "radio",
											name: "niveau",
											value: "Professionnel",
											className: "size-4 accent-[#e10600]"
										}), "Professionnel"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-3 px-4 py-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "radio",
											name: "niveau",
											value: "Amateur",
											className: "size-4 accent-[#e10600]"
										}), "Amateur"]
									})]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-xs font-bold uppercase tracking-[0.12em]",
										children: ["Objectifs ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#e10600]",
											children: "*"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-white/55",
										children: "Décrivez vos objectifs nutritionnels, vos contraintes, vos habitudes alimentaires, etc."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "objectifs",
										rows: 5,
										placeholder: "Décrivez vos objectifs nutritionnels, vos contraintes, les problématiques personnelles, etc.",
										className: `${field} min-h-32 resize-y`
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-xs font-bold uppercase tracking-[0.12em]",
									children: ["Numéro de téléphone ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#e10600]",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "phone",
									type: "tel",
									autoComplete: "tel",
									placeholder: "Ex. : 06 12 34 56 78",
									className: field
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-xs font-bold uppercase tracking-[0.12em]",
									children: ["Adresse mail ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#e10600]",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "email",
									type: "email",
									autoComplete: "email",
									placeholder: "Ex. : votre.email@exemple.fr",
									className: field
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									name: "consent",
									value: "oui",
									className: "mt-0.5 size-5 shrink-0 accent-[#e10600]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm leading-snug sm:text-base",
									children: [
										"J'accepte que mes données soient utilisées pour être",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#e10600]",
											children: "recontacté(e)"
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 pl-8 text-sm text-white/80",
								children: [
									"En savoir plus sur notre",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/confidentialite",
										className: "text-[#e10600] underline underline-offset-2",
										children: "politique de confidentialité"
									}),
									"."
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									name: "newsletter",
									value: "Oui",
									className: "mt-0.5 size-5 shrink-0 accent-[#e10600]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm leading-snug sm:text-base",
									children: "Je souhaite recevoir la newsletter StrongDiet (conseils nutrition du sport, actualités et contenus exclusifs). Désinscription possible à tout moment."
								})]
							}) }),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-[#ffb4b0]",
								role: "alert",
								children: error
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: status === "sending",
								className: "flex h-14 items-center justify-center gap-2 rounded-md bg-[#e10600] text-sm font-bold uppercase tracking-[0.12em] text-white hover:opacity-90 disabled:opacity-60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									viewBox: "0 0 24 24",
									className: "size-4",
									"aria-hidden": "true",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										x: "5",
										y: "11",
										width: "14",
										height: "9",
										rx: "1.5",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "1.8"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M8 11V8a4 4 0 0 1 8 0v3",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "1.8"
									})]
								}), status === "sending" ? "Envoi…" : "Envoyer ma demande"]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mx-auto mt-6 flex max-w-xl items-start justify-center gap-2 text-center text-xs text-white/70 sm:text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						viewBox: "0 0 24 24",
						className: "mt-0.5 size-5 shrink-0 text-[#e10600]",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M12 3.2 19 6v6.2c0 4.2-2.8 7.2-7 8.6-4.2-1.4-7-4.4-7-8.6V6l7-2.8Z",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.6"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Vos données sont sécurisées et utilisées uniquement dans le cadre de votre demande." })]
				})
			]
		})
	});
}
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	ConfidentialiteRoute: Route$2.update({
		id: "/confidentialite",
		path: "/confidentialite",
		getParentRoute: () => Route$4
	}),
	ContactRoute: Route$1.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$4
	}),
	PreparationA2pRoute: Route.update({
		id: "/preparation-a2p",
		path: "/preparation-a2p",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { block4 as a, site as c, block3 as i, block1 as n, block5 as o, block2 as r, block7 as s, router_exports as t };
