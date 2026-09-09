import { i as COMPANY } from "./catalog-vhTXU1YB.mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Button } from "./router-De-bq1iQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BAy3S15y.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-ink text-paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/workshop.jpg",
					alt: "",
					className: "absolute inset-0 size-full object-cover opacity-40"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-6xl px-4 py-16 sm:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.2em] text-paper/65",
							children: "Связь"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-4xl tracking-tight sm:text-5xl",
							children: "Контакты"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-paper/80",
							children: "Мы будем рады ответить на любой вопрос. Пишите, звоните или соберите заявку на сайте."
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-6 px-4 py-12 lg:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl border border-line bg-surface p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[11px] uppercase tracking-[0.16em] text-stone",
						children: "По вопросам"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-sm",
						children: [COMPANY.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${p.tel.replace(/\s/g, "")}`,
							className: "font-medium hover:underline",
							children: p.tel
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-stone",
							children: [p.name, p.role !== "общий" ? ` · ${p.role}` : ""]
						})] }, p.tel)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${COMPANY.email}`,
							className: "font-medium hover:underline",
							children: COMPANY.email
						}) })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl border border-line bg-surface p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[11px] uppercase tracking-[0.16em] text-stone",
							children: "Адрес"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed",
							children: COMPANY.address
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm text-stone",
							children: [
								"Производство и склад в одном месте, ",
								COMPANY.addressShort,
								"."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl border border-line bg-surface p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[11px] uppercase tracking-[0.16em] text-stone",
							children: "Часы работы"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm",
							children: ["Офис: ", COMPANY.hours]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-stone",
							children: ["Склад: ", COMPANY.warehouseHours]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-stone",
							children: "Выходные: суббота, воскресенье"
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-wrap gap-3 px-4 pb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/request",
					children: "Оставить заявку"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `https://wa.me/${COMPANY.whatsapp}`,
					target: "_blank",
					rel: "noreferrer",
					children: "WhatsApp"
				})
			})]
		})
	] });
}
//#endregion
export { ContactPage as component };
