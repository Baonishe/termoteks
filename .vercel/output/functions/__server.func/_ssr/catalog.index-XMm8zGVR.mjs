import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CatalogGrid } from "./catalog-grid-B0xJAGgm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog.index-XMm8zGVR.js
var import_jsx_runtime = require_jsx_runtime();
function CatalogIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.2em] text-stone",
				children: "Каталог"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight",
				children: "Ассортимент"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-base text-stone",
				children: "Цены указаны за квадратный или погонный метр. Минимальная партия — один рулон. Скидки постоянным клиентам."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogGrid, {})
			})
		]
	});
}
//#endregion
export { CatalogIndex as component };
