import { Code2, Palette, Rocket, Search } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "../animations/FadeIn";
import { Container } from "../layout/Container";

const steps = [
	{
		icon: Search,
		title: "Discovery",
		description:
			"We dive deep into your vision, market, and users to create a solid foundation for success.",
	},
	{
		icon: Palette,
		title: "Design",
		description:
			"User-centered design with iterative prototyping ensures we build the right product.",
	},
	{
		icon: Code2,
		title: "Development",
		description:
			"Agile development with continuous testing delivers high-quality code at speed.",
	},
	{
		icon: Rocket,
		title: "Launch",
		description:
			"Smooth deployment and ongoing support to help your product thrive in the market.",
	},
];

export function Process() {
	return (
		<section id="process" className="py-32 bg-[#0a0a0a]">
			<Container>
				<div className="max-w-3xl mx-auto text-center mb-20">
					<FadeIn>
						<p className="text-sm text-[#F1A015] mb-4 tracking-wider">
							Our Process
						</p>
					</FadeIn>
					<FadeIn delay={0.1}>
						<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6 text-balance">
							Coupled with{" "}
							<span className="italic text-zinc-500">intelligent</span> tools
						</h2>
					</FadeIn>
					<FadeIn delay={0.2}>
						<p className="text-lg text-zinc-400">
							A proven process that turns your ideas into market-ready products.
						</p>
					</FadeIn>
				</div>

				<div className="relative">
					<div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#F1A015]/30 to-transparent" />

					<StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
						{steps.map((step, index) => (
							<StaggerItem key={step.title}>
								<div className="relative text-center">
									<div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F1A015]/20 to-[#ffc258]/10 border border-[#F1A015]/20 mb-6">
										<step.icon className="w-7 h-7 text-[#F1A015]" />
										<div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#141414] border border-[#F1A015]/30 flex items-center justify-center text-xs font-medium text-[#F1A015]">
											{index + 1}
										</div>
									</div>
									<h3 className="text-xl font-medium text-white mb-3">
										{step.title}
									</h3>
									<p className="text-zinc-400 leading-relaxed">
										{step.description}
									</p>
								</div>
							</StaggerItem>
						))}
					</StaggerContainer>
				</div>
			</Container>
		</section>
	);
}
