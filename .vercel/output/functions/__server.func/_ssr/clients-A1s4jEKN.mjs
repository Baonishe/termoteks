import { r as CLIENTS } from "./catalog-vhTXU1YB.mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Button } from "./router-De-bq1iQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clients-A1s4jEKN.js
var import_jsx_runtime = require_jsx_runtime();
function ClientsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-14 sm:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.2em] text-stone",
				children: "Сотрудничество"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight",
				children: "Для клиентов"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-base leading-relaxed text-stone",
				children: "С 1993 года материалы TERMOTEKS идут на российские обувные и швейные производства. Постоянным клиентам — скидки. Если хотите прислать фото изделий на витрину, напишите нам."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-4 sm:grid-cols-3",
				children: CLIENTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-line bg-surface px-5 py-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl tracking-tight",
						children: c.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-stone",
						children: c.note
					})]
				}, c.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 overflow-hidden rounded-xl border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/rolls-mixed.jpg",
					alt: "Готовые рулоны на складе",
					className: "aspect-[21/9] w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/request",
						children: "Оставить заявку"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/catalog",
						children: "К ассортименту"
					})
				})]
			})
		]
	});
}
//#endregion
export { ClientsPage as component };
