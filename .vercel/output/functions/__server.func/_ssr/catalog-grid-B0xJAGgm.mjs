import { i as __toESM } from "../_runtime.mjs";
import { n as CATEGORIES, u as getProducts } from "./catalog-vhTXU1YB.mjs";
import { t as cn } from "./utils-CQsynOo5.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Search } from "../_libs/lucide-react.mjs";
import { t as ProductCard } from "./product-card-jSqjPHD7.mjs";
import { t as Input } from "./input-BqaWT8Tc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-grid-B0xJAGgm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function filterClass(active) {
	return cn("inline-flex h-10 items-center rounded-md border px-3 text-xs uppercase tracking-[0.12em] transition-colors", active ? "border-ink bg-ink text-paper" : "border-line bg-surface text-stone hover:border-ink/30 hover:text-ink");
}
function CatalogGrid({ category }) {
	const [q, setQ] = (0, import_react.useState)("");
	const [availability, setAvailability] = (0, import_react.useState)("all");
	const products = (0, import_react.useMemo)(() => getProducts({
		category,
		q,
		availability
	}), [
		category,
		q,
		availability
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/catalog",
				className: filterClass(!category),
				children: "Все"
			}), CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/catalog/$category",
				params: { category: c.id },
				className: filterClass(category === c.id),
				children: c.short
			}, c.id))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-w-56 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-mist" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Артикул или название",
					className: "pl-10",
					"aria-label": "Поиск по каталогу"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex rounded-md border border-line bg-surface p-1",
				children: [
					["all", "Все"],
					["stock", "В наличии"],
					["order", "Под заказ"]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setAvailability(id),
					className: cn("h-9 rounded-sm px-3 text-xs uppercase tracking-[0.12em] transition-colors", availability === id ? "bg-ink text-paper" : "text-stone hover:text-ink"),
					children: label
				}, id))
			})]
		})]
	}), products.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-xl border border-line bg-surface px-5 py-12 text-center text-stone",
		children: "Ничего не нашли. Попробуйте другой запрос или напишите нам — подберём аналог."
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
		children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
	})] });
}
//#endregion
export { CatalogGrid as t };
