import { f as rollLabel } from "./catalog-vhTXU1YB.mjs";
import { n as formatPrice, t as cn } from "./utils-CQsynOo5.mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-jSqjPHD7.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/product/$slug",
		params: { slug: product.slug },
		className: cn("group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-[border-color,transform] duration-200 ease-[var(--ease-out)] hover:border-ink/25", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] overflow-hidden bg-paper-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: product.name,
				className: "size-full object-cover transition-transform duration-500 ease-[var(--ease-smooth-out)] group-hover:scale-[1.03]"
			}), product.onOrder && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-3 top-3 rounded-sm bg-paper/90 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-ink",
				children: "Под заказ"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-2 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.16em] text-stone",
					children: product.sku
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-sans text-base font-medium leading-snug text-ink",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-stone",
					children: [
						product.density,
						" г/м²",
						product.widthCm ? ` · ${product.widthCm} см` : "",
						` · ${rollLabel(product)}`
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-auto pt-2 text-sm font-medium tabular-nums",
					children: product.price != null ? formatPrice(product.price, product.priceUnit) : "Цена по запросу"
				})
			]
		})]
	});
}
//#endregion
export { ProductCard as t };
