import { i as COMPANY, n as CATEGORIES, s as PRODUCTS } from "./catalog-vhTXU1YB.mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as Button } from "./router-De-bq1iQ.mjs";
import { t as ProductCard } from "./product-card-jSqjPHD7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BNg9u6rb.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const popular = PRODUCTS.filter((p) => p.popular);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[78vh] overflow-hidden bg-ink text-paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero.jpg",
					alt: "Склад рулонов TERMOTEKS в Любучанах",
					className: "absolute inset-0 size-full object-cover opacity-55"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] uppercase tracking-[0.28em] text-paper/70",
							children: [
								"Производство с ",
								COMPANY.founded,
								" года · ",
								COMPANY.addressShort
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl",
							children: "Термоклеевые материалы из России"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-base leading-relaxed text-paper/80 sm:text-lg",
							children: "Тканые, нетканые, трикотажные основы и поролон. Низкотемпературный клей EVA, собственный склад, отгрузка по всей стране."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "invert",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/catalog",
									children: "Смотреть ассортимент"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "border-paper/30 text-paper hover:bg-paper/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/request",
									children: "Оставить заявку"
								})
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl grid-cols-2 gap-px bg-line sm:grid-cols-4",
				children: [
					["1993", "год запуска производства"],
					["4", "типа основ"],
					["1 рулон", "минимальная партия"],
					["РФ", "доставка до терминала ТК"]
				].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-paper px-5 py-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl tracking-tight",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-stone",
						children: v
					})]
				}, k))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.2em] text-stone",
					children: "Популярная продукция"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl tracking-tight sm:text-4xl",
					children: "В наличии на складе"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/catalog",
					className: "hidden items-center gap-1 text-sm uppercase tracking-[0.12em] text-ink sm:inline-flex",
					children: ["Весь каталог ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: popular.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-px bg-paper/10 lg:grid-cols-2",
				children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/catalog/$category",
					params: { category: c.id },
					className: "group relative min-h-72 overflow-hidden bg-ink",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.image,
							alt: "",
							className: "absolute inset-0 size-full object-cover opacity-45 transition-transform duration-500 group-hover:scale-[1.04]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex h-full min-h-72 flex-col justify-end p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-[0.18em] text-paper/60",
									children: c.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-3xl tracking-tight",
									children: c.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-md text-sm leading-relaxed text-paper/75",
									children: c.blurb
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-4 inline-flex items-center gap-1 text-sm uppercase tracking-[0.12em]",
									children: ["Смотреть ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							]
						})
					]
				}, c.id))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:py-24 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/factory.jpg",
				alt: "Производство термоклеевых материалов",
				className: "aspect-[4/3] w-full rounded-xl object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.2em] text-stone",
					children: "О нас"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl tracking-tight sm:text-4xl",
					children: "Семейное производство в Чеховском районе"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 text-base leading-relaxed text-stone",
					children: [
						COMPANY.legal,
						" — один из крупнейших производителей термоклеевых прокладочных материалов в центральном районе России. Основатели запустили своё производство в",
						" ",
						COMPANY.founded,
						" году. Материалы тогда же составили конкуренцию импорту — с нами работают Юничел, Вестфалика, Калужская обувная и другие фабрики."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						children: "Подробнее о компании"
					})
				})
			] })]
		})
	] });
}
//#endregion
export { Home as component };
