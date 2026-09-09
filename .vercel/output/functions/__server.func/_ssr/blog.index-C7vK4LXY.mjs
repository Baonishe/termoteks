import { o as POSTS } from "./catalog-vhTXU1YB.mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-C7vK4LXY.js
var import_jsx_runtime = require_jsx_runtime();
function BlogIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-14 sm:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.2em] text-stone",
				children: "Журнал"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight",
				children: "Блог"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 md:grid-cols-3",
				children: POSTS.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog/$slug",
					params: { slug: post.slug },
					className: "group overflow-hidden rounded-xl border border-line bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: post.image,
						alt: "",
						className: "aspect-[16/10] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.16em] text-stone",
								children: post.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-xl leading-snug tracking-tight group-hover:underline",
								children: post.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-stone",
								children: post.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xs text-mist",
								children: post.date
							})
						]
					})]
				}, post.slug))
			})
		]
	});
}
//#endregion
export { BlogIndex as component };
