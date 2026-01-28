import { useEffect, useRef } from "react";
import { FadeIn } from "../animations/FadeIn";
import { Container } from "../layout/Container";

const logos = [
	{ name: "TechFlow", initials: "TF" },
	{ name: "DataSync", initials: "DS" },
	{ name: "CloudBase", initials: "CB" },
	{ name: "AppWorks", initials: "AW" },
	{ name: "DevStack", initials: "DS" },
	{ name: "NextGen", initials: "NG" },
	{ name: "BuildPro", initials: "BP" },
	{ name: "CodeLab", initials: "CL" },
];

function LogoItem({ name, initials }: { name: string; initials: string }) {
	return (
		<div className="flex items-center gap-3 px-8">
			<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
				<span className="text-sm font-semibold text-zinc-400">{initials}</span>
			</div>
			<span className="text-lg font-medium text-zinc-500 whitespace-nowrap">
				{name}
			</span>
		</div>
	);
}

export function TrustLogos() {
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scrollContainer = scrollRef.current;
		if (!scrollContainer) return;

		let animationId: number;
		let scrollPos = 0;
		const speed = 0.5;

		const animate = () => {
			scrollPos += speed;
			if (scrollPos >= scrollContainer.scrollWidth / 2) {
				scrollPos = 0;
			}
			scrollContainer.scrollLeft = scrollPos;
			animationId = requestAnimationFrame(animate);
		};

		animationId = requestAnimationFrame(animate);

		return () => cancelAnimationFrame(animationId);
	}, []);

	return (
		<section className="py-16 bg-[#0a0a0a] border-y border-white/5">
			<Container>
				<FadeIn>
					<p className="text-center text-sm text-zinc-500 mb-10">
						Trusted by innovative startups worldwide
					</p>
				</FadeIn>
			</Container>

			<div className="relative overflow-hidden">
				<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
				<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

				<div
					ref={scrollRef}
					className="flex overflow-x-hidden"
					style={{ scrollBehavior: "auto" }}
				>
					<div className="flex items-center">
						{[...logos, ...logos].map((logo, index) => (
							<LogoItem key={`${logo.name}-${index}`} {...logo} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
