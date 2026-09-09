import { i as COMPANY, t as CARRIERS } from "./catalog-vhTXU1YB.mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/delivery-Dtjeswqt.js
var import_jsx_runtime = require_jsx_runtime();
function DeliveryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-14 sm:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.2em] text-stone",
				children: "Логистика"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight",
				children: "Доставка и оплата"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-base leading-relaxed text-stone",
				children: "Компания ТЕРМОТЕКС сотрудничает с крупнейшими транспортными компаниями России. Мы оперативно отправим заказ в любой регион. Оплату до филиала ТК берём на себя — вы оплачиваете только доставку от филиала транспортной компании в Москве до вашего города."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-2xl",
				children: "Транспортные компании"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: CARRIERS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-lg border border-line bg-surface px-4 py-4 text-sm",
					children: c
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-stone",
				children: [
					"Стоимость плеча из Москвы можно узнать на сайте выбранной ТК или у нас:",
					" ",
					COMPANY.phones[0].tel,
					" (",
					COMPANY.phones[0].name,
					"), ",
					COMPANY.phones[1].tel,
					" (",
					COMPANY.phones[1].name,
					"), ",
					COMPANY.email,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-2xl",
				children: "Самовывоз"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-base leading-relaxed text-stone",
				children: [
					COMPANY.address,
					". Понедельник–пятница. Часы работы склада: ",
					COMPANY.warehouseHours,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-2xl",
				children: "Оплата"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-base leading-relaxed text-stone",
				children: "Безналичный расчёт. Постоянным клиентам — скидки."
			})
		]
	});
}
//#endregion
export { DeliveryPage as component };
