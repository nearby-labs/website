import { useEffect, useRef, useState } from "react";
import { StaggerContainer, StaggerItem } from "../animations/FadeIn";
import { Container } from "../layout/Container";

const stats = [
	{
		value: 50,
		suffix: "+",
		label: "Projects Delivered",
	},
	{
		value: 98,
		suffix: "%",
		label: "Client Satisfaction",
	},
	{
		value: 2,
		suffix: "x",
		label: "Faster to Market",
	},
	{
		value: 10,
		suffix: "M+",
		label: "Users Reached",
	},
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
	const [count, setCount] = useState(0);
	const ref = useRef<HTMLSpanElement>(null);
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasAnimated) {
					setHasAnimated(true);
					const duration = 2000;
					const steps = 60;
					const increment = value / steps;
					let current = 0;

					const timer = setInterval(() => {
						current += increment;
						if (current >= value) {
							setCount(value);
							clearInterval(timer);
						} else {
							setCount(Math.floor(current));
						}
					}, duration / steps);

					return () => clearInterval(timer);
				}
			},
			{ threshold: 0.5 },
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, [value, hasAnimated]);

	return (
		<span ref={ref} className="tabular-nums">
			{count}
			{suffix}
		</span>
	);
}

export function Stats() {
	return (
		<section className="py-24 bg-[#0a0a0a] border-y border-white/5">
			<Container>
				<StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
					{stats.map((stat) => (
						<StaggerItem key={stat.label}>
							<div className="text-center">
								<div className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-2">
									<AnimatedNumber value={stat.value} suffix={stat.suffix} />
								</div>
								<p className="text-zinc-500">{stat.label}</p>
							</div>
						</StaggerItem>
					))}
				</StaggerContainer>
			</Container>
		</section>
	);
}
