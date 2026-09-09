import { i as __toESM } from "../_runtime.mjs";
import { n as formatPrice } from "./utils-CQsynOo5.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as Button, o as lineProduct, s as useInquiry } from "./router-De-bq1iQ.mjs";
import { n as Label, r as Textarea, t as Input } from "./input-BqaWT8Tc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/request-B5eWaBg_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RequestPage() {
	const { lines, sent, setRolls, remove, submit } = useInquiry();
	const [doneId, setDoneId] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	function onSubmit(e) {
		e.preventDefault();
		setError(null);
		if (lines.length === 0) {
			setError("Добавьте хотя бы одну позицию из каталога.");
			return;
		}
		const data = new FormData(e.currentTarget);
		const name = String(data.get("name") ?? "").trim();
		const phone = String(data.get("phone") ?? "").trim();
		if (!name || !phone) {
			setError("Укажите имя и телефон.");
			return;
		}
		const inquiry = submit({
			company: String(data.get("company") ?? "").trim(),
			name,
			phone,
			email: String(data.get("email") ?? "").trim(),
			city: String(data.get("city") ?? "").trim(),
			comment: String(data.get("comment") ?? "").trim()
		});
		setDoneId(inquiry.id);
		toast.success("Заявка сохранена");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.2em] text-stone",
				children: "Заказ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight",
				children: "Заявка"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-stone",
				children: "Соберите позиции в каталоге, затем отправьте заявку. Менеджер подтвердит наличие, срок и стоимость доставки. Минимальная партия — 1 рулон."
			}),
			doneId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-xl border border-line bg-surface px-5 py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: "Заявка принята"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-stone",
						children: [
							"Номер ",
							doneId.slice(0, 8),
							". Для отправки на производство позвоните или напишите — черновик сохранён в этом браузере."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-4",
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Контакты"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Позиции"
				}), lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 rounded-xl border border-dashed border-line px-5 py-10 text-sm text-stone",
					children: [
						"Пока пусто.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/catalog",
							className: "text-ink underline",
							children: "Открыть ассортимент"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 divide-y divide-line border-y border-line",
					children: lines.map((line) => {
						const p = lineProduct(line);
						if (!p) return null;
						const color = p.colors?.find((c) => c.id === line.color);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-4 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: color?.image ?? p.image,
									alt: "",
									className: "size-16 rounded-md object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-medium",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-stone",
										children: [
											p.sku,
											color ? ` · ${color.name}` : "",
											p.price != null ? ` · ${formatPrice(p.price, p.priceUnit)}` : ""
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									min: 1,
									value: line.rolls,
									"aria-label": "Рулоны",
									className: "w-20 tabular-nums",
									onChange: (e) => setRolls(p.id, line.color, Math.max(1, Number(e.target.value) || 1))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "text-xs uppercase tracking-[0.12em] text-stone hover:text-ink",
									onClick: () => remove(p.id, line.color),
									children: "Убрать"
								})
							]
						}, `${p.id}-${line.color ?? ""}`);
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "rounded-xl border border-line bg-surface p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "Контакт"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "company",
									children: "Компания"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "company",
									name: "company"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "name",
									children: "Имя"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									name: "name",
									required: true
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "phone",
									children: "Телефон"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "phone",
									name: "phone",
									type: "tel",
									required: true,
									placeholder: "+7"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "email",
									children: "Эл. почта"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									name: "email",
									type: "email"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "city",
									children: "Город доставки"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "city",
									name: "city"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "comment",
									children: "Комментарий"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "comment",
									name: "comment"
								})] })
							]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-ink",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "mt-6 w-full",
							children: "Отправить заявку"
						})
					]
				})]
			}),
			sent.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Отправленные заявки"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm text-stone",
					children: sent.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg border border-line bg-surface px-4 py-3",
						children: [
							new Date(s.createdAt).toLocaleString("ru-RU"),
							" · ",
							s.name,
							" · ",
							s.lines.length,
							" поз."
						]
					}, s.id))
				})]
			})
		]
	});
}
//#endregion
export { RequestPage as component };
