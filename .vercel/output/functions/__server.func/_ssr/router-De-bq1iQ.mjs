import { i as __toESM } from "../_runtime.mjs";
import { i as COMPANY, n as CATEGORIES, s as PRODUCTS } from "./catalog-vhTXU1YB.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-CQsynOo5.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createFileRoute, b as useRouter, d as HeadContent, f as useRouterState, g as lazyRouteComponent, h as Outlet, m as createRouter, u as Scripts, v as createRootRoute, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Menu, n as TriangleAlert, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-De-bq1iQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function lineKey(l) {
	return `${l.productId}::${l.color ?? ""}`;
}
var useInquiry = create()(persist((set, get) => ({
	lines: [],
	sent: [],
	add: (line) => {
		const lines = get().lines.slice();
		const i = lines.findIndex((l) => lineKey(l) === lineKey(line));
		if (i >= 0) lines[i] = {
			...lines[i],
			rolls: lines[i].rolls + line.rolls
		};
		else lines.push(line);
		set({ lines });
	},
	setRolls: (productId, color, rolls) => {
		set({ lines: get().lines.map((l) => lineKey(l) === lineKey({
			productId,
			color
		}) ? {
			...l,
			rolls
		} : l) });
	},
	remove: (productId, color) => {
		set({ lines: get().lines.filter((l) => lineKey(l) !== lineKey({
			productId,
			color
		})) });
	},
	clear: () => set({ lines: [] }),
	submit: (meta) => {
		const inquiry = {
			id: crypto.randomUUID(),
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			lines: get().lines,
			...meta
		};
		set({
			sent: [inquiry, ...get().sent],
			lines: []
		});
		return inquiry;
	}
}), { name: "termoteks-inquiry" }));
function lineProduct(line) {
	return PRODUCTS.find((p) => p.id === line.productId);
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-wide transition-[opacity,transform,background-color,color,border-color] duration-150 ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/25 disabled:pointer-events-none disabled:opacity-40 active:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-ink text-paper hover:bg-ink-soft",
			outline: "border border-ink/20 bg-transparent text-ink hover:bg-ink/5",
			ghost: "text-ink hover:bg-ink/5",
			invert: "bg-paper text-ink hover:bg-paper-2"
		},
		size: {
			default: "h-11 px-5 text-sm",
			sm: "h-9 px-3.5 text-xs",
			lg: "h-12 px-6 text-sm"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var NAV = [
	{
		to: "/catalog",
		label: "Ассортимент"
	},
	{
		to: "/about",
		label: "О компании"
	},
	{
		to: "/clients",
		label: "Клиентам"
	},
	{
		to: "/delivery",
		label: "Доставка"
	},
	{
		to: "/blog",
		label: "Блог"
	},
	{
		to: "/contact",
		label: "Контакты"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const count = useInquiry((s) => s.lines.reduce((n, l) => n + l.rolls, 0));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line/80 bg-paper/92 backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hidden border-b border-line/70 bg-paper-2/60 px-4 py-2 text-center text-[11px] uppercase tracking-[0.22em] text-stone sm:block",
				children: COMPANY.tagline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex items-center",
						onClick: () => setOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/logo.png",
							alt: COMPANY.name,
							className: "h-8 w-auto sm:h-9",
							width: 160,
							height: 36
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-6 lg:flex",
						children: NAV.map((item) => {
							const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: cn("relative text-[13px] uppercase tracking-[0.14em] text-stone transition-colors duration-150 hover:text-ink", active && "text-ink"),
								children: [item.label, active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-0 -bottom-1 h-px bg-ink" })]
							}, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "hidden sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/request",
								children: ["Заявка", count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-1 tabular-nums text-paper-2",
									children: [
										"(",
										count,
										")"
									]
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center rounded-md text-ink lg:hidden",
							"aria-label": open ? "Закрыть меню" : "Открыть меню",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("overflow-hidden border-t border-line bg-paper lg:hidden transition-[max-height,opacity] duration-200 ease-[var(--ease-smooth-out)]", open ? "max-h-[28rem] opacity-100" : "max-h-0 border-t-0 opacity-0"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col px-4 py-3",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						onClick: () => setOpen(false),
						className: "flex min-h-11 items-center text-sm uppercase tracking-[0.14em] text-ink",
						children: item.label
					}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/request",
						onClick: () => setOpen(false),
						className: "mt-2 flex min-h-11 items-center justify-center rounded-md bg-ink text-sm uppercase tracking-[0.14em] text-paper",
						children: ["Заявка", count > 0 ? ` · ${count}` : ""]
					})]
				})
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-auto border-t border-line bg-ink text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl tracking-tight",
					children: COMPANY.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xs text-sm leading-relaxed text-paper/65",
					children: "Термоклеевые прокладочные материалы с 1993 года. Производство и склад в одном месте."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.18em] text-paper/45",
					children: "Ассортимент"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/catalog/$category",
						params: { category: c.id },
						className: "text-paper/80 transition-colors hover:text-paper",
						children: c.title
					}) }, c.id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.18em] text-paper/45",
					children: "Компания"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "text-paper/80 hover:text-paper",
							children: "О компании"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/delivery",
							className: "text-paper/80 hover:text-paper",
							children: "Доставка и оплата"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/faq",
							className: "text-paper/80 hover:text-paper",
							children: "FAQ"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/clients",
							className: "text-paper/80 hover:text-paper",
							children: "Для клиентов"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "text-paper/80 hover:text-paper",
							children: "Контакты"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.18em] text-paper/45",
					children: "Связь"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-paper/80",
					children: [
						COMPANY.phones.slice(0, 2).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${p.tel.replace(/\s/g, "")}`,
							className: "hover:text-paper",
							children: p.tel
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-paper/45",
							children: [" · ", p.name]
						})] }, p.tel)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${COMPANY.email}`,
							className: "hover:text-paper",
							children: COMPANY.email
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "pt-2 text-paper/55",
							children: COMPANY.address
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-paper/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					COMPANY.legal,
					". Собственное производство в России."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Скидки постоянным клиентам" })]
			})
		})]
	});
}
function SiteLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-svh flex-col bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var styles_default = "/assets/styles-BLegmr2d.css";
var APP_NAME = "TERMOTEKS";
var Route$14 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "TERMOTEKS — производитель термоклеевых прокладочных материалов. Бязь, спанбонд, трикотаж и поролон. Производство с 1993 года, Любучаны."
			},
			{
				name: "theme-color",
				content: "#161614"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ru",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "bottom-right",
				toastOptions: { className: "font-sans" }
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$13 = () => import("./routes-BNg9u6rb.mjs");
var Route$13 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./about-CMBFZlkA.mjs");
var Route$12 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./blog-GHsbigBI.mjs");
var Route$11 = createFileRoute("/blog")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./catalog-CUsRheVe.mjs");
var Route$10 = createFileRoute("/catalog")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./clients-A1s4jEKN.mjs");
var Route$9 = createFileRoute("/clients")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./contact-BAy3S15y.mjs");
var Route$8 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./delivery-Dtjeswqt.mjs");
var Route$7 = createFileRoute("/delivery")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./faq-Bon-PlJt.mjs");
var Route$6 = createFileRoute("/faq")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./request-B5eWaBg_.mjs");
var Route$5 = createFileRoute("/request")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./blog.index-C7vK4LXY.mjs");
var Route$4 = createFileRoute("/blog/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./blog._slug-Cs5so5ZY.mjs");
var Route$3 = createFileRoute("/blog/$slug")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./catalog.index-XMm8zGVR.mjs");
var Route$2 = createFileRoute("/catalog/")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./catalog._category-BGKb3y6S.mjs");
var Route$1 = createFileRoute("/catalog/$category")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./product._slug-CPVGHYTp.mjs");
var Route = createFileRoute("/product/$slug")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$14
});
var AboutRoute = Route$12.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$14
});
var BlogRoute = Route$11.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$14
});
var CatalogRoute = Route$10.update({
	id: "/catalog",
	path: "/catalog",
	getParentRoute: () => Route$14
});
var ClientsRoute = Route$9.update({
	id: "/clients",
	path: "/clients",
	getParentRoute: () => Route$14
});
var ContactRoute = Route$8.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$14
});
var DeliveryRoute = Route$7.update({
	id: "/delivery",
	path: "/delivery",
	getParentRoute: () => Route$14
});
var FaqRoute = Route$6.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$14
});
var RequestRoute = Route$5.update({
	id: "/request",
	path: "/request",
	getParentRoute: () => Route$14
});
var BlogIndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => BlogRoute
});
var BlogSlugRoute = Route$3.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => BlogRoute
});
var CatalogIndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => CatalogRoute
});
var CatalogCategoryRoute = Route$1.update({
	id: "/$category",
	path: "/$category",
	getParentRoute: () => CatalogRoute
});
var ProductSlugRoute = Route.update({
	id: "/product/$slug",
	path: "/product/$slug",
	getParentRoute: () => Route$14
});
var BlogRouteChildren = {
	BlogSlugRoute,
	BlogIndexRoute
};
var BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
var CatalogRouteChildren = {
	CatalogCategoryRoute,
	CatalogIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BlogRoute: BlogRouteWithChildren,
	CatalogRoute: CatalogRoute._addFileChildren(CatalogRouteChildren),
	ClientsRoute,
	ContactRoute,
	DeliveryRoute,
	FaqRoute,
	RequestRoute,
	ProductSlugRoute
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { Button as a, Route$3 as i, Route as n, lineProduct as o, Route$1 as r, useInquiry as s, router_exports as t };
