import { Star } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "../animations/FadeIn";
import { Container } from "../layout/Container";

const testimonials = [
	{
		quote:
			"Nearby Labs transformed our concept into a fully functional product in just 8 weeks. Their technical expertise and startup-focused approach made all the difference.",
		author: "Sarah Chen",
		role: "CEO, TechFlow",
		initials: "SC",
	},
	{
		quote:
			"Working with Nearby Labs felt like having an in-house engineering team. They understood our vision and delivered beyond our expectations.",
		author: "Michael Park",
		role: "Founder, DataSync",
		initials: "MP",
	},
	{
		quote:
			"The team's ability to move fast without sacrificing quality is remarkable. They helped us launch our MVP and iterate quickly based on user feedback.",
		author: "Emily Rodriguez",
		role: "CTO, CloudBase",
		initials: "ER",
	},
];

export function Testimonials() {
	return (
		<section className="py-32 bg-[#111111]">
			<Container>
				<div className="max-w-3xl mx-auto text-center mb-20">
					<FadeIn>
						<p className="text-sm text-[#F1A015] mb-4 tracking-wider">
							Testimonials
						</p>
					</FadeIn>
					<FadeIn delay={0.1}>
						<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6 text-balance">
							Real words,{" "}
							<span className="italic text-zinc-500">real impact</span>
						</h2>
					</FadeIn>
				</div>

				<StaggerContainer className="grid md:grid-cols-3 gap-8">
					{testimonials.map((testimonial) => (
						<StaggerItem key={testimonial.author}>
							<div className="bg-[#141414] rounded-2xl p-8 h-full flex flex-col border border-white/[0.06]">
								<div className="flex gap-1 mb-6">
									{[1, 2, 3, 4, 5].map((starNum) => (
										<Star
											key={`rating-star-${starNum}`}
											className="w-4 h-4 fill-[#F1A015] text-[#F1A015]"
										/>
									))}
								</div>
								<blockquote className="text-zinc-300 mb-8 flex-grow leading-relaxed">
									"{testimonial.quote}"
								</blockquote>
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F1A015]/20 to-[#ffc258]/10 border border-[#F1A015]/20 flex items-center justify-center text-[#F1A015] font-medium">
										{testimonial.initials}
									</div>
									<div>
										<p className="font-medium text-white">
											{testimonial.author}
										</p>
										<p className="text-sm text-zinc-500">{testimonial.role}</p>
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
