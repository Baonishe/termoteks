import { o as POSTS } from "./catalog-vhTXU1YB.mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Route$3 } from "./router-De-bq1iQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-Cs5so5ZY.js
var import_jsx_runtime = require_jsx_runtime();
function PostPage() {
	const { slug } = Route$3.useParams();
	const post = POSTS.find((p) => p.slug === slug);
	if (!post) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-4 py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Запись не найдена"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/blog",
			className: "mt-4 inline-block text-sm underline",
			children: "К блогу"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-stone",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/blog",
						className: "hover:text-ink",
						children: "Блог"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-2",
						children: "/"
					}),
					post.kicker
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-4xl tracking-tight",
				children: post.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-mist",
				children: post.date
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: post.image,
				alt: "",
				className: "mt-8 aspect-[16/9] w-full rounded-xl object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-4 text-base leading-relaxed text-stone",
				children: post.body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 24)))
			})
		]
	});
}
//#endregion
export { PostPage as component };
