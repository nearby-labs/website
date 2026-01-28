import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
	variant?: "default" | "glass" | "outline";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
	({ className, variant = "default", ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					"rounded-2xl transition-all duration-300",
					{
						"bg-[#141414] border border-white/[0.06] hover:border-white/[0.12]":
							variant === "default",
						"glass-card hover:border-white/[0.12]": variant === "glass",
						"border border-white/[0.06] hover:border-[#F1A015]/50":
							variant === "outline",
					},
					className,
				)}
				{...props}
			/>
		);
	},
);

Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn("flex flex-col space-y-1.5 p-6", className)}
			{...props}
		/>
	),
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<
	HTMLHeadingElement,
	HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h3
		ref={ref}
		className={cn(
			"text-xl font-medium leading-none tracking-tight text-white",
			className,
		)}
		{...props}
	/>
));
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p ref={ref} className={cn("text-sm text-zinc-400", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
	),
);
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn("flex items-center p-6 pt-0", className)}
			{...props}
		/>
	),
);
CardFooter.displayName = "CardFooter";

export {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
};
