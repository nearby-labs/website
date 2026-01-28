import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				ref={ref}
				className={cn(
					"flex h-12 w-full rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white ring-offset-0 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:border-[#F1A015]/50 focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300",
					className,
				)}
				{...props}
			/>
		);
	},
);

Input.displayName = "Input";

export { Input };
