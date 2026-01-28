import { ArrowRight, Sparkles, Star } from "lucide-react";
import { FadeIn } from "../animations/FadeIn";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export function CTA() {
	return (
		<section id="cta" className="relative py-32 overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-[#0a0a0a]" />

			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F1A015]/10 rounded-full blur-[150px]" />

			<Container className="relative z-10">
				<div className="max-w-4xl mx-auto text-center">
					<FadeIn>
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
							<Sparkles className="w-4 h-4 text-[#F1A015]" />
							<span className="text-sm text-zinc-400">
								Limited spots available for Q1 2026
							</span>
						</div>
					</FadeIn>

					<FadeIn delay={0.1}>
						<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6 text-balance">
							Apply in less than{" "}
							<span className="bg-gradient-to-r from-[#F1A015] via-[#ffc258] to-[#F1A015] bg-clip-text text-transparent">
								10 minutes
							</span>{" "}
							today
						</h2>
					</FadeIn>

					<FadeIn delay={0.2}>
						<p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
							Join over 50+ startups who have accelerated their growth with
							Nearby Labs.
						</p>
					</FadeIn>

					<FadeIn delay={0.3}>
						<form
							className="max-w-md mx-auto mb-10"
							onSubmit={(e) => {
								e.preventDefault();
							}}
						>
							<div className="flex gap-3">
								<Input
									type="email"
									placeholder="Enter your email"
									className="flex-1"
								/>
								<Button type="submit" variant="primary" className="group">
									Get Started
									<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
								</Button>
							</div>
						</form>
					</FadeIn>

					<FadeIn delay={0.4}>
						<div className="flex items-center justify-center gap-6 text-sm text-zinc-500">
							<div className="flex items-center gap-1">
								{[1, 2, 3, 4, 5].map((starNum) => (
									<Star
										key={`cta-star-${starNum}`}
										className="w-4 h-4 fill-[#F1A015] text-[#F1A015]"
									/>
								))}
								<span className="ml-2">5.0 rating</span>
							</div>
							<span className="hidden sm:inline">•</span>
							<span>50+ happy clients</span>
						</div>
					</FadeIn>
				</div>
			</Container>
		</section>
	);
}
