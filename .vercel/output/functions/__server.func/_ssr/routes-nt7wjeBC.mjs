import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as block4, c as site, i as block3, n as block1, o as block5, r as block2, s as block7 } from "./router-DPVMcZF8.mjs";
import { n as SiteHeader, r as cn, t as SiteFooter } from "./site-header-CALwFXGp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-nt7wjeBC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AxisMark({ src }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt: "",
		className: "size-16 object-contain sm:size-20 lg:size-24",
		"aria-hidden": "true"
	});
}
function IconScale() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AxisMark, { src: "/icons/poids.png" });
}
function IconTrophy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AxisMark, { src: "/icons/competition.png" });
}
function IconRecovery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AxisMark, { src: "/icons/recuperation.png" });
}
function IconPill() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AxisMark, { src: "/icons/complements.png" });
}
function IconGauge() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AxisMark, { src: "/icons/performances.png" });
}
var icons = {
	scale: IconScale,
	trophy: IconTrophy,
	recovery: IconRecovery,
	pill: IconPill,
	gauge: IconGauge
};
function Bolt({ flip = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden h-full items-center justify-center lg:flex",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/bolt-ref.png",
			alt: "",
			className: "h-[69%] w-auto max-w-full object-contain",
			style: flip ? { transform: "scaleX(-1)" } : void 0
		})
	});
}
function BlockAxis() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"data-block": "2",
		className: "relative z-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-snow text-ink-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "sr-only",
					children: "Valentin Diamantini, nutritionniste du sport"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 pt-14 sm:px-8 sm:pt-16 lg:grid-cols-4 lg:gap-0 lg:px-10 lg:pt-20",
					children: block3.proofs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative text-center max-lg:[&:not(:last-child)]:after:absolute max-lg:[&:not(:last-child)]:after:left-1/4 max-lg:[&:not(:last-child)]:after:right-1/4 max-lg:[&:not(:last-child)]:after:bottom-0 max-lg:[&:not(:last-child)]:after:h-px max-lg:[&:not(:last-child)]:after:translate-y-5 max-lg:[&:not(:last-child)]:after:bg-ink lg:px-4 lg:[&:not(:last-child)]:after:absolute lg:[&:not(:last-child)]:after:top-1/2 lg:[&:not(:last-child)]:after:right-0 lg:[&:not(:last-child)]:after:h-14 lg:[&:not(:last-child)]:after:w-px lg:[&:not(:last-child)]:after:-translate-y-1/2 lg:[&:not(:last-child)]:after:bg-ink",
						children: [item.kicker === "Nutrition du sportif" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-pretty font-display text-xl font-bold tracking-tight text-ink-fg sm:text-2xl",
							children: item.kicker
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl font-bold tracking-tight text-ink-fg sm:text-2xl",
							children: item.kicker
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-ink-fg sm:text-base",
							children: item.label
						})]
					}, item.kicker))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-5 pb-8 pt-12 sm:px-8 sm:pb-10 sm:pt-16 lg:grid lg:max-w-none lg:grid-cols-[minmax(7rem,1fr)_minmax(0,52rem)_minmax(7rem,1fr)] lg:items-stretch lg:gap-10 lg:px-8 lg:pb-14 lg:pt-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bolt, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-pretty text-center font-display text-xl font-semibold leading-snug tracking-tight text-ink-fg sm:text-2xl lg:text-[1.7rem] lg:font-bold",
							children: block3.intro.lead
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 space-y-6 text-sm leading-relaxed text-ink-fg sm:text-base lg:mt-10 lg:space-y-7 lg:text-[1.05rem] lg:leading-relaxed",
							children: block3.intro.paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bolt, { flip: true })
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-ink px-4 py-14 sm:px-8 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl rounded-[2rem] border border-gold bg-snow px-3 py-4 sm:px-6 lg:rounded-[2.75rem] lg:px-4 lg:py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-1 lg:grid-cols-5",
					children: block2.items.map((item) => {
						const Icon = icons[item.icon];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "relative flex flex-col items-center gap-4 px-4 py-7 text-center lg:gap-6 lg:px-5 lg:py-4 [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:bg-gold max-lg:[&:not(:last-child)]:after:inset-x-10 max-lg:[&:not(:last-child)]:after:bottom-0 max-lg:[&:not(:last-child)]:after:h-px lg:[&:not(:last-child)]:after:inset-y-3 lg:[&:not(:last-child)]:after:right-0 lg:[&:not(:last-child)]:after:w-px",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-pretty whitespace-pre-line font-display text-xs font-semibold leading-tight tracking-wide text-ink sm:text-sm",
								children: item.label
							})]
						}, item.label);
					})
				})
			})
		})]
	});
}
function BlockBio() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"data-block": "4",
		className: "bg-ink px-4 pb-24 pt-5 text-fg sm:px-8 sm:pb-32 sm:pt-12 lg:px-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mb-8 h-px w-12 bg-gold lg:mb-12",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/logo.png",
					alt: "Strong Diet",
					className: "mx-auto mb-8 h-28 w-auto sm:h-36 lg:mb-14 lg:h-48"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "-mx-1 text-center font-display text-xl font-semibold leading-snug tracking-display sm:mx-0 sm:text-pair lg:text-[3.35rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block whitespace-nowrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-mustard",
							children: "Optimise tes performances"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg",
							children: " au plus haut "
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block whitespace-nowrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg",
								children: "niveau avec la "
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-field",
								children: "biostratégie fonctionnelle"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg",
								children: "."
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-8 h-px w-12 bg-fg",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-8 max-w-3xl text-base leading-relaxed text-fg sm:text-2xl lg:max-w-none",
					children: block4.body.map((part) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn(part.bold && "font-bold"),
						children: part.text
					}, part.text))
				})
			]
		})
	});
}
function BlockBook() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"data-block": "3",
		className: "relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-ink px-5 pb-2 pt-8 text-fg sm:px-8 sm:pb-10 sm:pt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-4xl pt-8 sm:pt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-panel bg-snow px-4 pb-5 pt-14 text-center sm:px-10 sm:pb-10 sm:pt-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-lede italic leading-snug text-ink sm:whitespace-nowrap",
						children: block3.lede
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute left-1/2 top-8 w-[96%] -translate-x-1/2 -translate-y-1/2 sm:top-10 sm:w-[94%]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex min-h-16 items-center justify-center rounded-bubble bg-mustard px-4 py-6 sm:min-h-20 sm:px-7 sm:py-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-balance text-center font-display text-banner font-bold uppercase leading-tight tracking-tight text-ink sm:whitespace-nowrap sm:leading-none",
							children: block3.title
						})
					})
				})]
			})
		})
	});
}
function BlockHero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"data-block": "1",
		className: "relative min-h-dvh overflow-hidden bg-ink text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid min-h-dvh max-w-7xl items-stretch lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col justify-center px-5 pb-6 pt-24 sm:px-8 lg:px-12 lg:py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex w-full max-w-xl flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-sm font-medium text-muted lg:text-2xl lg:font-bold lg:tracking-tight",
							children: block1.pretitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-display text-hero font-semibold leading-none tracking-display whitespace-nowrap text-gold",
							children: block1.line1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-hero font-semibold leading-none tracking-display whitespace-nowrap text-fg",
							children: block1.line2
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 text-base leading-relaxed text-muted",
							children: block1.lede
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#commencer",
								className: "inline-flex h-14 items-center justify-center whitespace-nowrap rounded-pill bg-forest px-5 text-sm font-bold text-fg hover:bg-forest-hover sm:h-16 sm:px-8 sm:text-base lg:px-10 lg:text-lg",
								children: block1.cta
							})
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center bg-ink pb-10 pt-1 lg:min-h-dvh lg:items-center lg:pb-12 lg:pt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/portrait.png",
					alt: "Valentin Diamantini, nutritionniste du sport",
					className: "h-80 w-auto max-w-full object-contain object-top sm:h-88 lg:h-[36rem]"
				})
			})]
		})
	});
}
function Mark({ n, label, beside, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col items-center justify-center bg-ink px-6 py-12 text-center text-fg lg:px-4", beside && "lg:flex-row lg:gap-8 lg:px-10", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-8xl font-semibold leading-none tracking-display lg:text-[9.5rem]",
			children: n
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex flex-col items-center", beside && "lg:items-start"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-3 font-display text-3xl font-semibold tracking-tight lg:text-5xl", beside && "lg:mt-0"),
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 h-0.5 w-full bg-gold",
				"aria-hidden": "true"
			})]
		})]
	});
}
function Step({ n, label, flip, edge, children, beside }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("lg:grid lg:items-stretch", flip ? "lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)]" : "lg:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)]", edge === "bottom" && "lg:[clip-path:polygon(0_0,100%_0,100%_100%,0_calc(100%-6.5rem))]", edge === "top" && "lg:-mt-[6.5rem] lg:[clip-path:polygon(0_0,100%_6.5rem,100%_100%,0_100%)]"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
			n,
			label,
			beside,
			className: cn(flip && "lg:order-2")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("bg-snow px-6 py-10 text-ink-fg sm:px-10 lg:px-14 lg:py-16", flip && "lg:order-1", edge === "bottom" && "lg:pb-40", edge === "top" && "lg:pt-32"),
			children
		})]
	});
}
function Check$1({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "flex items-start gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "mt-0.5 size-5 shrink-0 text-field lg:mt-1 lg:size-8",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M5 12.5 9.2 17 19 7",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2.4",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children })]
	});
}
function BlockPillars() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"data-block": "6",
		className: "bg-snow text-ink-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden h-16 bg-paper lg:block",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full bg-ink [clip-path:polygon(0_100%,100%_0,100%_100%)]" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-16 bg-ink sm:h-20",
				"aria-hidden": "true"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-snow px-5 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "pt-14 font-display text-3xl font-semibold tracking-tight sm:pt-16 sm:text-4xl lg:text-5xl",
						children: [
							"Les ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "3 piliers"
							}),
							" de la",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-field",
								children: "biostratégie fonctionnelle"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto my-10 h-px w-48 bg-gold sm:my-12 sm:w-72 lg:w-96",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-pretty pb-14 font-display text-2xl font-semibold tracking-tight text-ink-fg sm:pb-16 sm:text-3xl lg:text-4xl",
						children: [
							"Comment se passe ton",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold",
								children: "accompagnement en nutrition du sport"
							}),
							" ?"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden bg-snow lg:block",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-24 bg-ink [clip-path:polygon(0_15%,100%_100%,0_100%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-20 bg-ink" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
				n: "1",
				label: "ANALYSE",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-3xl flex-col gap-6 text-base leading-relaxed sm:text-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-pretty font-display text-xl font-semibold leading-snug tracking-tight sm:text-3xl",
							children: "Ta préparation nutritionnelle commence par une analyse précise de ton fonctionnement."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto h-px w-48 self-center bg-gold lg:w-96",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "On analyse ta disponibilité énergétique, ta capacité de récupération, ta réponse aux charges d’entraînement et la manière dont ton organisme s’adapte aux différentes intensités. L’évaluation de ces paramètres s’appuie sur l’observation croisée de tes données d’entraînement, de tes marqueurs de récupération et de l’évolution de tes performances dans le temps." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-bold lg:text-center",
							children: [
								"Cette lecture précise permet",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-field",
									children: "d’identifier ce qui soutient réellement ta performance"
								}),
								" ",
								"et ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-cendre",
									children: "ce qui la limite"
								}),
								", à partir de données concrètes et mesurables."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tu obtiens ainsi une base solide qui te permettra de construire et affiner ta propre stratégie nutritionnelle." })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden h-32 bg-ink lg:-mt-[2px] lg:block [clip-path:polygon(0_0,35%_0,100%_40%,100%_100%,65%_100%,0_46%)]",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
				n: "2",
				label: "ADAPTATION",
				flip: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-4xl flex-col gap-8 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-pretty text-center font-display text-[1.3125rem] font-semibold leading-snug tracking-tight sm:text-3xl",
							children: "Un accompagnement stratégique en nutrition du sport."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto h-px w-48 self-center bg-gold lg:w-96",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-center text-base font-semibold leading-snug sm:text-xl lg:font-display lg:text-2xl lg:tracking-tight",
							children: [
								"Ta ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-field",
									children: "préparation nutritionnelle"
								}),
								" ",
								"s’organise autour de plusieurs",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: "consultations"
								}),
								", de",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: "supports spécifiques"
								}),
								" et d’un",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: "suivi continu et réactif"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-base leading-relaxed sm:text-xl",
							children: [
								"Chaque étape est revue à partir de tes objectifs, de tes retours, de l’évolution de tes entraînements et de tes échéances sportives, en y",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: "intégrant tes contraintes réelles"
								}),
								". Ces éléments deviennent des données de pilotage qui permettent",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: "d’ajuster avec précision ta propre stratégie"
								}),
								" ",
								"en adaptant tes apports nutritionnels, l’organisation de tes repas et les protocoles de nutrition mis en place."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-xl font-semibold leading-snug tracking-tight sm:text-2xl",
							children: [
								"Un accompagnement",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-field",
									children: "au plus proche de ta pratique"
								}),
								" pour une optimisation précise de tes performances."
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden h-32 bg-ink lg:-mt-[2px] lg:block [clip-path:polygon(100%_0,100%_46%,35%_100%,0_100%,0_40%,65%_0)]",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
				n: "3",
				label: "PERFORMANCE",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-3xl flex-col gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
						className: "text-pretty text-xl font-semibold leading-snug sm:text-2xl lg:text-3xl",
						children: [
							"Tu obtiens une",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-field",
								children: "stratégie nutritionnelle"
							}),
							" construite",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "pour performer."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 text-base leading-relaxed sm:text-lg lg:gap-4 lg:text-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, { children: "Une nutrition qui s’adapte et qui est anticipée" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, { children: "Une nutrition alignée sur les exigences de ta discipline" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, { children: "Une couverture complète de ta préparation sportive" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, { children: "Une compréhension fine de ton fonctionnement" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, { children: "Des performances sécurisées pour durer" })
						]
					})]
				})
			})
		]
	});
}
var questions = [
	{
		q: "Quelle nutrition pour le sport ?",
		a: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"La ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-bold text-fg",
					children: "nutrition du sport"
				}),
				" consiste à adapter l’alimentation aux exigences de la pratique et aux objectifs du sportif. Il ne s’agit pas d’un régime standard ni d’un simple calcul de calories. Une",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-bold text-fg",
					children: "nutrition du sportif"
				}),
				" efficace repose sur l’analyse de son fonctionnement, de sa discipline, de sa charge d’entraînement et de sa récupération."
			] }),
			"Chez StrongDiet, la nutrition du sport est construite comme une stratégie. Elle tient compte de la digestion, de l’hydratation, de l’énergie disponible et de la composition corporelle. L’objectif est d’optimiser la performance durablement, sans protocoles génériques ni approches identiques pour tous.",
			"Chaque sportif a des besoins différents. La nutrition du sportif doit donc s’ajuster à son profil, à ses contraintes et à ses échéances. C’est cette individualisation qui permet de transformer l’alimentation en outil de progression réel."
		]
	},
	{
		q: "Quels sont les besoins nutritionnels du sportif ?",
		a: [
			"Les besoins nutritionnels du sportif varient selon sa discipline, son volume d’entraînement, sa composition corporelle et ses objectifs. Ils ne se limitent pas aux calories ou aux macronutriments. Une nutrition du sport adaptée doit couvrir l’énergie disponible, les protéines, les glucides, les lipides, l’hydratation et les minéraux, tout en tenant compte de la digestion et de la récupération.",
			"La nutrition du sportif efficace s’ajuste à la charge réelle, aux échéances et au fonctionnement individuel. Ce qui convient à un sportif de force ne correspond pas forcément à un pratiquant de sports de combat ou d’efforts hybrides. Les besoins évoluent aussi avec la progression, les compétitions et les phases de récupération.",
			"Chez StrongDiet, ces besoins sont analysés pour construire une stratégie nutritionnelle personnalisée, et non un protocole standard. L’objectif est de soutenir la performance durablement, en évitant les approches génériques qui ignorent les contraintes propres à chaque sportif."
		]
	},
	{
		q: "Quelle est la meilleure nutrition sportive ?",
		a: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Il n’existe pas de ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-bold text-fg",
					children: "meilleure nutrition sportive"
				}),
				" ",
				"universelle. Ce qui fonctionne pour un sportif peut limiter un autre. La",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-bold text-fg",
					children: "nutrition du sport"
				}),
				" la plus efficace est celle qui s’adapte au fonctionnement réel de la personne, à sa discipline, à sa charge d’entraînement et à ses objectifs."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Une ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-bold text-fg",
					children: "nutrition du sportif"
				}),
				" performante ne repose pas sur un modèle unique de calories ou de macros. Elle prend en compte le profil de l'athlète et sa réponse à l'effort. Sont pris en compte l’hydratation, la récupération, l’énergie disponible et la composition corporelle. Elle évolue avec la progression et les échéances, au lieu de rester figée."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Chez StrongDiet, la meilleure nutrition sportive est celle qui se construit comme une",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-bold text-fg",
					children: "stratégie individualisée"
				}),
				". Elle permet d’optimiser la performance durablement, sans protocoles génériques ni approches identiques pour tous les sportifs. La précision vient de l’analyse, pas d’un plan standard."
			] })
		]
	},
	{
		q: "Comment adapter sa nutrition à sa discipline sportive ?",
		a: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Adapter sa nutrition à sa ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-bold text-fg",
					children: "discipline sportive"
				}),
				" ",
				"commence par analyser les exigences spécifiques de la pratique : force, puissance, endurance, catégorie de poids ou efforts hybrides. La",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-bold text-fg",
					children: "nutrition du sport"
				}),
				" ne peut pas être la même pour un powerlifter, un combattant ou un pratiquant de CrossFit, et pourtant, beaucoup de \"méthodes miracles\" sont proposées sans s'adapter. Et pourquoi ces méthodes ne fonctionnent pas ? Chaque discipline impose des contraintes différentes sur l’énergie, la récupération, la réponse à la nutrition et la composition corporelle."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"La ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-bold text-fg",
					children: "nutrition du sportif"
				}),
				" s’ajuste ensuite au volume d’entraînement, aux échéances et au fonctionnement individuel. Les glucides, les protéines, l’hydratation et le timing des apports doivent correspondre à la réalité des séances, pas à un modèle général. L’objectif est de soutenir la performance sans créer de déséquilibres."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Chez StrongDiet, cette adaptation se construit comme une",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-bold text-fg",
					children: "stratégie personnalisée"
				}),
				". Elle évolue avec la progression et les contraintes du sportif, pour que l’alimentation serve réellement les exigences de sa discipline."
			] })
		]
	},
	{
		q: "Faut-il un plan alimentaire pour progresser en sport ?",
		a: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Un ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-bold text-fg",
					children: "plan alimentaire"
				}),
				" peut aider à structurer les apports, mais il ne suffit pas à lui seul pour progresser. La",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-bold text-fg",
					children: "nutrition du sport"
				}),
				" devient réellement efficace lorsqu’elle s’inscrit dans une stratégie adaptée au fonctionnement du sportif, à sa discipline et à ses objectifs. Un plan figé ignore souvent l’évolution de la charge, de la récupération et des contraintes individuelles."
			] }),
			"Le plan alimentaire en nutrition du sport doit pouvoir s’ajuster. Les retours du sportif, ou sportive, ses sensations, les performances, le poids et la récupération sont des pivots à cette adaptation.",
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Chez StrongDiet, le plan alimentaire n’est que la traduction concrète d’une",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-bold text-fg",
					children: "stratégie nutritionnelle"
				}),
				" qui s'est affinée au fil de l'accompagnement. Il sert de support, pas de solution unique. Cette approche permet d’optimiser la performance durablement, en adaptant l’alimentation au fur et à mesure de la progression."
			] })
		]
	},
	{
		q: "Comment optimiser sa nutrition pour la performance sportive ?",
		a: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Optimiser sa nutrition pour la ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-bold text-fg",
					children: "performance sportive"
				}),
				" ",
				"repose sur une adaptation précise aux charges, à la récupération et aux échéances. Au haut niveau, les athlètes ajustent leurs apports, leur hydratation et leurs protocoles selon les réponses de leur organisme et les résultats observés. La",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-bold text-fg",
					children: "nutrition du sport"
				}),
				" ne se résume pas à un volume de calories ou de protéines. Elle vise à soutenir l’énergie disponible, la composition corporelle et la capacité à enchaîner les efforts."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"La ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-bold text-fg",
					children: "nutrition du sportif"
				}),
				" gagne en efficacité lorsqu’elle est construite à partir du fonctionnement réel, et non d’un modèle standard. Cette précision stratégique fait la différence lorsque chaque détail compte."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Chez StrongDiet, cette approche se traduit par deux formats. La",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-bold text-fg",
					children: "consultation individuelle"
				}),
				" permet de traiter un objectif précis et de poser des consignes personnalisées. La",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-bold text-fg",
					children: "Préparation nutritionnelle A2P®"
				}),
				" construit un suivi planifié et renforcé, avec des protocoles adaptés au projet sportif, que le sportif conserve après l’accompagnement."
			] })
		]
	}
];
function BlockClose() {
	const [open, setOpen] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"data-block": "10",
		className: "bg-ink px-5 py-16 text-fg sm:px-8 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center font-display text-5xl font-bold tracking-tight sm:text-7xl",
				children: "FAQ"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 border-t border-white/20",
				children: questions.map((item, index) => {
					const isOpen = open === index;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-white/20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-expanded": isOpen,
							onClick: () => setOpen(isOpen ? null : index),
							className: "flex w-full items-center justify-between gap-6 py-5 text-left font-display text-lg font-semibold sm:text-2xl",
							children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 text-2xl font-light text-mustard",
								"aria-hidden": "true",
								children: isOpen ? "−" : "+"
							})]
						}) }), isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-4 pb-6",
							children: item.a.map((paragraph, paragraphIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base leading-relaxed text-white/80",
								children: paragraph
							}, paragraphIndex))
						}) : null]
					}, item.q);
				})
			})]
		})
	});
}
var OBJECTS = [
	"Prise de rendez-vous",
	"Préparation compétition",
	"Prise de masse / sèche",
	"Partenariat",
	"Autre"
];
function FieldIcon({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-mustard",
		children
	});
}
var control = "w-full rounded-lg border border-white/25 bg-ink px-3 py-3 pl-11 text-base text-fg outline-none placeholder:text-white/40 focus-visible:border-mustard";
function BlockContact() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [error, setError] = (0, import_react.useState)("");
	async function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const name = String(data.get("name") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();
		const objet = String(data.get("objet") ?? "").trim();
		const message = String(data.get("message") ?? "").trim();
		const consent = form.elements.namedItem("consent")?.checked;
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		"data-block": "8",
		className: "relative scroll-mt-20 overflow-hidden bg-ink px-5 pb-20 pt-16 text-fg sm:px-8 sm:pb-28 sm:pt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-center font-display text-4xl font-bold uppercase leading-none tracking-[0.04em] sm:text-6xl lg:whitespace-nowrap lg:text-[clamp(2rem,3.6vw,3.75rem)]",
					children: "Formulaire de contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 whitespace-nowrap text-center text-[clamp(0.68rem,3.35vw,1.05rem)] font-light sm:whitespace-normal sm:text-2xl lg:text-center",
					style: { fontFamily: "\"Calibri Light\", Calibri, sans-serif" },
					children: "Prends contact avec moi pour aller plus loin."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-5 h-px w-40 bg-mustard",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 rounded-2xl border border-white/20 bg-black/50 p-5 sm:p-8",
					children: status === "sent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-10 text-center font-display text-2xl font-semibold",
						role: "status",
						children: "Merci, je te réponds sous 48h."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "flex flex-col gap-6",
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
								value: "Contact général - StrongDiet"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								name: "botcheck",
								className: "hidden",
								tabIndex: -1,
								autoComplete: "off",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-xs font-semibold uppercase tracking-[0.14em]",
									children: ["Prénom & nom ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-mustard",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative mt-2 block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldIcon, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										viewBox: "0 0 24 24",
										className: "size-5",
										"aria-hidden": "true",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "12",
											cy: "8",
											r: "3.2",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "1.7"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M5.5 19.2c.8-3.2 3.2-4.8 6.5-4.8s5.7 1.6 6.5 4.8",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "1.7",
											strokeLinecap: "round"
										})]
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "name",
										autoComplete: "name",
										placeholder: "Votre prénom et nom",
										className: control
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-xs font-semibold uppercase tracking-[0.14em]",
									children: ["Email ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-mustard",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative mt-2 block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldIcon, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										viewBox: "0 0 24 24",
										className: "size-5",
										"aria-hidden": "true",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "3.5",
											y: "5.5",
											width: "17",
											height: "13",
											rx: "1.5",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "1.7"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "m4 7 8 6 8-6",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "1.7"
										})]
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "email",
										type: "email",
										autoComplete: "email",
										placeholder: "Votre adresse email (ex: nom@exemple.fr)",
										className: control
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-6 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-xs font-semibold uppercase tracking-[0.14em]",
										children: "Téléphone"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative mt-2 block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldIcon, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											viewBox: "0 0 24 24",
											className: "size-5",
											"aria-hidden": "true",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												d: "M8 4.5h2.2l1.1 3.2-1.6 1a12 12 0 0 0 5.6 5.6l1-1.6 3.2 1.1V16a2 2 0 0 1-2.2 2A14.5 14.5 0 0 1 6 6.7 2 2 0 0 1 8 4.5Z",
												fill: "none",
												stroke: "currentColor",
												strokeWidth: "1.7",
												strokeLinejoin: "round"
											})
										}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "phone",
											type: "tel",
											autoComplete: "tel",
											placeholder: "Votre numéro de téléphone (facultatif)",
											className: control
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-xs font-semibold uppercase tracking-[0.14em]",
										children: ["Objet ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-mustard",
											children: "*"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative mt-2 block",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldIcon, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												viewBox: "0 0 24 24",
												className: "size-5",
												"aria-hidden": "true",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													d: "M6 7.5h12v8.2H9.2L6 18.2V7.5Z",
													fill: "none",
													stroke: "currentColor",
													strokeWidth: "1.7",
													strokeLinejoin: "round"
												})
											}) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												name: "objet",
												defaultValue: "",
												className: `${control} appearance-none pr-10`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													disabled: true,
													children: "Sélectionnez un objet"
												}), OBJECTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: item,
													children: item
												}, item))]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-mustard",
												"aria-hidden": "true",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													viewBox: "0 0 24 24",
													className: "size-4",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														d: "m6 9 6 6 6-6",
														fill: "none",
														stroke: "currentColor",
														strokeWidth: "1.8",
														strokeLinecap: "round"
													})
												})
											})
										]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-xs font-semibold uppercase tracking-[0.14em]",
									children: ["Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-mustard",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative mt-2 block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pointer-events-none absolute left-3.5 top-3.5 text-mustard",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											viewBox: "0 0 24 24",
											className: "size-5",
											"aria-hidden": "true",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												d: "M5 19.5 8.2 16H19a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 19 4H5.5A1.5 1.5 0 0 0 4 5.5v12.2Z",
												fill: "none",
												stroke: "currentColor",
												strokeWidth: "1.7"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												d: "M8 9h8M8 12.5h5",
												fill: "none",
												stroke: "currentColor",
												strokeWidth: "1.7",
												strokeLinecap: "round"
											})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "message",
										rows: 6,
										placeholder: "Votre message... (détails, objectifs, questions...)",
										className: `${control} min-h-36 resize-y py-3`
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										name: "consent",
										value: "oui",
										className: "mt-0.5 size-5 shrink-0 accent-mustard"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm font-semibold leading-snug sm:text-base",
										children: [
											"J'accepte que mes données soient utilisées pour être recontacté(e)",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-mustard",
												children: "*"
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 pl-8 text-sm text-white/70",
									children: "Conformément à notre politique de confidentialité"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 pl-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/confidentialite",
										className: "text-sm font-semibold text-mustard underline underline-offset-4",
										children: "voir la politique de confidentialité"
									})
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									name: "newsletter",
									value: "Oui",
									className: "mt-0.5 size-5 shrink-0 accent-mustard"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold leading-snug sm:text-base",
									children: "Je souhaite recevoir la newsletter StrongDiet (conseils nutrition du sport, actualités et contenus exclusifs). Désinscription possible à tout moment."
								})]
							}) }),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-[#ffb4b0]",
								role: "alert",
								children: error
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: status === "sending",
								className: "flex h-14 items-center justify-center rounded-xl bg-mustard text-base font-semibold text-ink hover:opacity-90 disabled:opacity-60",
								children: status === "sending" ? "Envoi…" : "Envoyer"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mx-auto mt-8 flex max-w-xl items-start justify-center gap-3 text-center text-sm text-white/75",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						viewBox: "0 0 24 24",
						className: "mt-0.5 size-7 shrink-0 text-mustard",
						"aria-hidden": "true",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M12 3.2 19 6v6.2c0 4.2-2.8 7.2-7 8.6-4.2-1.4-7-4.4-7-8.6V6l7-2.8Z",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.6"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "m8.5 12 2.2 2.2 4.3-4.4",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.6",
							strokeLinecap: "round"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Vos données sont sécurisées et utilisées uniquement pour vous recontacter.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Vous pouvez exercer vos droits à tout moment."
					] })]
				})
			]
		})
	});
}
function BlockMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"data-block": "9",
		className: "bg-white px-5 pb-16 pt-12 text-ink [border-radius:50%_50%_50%_50%/1.75rem_1.75rem_1.75rem_1.75rem] sm:px-8 sm:pb-20 sm:pt-16 sm:[border-radius:50%_50%_50%_50%/2.25rem_2.25rem_2.25rem_2.25rem]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-4xl font-bold tracking-[0.04em] text-ink sm:text-6xl lg:text-8xl",
					children: "STRONGDIET"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-[0.7rem] font-medium uppercase tracking-[0.28em] text-ink sm:text-sm lg:text-2xl lg:tracking-[0.32em]",
					children: "Performance & nutrition"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/logo-mark.png",
					alt: "",
					className: "mx-auto mt-6 h-52 w-auto sm:h-72 lg:mt-8 lg:h-[25rem]"
				})
			]
		})
	});
}
function Check({ children, light }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "flex items-start gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-field text-snow",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				className: "size-3.5",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M5 12.5 9.2 17 19 7",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2.6",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: light ? "text-fg/90" : "text-muted",
			children
		})]
	});
}
function BlockOffers() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto mt-[2.45rem] grid max-w-6xl gap-6 sm:mt-14 lg:mt-16 lg:grid-cols-2 lg:items-stretch lg:gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "flex flex-col rounded-[1.4rem] border border-ink/8 bg-snow p-6 shadow-[0_16px_40px_rgb(10_10_10_/_0.06)] sm:p-8 lg:p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-11 place-items-center rounded-full border border-gold text-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							viewBox: "0 0 24 24",
							className: "size-5",
							"aria-hidden": "true",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "12",
								cy: "8",
								r: "3.2",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.7"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M5.5 19.2c.8-3.2 3.2-4.8 6.5-4.8s5.7 1.6 6.5 4.8",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.7",
								strokeLinecap: "round"
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs font-medium uppercase tracking-[0.16em] text-muted",
						children: "Suivi personnalisé"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-balance mt-6 font-display text-2xl font-semibold leading-tight tracking-tight text-ink-fg sm:text-4xl",
					children: "Consultation individuelle"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-base italic text-muted sm:text-xl",
					children: "Une stratégie adaptée. Un suivi à ton rythme."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm leading-relaxed text-muted sm:text-base",
					children: "Un suivi de plusieurs consultations d’une heure pour travailler précisément sur un besoin : performance, énergie, récupération, digestion, gestion du poids ou problématique spécifique à ta discipline."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "my-6 h-px bg-gold",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-base font-semibold text-ink-fg sm:text-lg",
					children: "Pendant la consultation :"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col gap-3 text-sm leading-relaxed sm:text-base",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { children: "Analyse de ton profil sportif et de tes objectifs" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { children: "Conseils nutritionnels individualisés" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { children: "Ajustements adaptés à ta pratique sportive" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { children: "Documents et protocoles spécifiques selon tes besoins" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "my-6 h-px bg-gold",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-ink-fg sm:text-base",
					children: "On programme le suivi après consultation, à ton rythme, selon tes objectifs."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto pt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 rounded-2xl bg-paper px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							viewBox: "0 0 24 24",
							className: "size-7 shrink-0 text-field",
							"aria-hidden": "true",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "12",
								cy: "12",
								r: "8",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.7"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M12 8v4.2l2.6 1.6",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.7",
								strokeLinecap: "round"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-lg text-ink-fg sm:text-xl",
							children: ["1 heure — ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl font-semibold sm:text-3xl",
								children: "79 €"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.bookingUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-4 flex h-14 items-center justify-center gap-2 rounded-xl bg-forest text-base font-semibold text-fg hover:bg-forest-hover",
						children: ["Réserver ma consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "→"
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "flex flex-col rounded-[1.4rem] bg-ink p-6 text-fg shadow-[0_16px_40px_rgb(10_10_10_/_0.18)] sm:p-8 lg:p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-11 place-items-center rounded-full bg-gold text-ink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							viewBox: "0 0 24 24",
							className: "size-5",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "m12 3.2 2.1 4.6 5 .6-3.7 3.4.9 5-4.3-2.4-4.3 2.4.9-5L4.9 8.4l5-.6L12 3.2Z",
								fill: "currentColor"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs font-medium uppercase tracking-[0.16em] text-gold",
						children: "Offre signature"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
					className: "text-balance mt-6 font-display text-xl font-semibold leading-tight tracking-tight sm:text-4xl xl:whitespace-nowrap",
					children: ["Préparation Nutritionnelle ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: "A2P"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base font-medium italic leading-snug sm:text-xl",
					children: "La préparation en nutrition du sport pour une optimisation durable."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4 text-sm leading-relaxed text-fg/85 sm:text-base",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Ce programme est conçu pour atteindre tes objectifs et va plus loin : il construit une préparation nutritionnelle intégrale, où toute ta nutrition est pensée et planifiée, phase après phase, de l’entraînement jusqu’à l’échéance." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "L’accompagnement a une fin, mais tu repars avec plus : un programme nutritionnel sur mesure, des stratégies et des protocoles personnalisés, construits et éprouvés tout au long de ta préparation." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "my-6 h-px bg-gold",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-base font-semibold text-gold sm:text-lg",
					children: "Pendant ta préparation nutritionnelle :"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col gap-3 text-sm leading-relaxed sm:text-base",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							light: true,
							children: "Diagnostic complet de ton projet sportif"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							light: true,
							children: "Planification précise de toute ta préparation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							light: true,
							children: "Suivi renforcé, continu entre les rendez-vous"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							light: true,
							children: "Élaboration de stratégies et protocoles nutritionnels"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "my-6 h-px bg-gold",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium leading-relaxed text-gold sm:text-base",
					children: "Une nutrition optimisée, des stratégies et protocoles acquis à vie."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto pt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 rounded-2xl border border-gold px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							viewBox: "0 0 24 24",
							className: "size-7 shrink-0 text-gold",
							"aria-hidden": "true",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M7 3.5h7l4 4V20a1.2 1.2 0 0 1-1.2 1.2H7A1.2 1.2 0 0 1 5.8 20V4.7A1.2 1.2 0 0 1 7 3.5Z",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.6"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M14 3.8V8h4.1M8.2 12.2h7.6M8.2 15.6h7.6",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.6",
								strokeLinecap: "round"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-lg sm:text-xl",
							children: [
								"Sur devis :",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-gold",
									children: "À partir de 307 €"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/preparation-a2p",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-4 flex h-14 items-center justify-center gap-2 rounded-xl bg-mustard text-base font-semibold text-ink hover:opacity-90",
						children: ["Commencer ma préparation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "→"
						})]
					})]
				})
			]
		})]
	});
}
function BlockStart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"data-block": "7",
		id: "produits",
		className: "scroll-mt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-field px-3 pb-8 pt-8 text-center text-snow sm:px-8 sm:py-20 lg:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "commencer",
						className: "mx-auto max-w-6xl scroll-mt-16 font-display text-[2rem] font-bold leading-snug tracking-display sm:text-pair lg:text-[3.35rem]",
						children: block7.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-[1.4rem] h-px w-16 bg-snow sm:mt-10 lg:w-36",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-pretty mx-auto mt-[1.4rem] max-w-4xl font-display text-lg italic leading-snug sm:mt-10 sm:text-2xl lg:max-w-none lg:whitespace-nowrap lg:text-[clamp(1.75rem,3.1vw,2.25rem)]",
						children: "Consultations individuelles et préparation nutritionnelle intégrée"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative -mt-px h-12 bg-snow sm:h-16 lg:h-20",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-lime [clip-path:polygon(0_0,100%_0,100%_88%,49%_38%,0_100%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-field [clip-path:polygon(0_0,74%_0,0_100%)]" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-snow px-5 pb-16 pt-8 text-ink-fg sm:px-8 sm:py-20 lg:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex max-w-3xl flex-col gap-6 text-base leading-relaxed sm:text-2xl lg:max-w-5xl lg:gap-8 lg:text-3xl",
						children: block7.body.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph.map((part) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn(part.bold && "font-extrabold", part.lime && "text-field"),
							children: part.text
						}, part.text)) }, paragraph[0].text))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-[1.75rem] h-px w-16 bg-gold sm:mt-12 lg:w-48",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-[1.75rem] text-center font-display text-3xl font-semibold tracking-tight text-ink-fg sm:mt-12 sm:text-4xl lg:text-6xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold",
							children: "Deux façons"
						}), " de commencer."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-[1.75rem] h-px w-16 bg-gold sm:mt-12 lg:w-48",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockOffers, {})
				]
			})
		]
	});
}
var senseTone = {
	fg: "text-fg",
	lime: "text-field"
};
function BlockWhy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"data-block": "5",
		className: "relative bg-paper text-ink-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-stretch lg:gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 flex-col justify-center px-4 pb-8 pt-20 sm:px-8 lg:py-16 lg:pl-16 lg:pr-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mb-8 h-px w-12 bg-gold lg:mx-0",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-center font-display text-2xl font-semibold leading-snug tracking-display lg:text-left lg:whitespace-nowrap lg:text-[clamp(1.65rem,2.5vw,2.25rem)]",
							children: block5.title.map((part) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn(part.bold && "font-bold", part.lime && "text-field"),
								children: part.text
							}, part.text))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-base leading-relaxed sm:text-xl",
							children: block5.body.map((part) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [part.breakBefore ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn(part.bold && "font-bold", part.ash && "text-cendre"),
								children: part.text
							})] }, part.text))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/athlete.jpg",
					alt: "",
					className: "h-52 w-full object-cover object-bottom lg:h-full lg:min-h-96 lg:w-full lg:object-center"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-ink px-4 py-16 text-fg sm:px-8 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center font-display text-2xl font-semibold leading-snug tracking-display lg:whitespace-nowrap lg:text-[clamp(2.15rem,3.5vw,2.85rem)]",
					children: block5.senseTitle.map((part) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: senseTone[part.tone],
						children: part.text
					}, part.text))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute left-0 top-0 h-[46%] w-[clamp(1.15rem,calc((100%-54rem)/2-0.75rem),13rem)] bg-gold [clip-path:polygon(0_0,100%_0,0_100%)] sm:h-[64%] lg:h-[78%]",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute right-0 top-0 h-[46%] w-[clamp(1.15rem,calc((100%-54rem)/2-0.75rem),13rem)] bg-gold [clip-path:polygon(0_0,100%_0,100%_100%)] sm:h-[64%] lg:h-[78%]",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-6xl px-8 py-20 sm:px-10 sm:py-28 lg:w-fit lg:max-w-[calc(100%-4rem)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-pretty text-center font-display text-xl font-semibold tracking-tight sm:whitespace-nowrap sm:text-2xl lg:text-4xl",
								children: block5.kicker.map((part) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn(part.gold && "text-gold"),
									children: part.text
								}, part.text))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto mt-6 h-px w-12 bg-gold lg:mt-10 lg:w-36",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-6 max-w-3xl text-center font-display text-xl font-semibold leading-snug tracking-tight sm:text-2xl lg:mt-10 lg:max-w-none lg:text-3xl",
								children: block5.senseLead
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-6 max-w-3xl text-left text-base leading-relaxed sm:text-xl lg:mx-0 lg:w-0 lg:min-w-full lg:max-w-none",
								children: block5.senseBody.map((part) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn(part.bold && "font-bold", part.semibold && "font-semibold"),
									children: part.text
								}, part.text))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-6 max-w-3xl text-center text-xl font-semibold leading-snug sm:text-2xl lg:max-w-none lg:text-3xl",
								children: block5.senseClose.map((part) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn(part.bold && "font-bold", part.lime && "text-field"),
									children: part.text
								}, part.text))
							})
						]
					})
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-ink text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockHero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockAxis, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockBook, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockBio, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockWhy, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockPillars, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockStart, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockContact, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockMark, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockClose, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, { tone: "paper" })
		]
	});
}
//#endregion
export { Home as component };
