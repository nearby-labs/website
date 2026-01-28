import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "outline" | "ghost";
	size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant = "primary", size = "md", ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={cn(
					"inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
					{
						"bg-gradient-to-r from-[#F1A015] to-[#ffc258] text-black hover:shadow-lg hover:shadow-amber-500/25 hover:scale-105 focus-visible:ring-amber-500":
							variant === "primary",
						"bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30 focus-visible:ring-white/50":
							variant === "secondary",
						"border border-[#F1A015] text-[#F1A015] hover:bg-[#F1A015]/10 focus-visible:ring-amber-500":
							variant === "outline",
						"text-zinc-400 hover:text-white hover:bg-white/5 focus-visible:ring-white/50":
							variant === "ghost",
					},
					{
						"h-9 px-4 text-sm": size === "sm",
						"h-12 px-6": size === "md",
						"h-14 px-8 text-lg": size === "lg",
					},
					className,
				)}
				{...props}
			/>
		);
	},
);

Button.displayName = "Button";

export { Button };
