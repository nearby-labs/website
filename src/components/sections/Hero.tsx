import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedBackground } from "../animations/AnimatedBackground";
import { FadeIn } from "../animations/FadeIn";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export function Hero() {
	const [showScrollIndicator, setShowScrollIndicator] = useState(true);
	const [email, setEmail] = useState("");

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			if (scrollY > 100) {
				setShowScrollIndicator(false);
			} else {
				setShowScrollIndicator(true);
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
			<div className="absolute inset-0 bg-[#0a0a0a]" />

			<AnimatedBackground />

			<Container className="relative z-10">
				<div className="max-w-5xl mx-auto text-center">
					<FadeIn>
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
							<Sparkles className="w-4 h-4 text-[#F1A015]" />
							<span className="text-sm text-zinc-400">
								AI-Powered Development for Q1 2026
							</span>
						</div>
					</FadeIn>

					<FadeIn delay={0.1}>
						<h1 className="text-5xl sm:text-6xl lg:text-8xl font-medium tracking-tight mb-8 text-balance">
							We are reimagining{" "}
							<span className="bg-gradient-to-r from-[#F1A015] via-[#ffc258] to-[#F1A015] bg-clip-text text-transparent whitespace-nowrap">
								AI-native
							</span>{" "}
							development to accelerate your success
						</h1>
					</FadeIn>

					<FadeIn delay={0.2}>
						<p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
							Helping startups build exceptional products with modern
							technology, expert guidance, and a focus on rapid growth.
						</p>
					</FadeIn>

					<FadeIn delay={0.3}>
						<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
							<Button
								variant="primary"
								size="lg"
								className="group"
								onClick={() => {
									document
										.getElementById("cta")
										?.scrollIntoView({ behavior: "smooth" });
								}}
							>
								Start Your Project
								<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
							</Button>
							<Button
								variant="secondary"
								size="lg"
								onClick={() => {
									document
										.getElementById("work")
										?.scrollIntoView({ behavior: "smooth" });
								}}
							>
								View Our Work
							</Button>
						</div>
					</FadeIn>

					<FadeIn delay={0.4}>
						<div className="max-w-md mx-auto">
							<form
								className="flex gap-3"
								onSubmit={(e) => {
									e.preventDefault();
									if (email.trim()) {
										const subject = encodeURIComponent("Contact from website");
										const body = encodeURIComponent(
											`Hello,\n\nI would like to get in touch.\n\nMy email: ${email}`,
										);
										window.location.href = `mailto:hello@nearbylabs.dev?subject=${subject}&body=${body}`;
									}
								}}
							>
								<Input
									type="email"
									placeholder="Enter your email"
									className="flex-1"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
								<Button type="submit" variant="primary">
									Get in Touch
								</Button>
							</form>
						</div>
					</FadeIn>
				</div>
			</Container>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: showScrollIndicator ? 1 : 0 }}
				transition={{ duration: 0.3 }}
				className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
			>
				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
					className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2 bg-[#0a0a0a]/50 backdrop-blur-sm"
				>
					<motion.div
						animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
						transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
						className="w-1 h-1 rounded-full bg-[#F1A015]"
					/>
				</motion.div>
			</motion.div>
		</section>
	);
}
