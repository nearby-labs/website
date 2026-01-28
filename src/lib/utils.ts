import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Detect if the device is mobile based on screen width and user agent
 */
export function isMobileDevice(): boolean {
	if (typeof window === "undefined") return false;

	// Check screen width first (most reliable)
	if (window.innerWidth < 768) return true;

	// Fallback to user agent check
	const userAgent =
		navigator.userAgent || navigator.vendor || (window as any).opera;
	return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
		userAgent.toLowerCase(),
	);
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Throttle function calls
 */
export function throttle<T extends (...args: any[]) => any>(
	func: T,
	limit: number,
): (...args: Parameters<T>) => void {
	let inThrottle: boolean;
	return function (this: any, ...args: Parameters<T>) {
		if (!inThrottle) {
			func.apply(this, args);
			inThrottle = true;
			setTimeout(() => (inThrottle = false), limit);
		}
	};
}
