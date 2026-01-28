import { Layers, Lightbulb, Server, Smartphone } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "../animations/FadeIn";
import { Container } from "../layout/Container";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/Card";

const services = [
	{
		icon: Layers,
		title: "Full-Stack Development",
		description:
			"End-to-end web applications built with modern frameworks. From responsive frontends to scalable backends.",
	},
	{
		icon: Smartphone,
		title: "Mobile Development",
		description:
			"Native and cross-platform mobile apps for iOS and Android. Deliver seamless experiences across all devices.",
	},
	{
		icon: Server,
		title: "Technical Architecture",
		description:
			"Scalable system design and cloud infrastructure. Build robust foundations that grow with your business.",
	},
	{
		icon: Lightbulb,
		title: "Product Strategy",
		description:
			"From idea to launch, we help define your product roadmap. Make informed decisions with expert guidance.",
	},
];

export function Services() {
	return (
		<section id="services" className="py-32 bg-[#0a0a0a]">
			<Container>
				<div className="max-w-3xl mx-auto text-center mb-20">
					<FadeIn>
						<p className="text-sm text-[#F1A015] mb-4 tracking-wider">
							Our Services
						</p>
					</FadeIn>
					<FadeIn delay={0.1}>
						<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6 text-balance">
							A strong technical{" "}
							<span className="italic text-zinc-500">foundation</span>
						</h2>
					</FadeIn>
					<FadeIn delay={0.2}>
						<p className="text-lg text-zinc-400">
							Comprehensive development services tailored for startups ready to
							scale.
						</p>
					</FadeIn>
				</div>

				<StaggerContainer className="grid md:grid-cols-2 gap-6">
					{services.map((service) => (
						<StaggerItem key={service.title}>
							<Card className="group h-full hover:border-[#F1A015]/30 transition-all duration-500">
								<CardHeader>
									<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F1A015]/20 to-[#ffc258]/10 border border-[#F1A015]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
										<service.icon className="w-6 h-6 text-[#F1A015]" />
									</div>
									<CardTitle className="text-xl">{service.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription className="text-base leading-relaxed">
										{service.description}
									</CardDescription>
								</CardContent>
							</Card>
						</StaggerItem>
					))}
				</StaggerContainer>
			</Container>
		</section>
	);
}
