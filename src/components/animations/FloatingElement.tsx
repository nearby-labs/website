import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { prefersReducedMotion } from "../../lib/utils";

interface FloatingElementProps {
	children: ReactNode;
	className?: string;
	animation?: "float" | "float-slow" | "pulse-glow";
	delay?: number;
}

export function FloatingElement({
	children,
	className,
	animation = "float",
	delay = 0,
}: FloatingElementProps) {
	const reducedMotion = prefersReducedMotion();

	// Disable animations if user prefers reduced motion
	if (reducedMotion) {
		return <div className={className}>{children}</div>;
	}

	const animations = {
		float: {
			y: [0, -20, 0],
			rotate: [0, 5, 0],
		},
		"float-slow": {
			y: [0, -30, 0],
			x: [0, 10, 0],
		},
		"pulse-glow": {
			scale: [1, 1.1, 1],
			opacity: [0.4, 0.8, 0.4],
		},
	};

	return (
		<motion.div
			animate={animations[animation]}
			transition={{
				duration:
					animation === "float-slow" ? 8 : animation === "pulse-glow" ? 4 : 6,
				ease: "easeInOut",
				times: [0, 0.5, 1],
				repeat: Infinity,
				delay,
			}}
			className={className}
			style={{ willChange: "transform" }}
		>
			{children}
		</motion.div>
	);
}

interface GradientOrbProps {
	className?: string;
	color?: "blue" | "purple" | "mixed";
}

export function GradientOrb({ className, color = "mixed" }: GradientOrbProps) {
	const reducedMotion = prefersReducedMotion();
	const colors = {
		blue: "from-blue-500/30 to-blue-600/10",
		purple: "from-purple-500/30 to-purple-600/10",
		mixed: "from-blue-500/20 via-purple-500/20 to-blue-600/10",
	};

	if (reducedMotion) {
		return (
			<div
				className={`absolute rounded-full blur-3xl bg-gradient-to-br ${colors[color]} ${className}`}
			/>
		);
	}

	return (
		<motion.div
			animate={{
				y: [0, -30, 0],
				x: [0, 15, 0],
				scale: [1, 1.1, 1],
			}}
			transition={{
				duration: 10,
				ease: "easeInOut",
				repeat: Infinity,
			}}
			className={`absolute rounded-full blur-3xl bg-gradient-to-br ${colors[color]} ${className}`}
			style={{ willChange: "transform" }}
		/>
	);
}
