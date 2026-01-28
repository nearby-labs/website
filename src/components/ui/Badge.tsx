import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
	variant?: "default" | "secondary" | "outline" | "accent";
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
	({ className, variant = "default", ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					"inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
					{
						"bg-[#F1A015]/10 text-[#F1A015] border border-[#F1A015]/20":
							variant === "default",
						"bg-white/5 text-zinc-400 border border-white/10":
							variant === "secondary",
						"border border-white/20 text-zinc-300": variant === "outline",
						"bg-gradient-to-r from-[#F1A015]/20 to-[#ffc258]/20 text-[#ffc258]":
							variant === "accent",
					},
					className,
				)}
				{...props}
			/>
		);
	},
);

Badge.displayName = "Badge";

export { Badge };
