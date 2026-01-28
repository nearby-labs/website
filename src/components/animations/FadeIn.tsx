import { motion, useInView } from "framer-motion";
import { type ReactNode, useRef } from "react";
import { prefersReducedMotion } from "../../lib/utils";

interface FadeInProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	duration?: number;
	direction?: "up" | "down" | "left" | "right" | "none";
	once?: boolean;
}

export function FadeIn({
	children,
	className,
	delay = 0,
	duration = 0.5,
	direction = "up",
	once = true,
}: FadeInProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once, margin: "-50px" });
	const reducedMotion = prefersReducedMotion();

	const directions = {
		up: { y: 30 },
		down: { y: -30 },
		left: { x: 30 },
		right: { x: -30 },
		none: {},
	};

	// Skip animation if reduced motion is preferred
	if (reducedMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, ...directions[direction] }}
			animate={
				isInView
					? { opacity: 1, x: 0, y: 0 }
					: { opacity: 0, ...directions[direction] }
			}
			transition={{
				duration,
				delay,
				ease: [0.25, 0.1, 0.25, 1],
			}}
			className={className}
			style={{ willChange: "transform, opacity" }}
		>
			{children}
		</motion.div>
	);
}

interface StaggerContainerProps {
	children: ReactNode;
	className?: string;
	staggerDelay?: number;
}

export function StaggerContainer({
	children,
	className,
	staggerDelay = 0.1,
}: StaggerContainerProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-50px" });
	const reducedMotion = prefersReducedMotion();

	// Skip animation if reduced motion is preferred
	if (reducedMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			variants={{
				visible: {
					transition: {
						staggerChildren: staggerDelay,
					},
				},
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function StaggerItem({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	const reducedMotion = prefersReducedMotion();

	if (reducedMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: 20 },
				visible: {
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.5,
						ease: [0.25, 0.1, 0.25, 1],
					},
				},
			}}
			className={className}
			style={{ willChange: "transform, opacity" }}
		>
			{children}
		</motion.div>
	);
}
