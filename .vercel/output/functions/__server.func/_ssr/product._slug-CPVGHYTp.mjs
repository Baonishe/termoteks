import { i as __toESM } from "../_runtime.mjs";
import { d as relatedProducts, f as rollLabel, l as getProduct, p as widthLabel } from "./catalog-vhTXU1YB.mjs";
import { n as formatPrice, t as cn } from "./utils-CQsynOo5.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as Button, n as Route, s as useInquiry } from "./router-De-bq1iQ.mjs";
import { t as ProductCard } from "./product-card-jSqjPHD7.mjs";
import { n as Label, t as Input } from "./input-BqaWT8Tc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-CPVGHYTp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AddToRequest({ product }) {
	const add = useInquiry((s) => s.add);
	const [rolls, setRolls] = (0, import_react.useState)(1);
	const [color, setColor] = (0, import_react.useState)(product.colors?.[0]?.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-line bg-surface p-5",
		children: [
			product.colors && product.colors.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Цвет" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: product.colors.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setColor(c.id),
						className: cn("h-10 rounded-md border px-3 text-sm transition-colors", color === c.id ? "border-ink bg-ink text-paper" : "border-line bg-paper text-ink hover:border-ink/30"),
						children: c.name
					}, c.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: `rolls-${product.id}`,
					children: "Количество рулонов"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: `rolls-${product.id}`,
					type: "number",
					min: 1,
					max: 999,
					value: rolls,
					onChange: (e) => setRolls(Math.max(1, Number(e.target.value) || 1)),
					className: "max-w-32 tabular-nums"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "w-full",
				onClick: () => {
					add({
						productId: product.id,
						rolls,
						color
					});
					toast.success("Добавлено в заявку", { description: `${product.sku} · ${rolls} рул.` });
				},
				children: "Добавить в заявку"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs leading-relaxed text-stone",
				children: "Минимальная партия — 1 рулон. После сборки заявки менеджер подтвердит наличие и срок."
			})
		]
	});
}
function ProductPage() {
	const { slug } = Route.useParams();
	const product = getProduct(slug);
	const [active, setActive] = (0, import_react.useState)(0);
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-4 py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Материал не найден"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/catalog",
			className: "mt-4 inline-block text-sm underline",
			children: "К ассортименту"
		})]
	});
	const gallery = product.images;
	const related = relatedProducts(product);
	const img = gallery[Math.min(active, gallery.length - 1)] ?? product.image;
	const specs = [
		["Артикул", product.sku],
		["Основа", product.base],
		["Плотность основы", `${product.density} г/м²`],
		product.glueGsm ? ["Клеевой привес", `${product.glueGsm} г/м²`] : null,
		["Ширина", widthLabel(product)],
		["Рулон", rollLabel(product)],
		product.thicknessMm ? ["Толщина", `${product.thicknessMm} мм`] : null,
		product.twoSided != null ? ["Нанесение", product.twoSided ? "Двухстороннее" : "Одностороннее"] : null,
		["Наличие", product.onOrder ? "Под заказ" : "Со склада"]
	].filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-stone",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/catalog",
						className: "hover:text-ink",
						children: "Ассортимент"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-2",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/catalog/$category",
						params: { category: product.category },
						className: "hover:text-ink",
						children: product.base
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-xl border border-line bg-paper-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img,
						alt: product.name,
						className: "aspect-[4/3] w-full object-cover"
					})
				}), gallery.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid grid-cols-4 gap-2",
					children: gallery.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActive(i),
						className: `overflow-hidden rounded-md border ${i === active ? "border-ink" : "border-line"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: "",
							className: "aspect-[4/3] w-full object-cover"
						})
					}, src + i))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.18em] text-stone",
						children: product.sku
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl tracking-tight sm:text-4xl",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-3xl tabular-nums",
						children: product.price != null ? formatPrice(product.price, product.priceUnit) : "Цена по запросу"
					}),
					product.onOrder && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-stone",
						children: "Позиция изготавливается под заказ."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-8 divide-y divide-line border-y border-line",
						children: specs.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-4 py-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-stone",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-right font-medium",
								children: v
							})]
						}, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddToRequest, { product })
					})
				] })]
			}),
			related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "В той же линейке"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
				})]
			})
		]
	});
}
//#endregion
export { ProductPage as component };
