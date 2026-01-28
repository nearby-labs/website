import { ArrowUpRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "../animations/FadeIn";
import { Container } from "../layout/Container";
import { Badge } from "../ui/Badge";

const projects = [
	{
		title: "FinFlow Dashboard",
		description:
			"A comprehensive financial analytics platform with real-time data visualization and predictive insights.",
		tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
		stats: "50% faster reporting",
	},
	{
		title: "HealthTrack Mobile",
		description:
			"Cross-platform health monitoring app with wearable integration and personalized wellness recommendations.",
		tags: ["React Native", "Firebase", "HealthKit", "AI/ML"],
		stats: "100K+ downloads",
	},
	{
		title: "Commerce Pro",
		description:
			"Enterprise e-commerce solution with advanced inventory management and multi-channel sales integration.",
		tags: ["Next.js", "GraphQL", "AWS", "Stripe"],
		stats: "$2M+ GMV processed",
	},
];

export function Work() {
	return (
		<section id="work" className="py-32 bg-[#111111]">
			<Container>
				<div className="max-w-3xl mx-auto text-center mb-20">
					<FadeIn>
						<p className="text-sm text-[#F1A015] mb-4 tracking-wider">
							Our Work
						</p>
					</FadeIn>
					<FadeIn delay={0.1}>
						<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6 text-balance">
							Recent <span className="italic text-zinc-500">Projects</span>
						</h2>
					</FadeIn>
					<FadeIn delay={0.2}>
						<p className="text-lg text-zinc-400">
							See how we have helped startups build and scale their products.
						</p>
					</FadeIn>
				</div>

				<StaggerContainer className="grid lg:grid-cols-3 gap-8 items-stretch">
					{projects.map((project) => (
						<StaggerItem key={project.title} className="h-full">
							<div className="group relative bg-[#141414] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-[#F1A015]/30 transition-all duration-500 h-full flex flex-col">
								<div className="h-56 flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white/[0.02] to-transparent shrink-0">
									<div className="absolute inset-0 bg-gradient-to-br from-[#F1A015]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

									<div className="relative z-10 text-center p-6">
										<div className="w-24 h-24 rounded-2xl mx-auto mb-4 bg-gradient-to-br from-[#F1A015] to-[#ffc258] flex items-center justify-center shadow-2xl shadow-[#F1A015]/20 group-hover:scale-110 transition-transform duration-500">
											<span className="text-4xl font-bold text-black">
												{project.title.charAt(0)}
											</span>
										</div>
										<p className="text-sm font-medium text-[#F1A015]">
											{project.stats}
										</p>
									</div>
								</div>

								<div className="p-6 flex flex-col flex-grow">
									<div className="flex items-start justify-between mb-4">
										<h3 className="text-xl font-medium text-white group-hover:text-[#F1A015] transition-colors">
											{project.title}
										</h3>
										<ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-[#F1A015] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
									</div>
									<p className="text-zinc-400 mb-5 line-clamp-2">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2 mt-auto">
										{project.tags.map((tag) => (
											<Badge key={tag} variant="secondary">
												{tag}
											</Badge>
										))}
									</div>
								</div>
							</div>
						</StaggerItem>
					))}
				</StaggerContainer>
			</Container>
		</section>
	);
}
