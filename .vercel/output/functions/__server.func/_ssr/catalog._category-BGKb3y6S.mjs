import { c as getCategory } from "./catalog-vhTXU1YB.mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$1 } from "./router-De-bq1iQ.mjs";
import { t as CatalogGrid } from "./catalog-grid-B0xJAGgm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog._category-BGKb3y6S.js
var import_jsx_runtime = require_jsx_runtime();
function CategoryPage() {
	const { category } = Route$1.useParams();
	const data = getCategory(category);
	if (!data) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-4 py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Категория не найдена"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/catalog",
			className: "mt-4 inline-block text-sm underline",
			children: "К ассортименту"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-ink text-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: data.image,
				alt: "",
				className: "absolute inset-0 size-full object-cover opacity-40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-4 py-16 sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.2em] text-paper/65",
						children: data.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl tracking-tight sm:text-5xl",
						children: data.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-base text-paper/80",
						children: data.blurb
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogGrid, { category: data.id })
	})] });
}
//#endregion
export { CategoryPage as component };
