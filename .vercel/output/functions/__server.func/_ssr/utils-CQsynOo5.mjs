import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-CQsynOo5.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatPrice(value, unit = "m2") {
	const formatted = new Intl.NumberFormat("ru-RU").format(value);
	return unit === "lm" ? `${formatted} ₽/пог. м` : `${formatted} ₽/м²`;
}
//#endregion
export { formatPrice as n, cn as t };
