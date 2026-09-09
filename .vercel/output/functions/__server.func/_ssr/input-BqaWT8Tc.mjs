import { t as cn } from "./utils-CQsynOo5.mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/input-BqaWT8Tc.js
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md border border-line bg-surface px-3.5 text-sm text-ink placeholder:text-mist transition-[border-color,box-shadow] duration-150 ease-[var(--ease-out)] focus-visible:border-ink/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/15", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-28 w-full rounded-lg border border-line bg-surface px-3.5 py-3 text-sm text-ink placeholder:text-mist transition-[border-color,box-shadow] duration-150 ease-[var(--ease-out)] focus-visible:border-ink/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/15", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-stone", className),
		...props
	});
}
//#endregion
export { Label as n, Textarea as r, Input as t };
