import { i as __toESM } from "../_runtime.mjs";
import { a as FAQ } from "./catalog-vhTXU1YB.mjs";
import { t as cn } from "./utils-CQsynOo5.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ChevronDown } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-Bon-PlJt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FaqPage() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-14 sm:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.2em] text-stone",
				children: "Вопросы"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight",
				children: "FAQ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 divide-y divide-line border-y border-line",
				children: FAQ.map((item, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left",
						"aria-expanded": isOpen,
						onClick: () => setOpen(isOpen ? null : i),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base font-medium",
							children: item.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-5 shrink-0 text-stone transition-transform duration-200", isOpen && "rotate-180") })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("grid transition-[grid-template-rows] duration-200 ease-[var(--ease-out)]", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "overflow-hidden pb-4 text-sm leading-relaxed text-stone",
							children: item.a
						})
					})] }, item.q);
				})
			})
		]
	});
}
//#endregion
export { FaqPage as component };
