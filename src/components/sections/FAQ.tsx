import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "../animations/FadeIn";
import { Container } from "../layout/Container";

const faqs = [
	{
		question: "What is your typical project timeline?",
		answer:
			"Most MVP projects take 8-12 weeks from kickoff to launch. Larger projects are broken into phases, with each deliverable providing tangible value. We work in 2-week sprints so you can see progress continuously.",
	},
	{
		question: "How do you handle project communication?",
		answer:
			"We believe in transparent communication. You'll have direct access to our team via Slack, weekly video check-ins, and access to our project management tools. We provide detailed progress reports and are always available for questions.",
	},
	{
		question: "What technologies do you specialize in?",
		answer:
			"We are technology-agnostic and choose the best stack for your specific needs. Our core expertise includes React, Next.js, Node.js, TypeScript, PostgreSQL, and cloud platforms like AWS and Vercel. For mobile, we work with React Native and native iOS/Android.",
	},
	{
		question: "Do you offer ongoing support after launch?",
		answer:
			"Absolutely! We offer various support packages including maintenance, feature development, and technical consulting. Many of our clients continue working with us long after their initial launch as they scale their products.",
	},
	{
		question: "How do you price your services?",
		answer:
			"We offer both project-based and retainer pricing depending on your needs. After our initial consultation, we provide a detailed proposal with transparent pricing. We also offer flexible payment schedules to work with startup budgets.",
	},
	{
		question: "Can you work with our existing team?",
		answer:
			"Yes, we regularly collaborate with in-house teams. We can augment your existing development capacity, provide specialized expertise, or work alongside your product and design teams. We adapt our process to fit your workflow.",
	},
];

export function FAQ() {
	return (
		<section id="faq" className="py-32 bg-[#0a0a0a]">
			<Container>
				<div className="max-w-3xl mx-auto">
					<div className="flex flex-col lg:flex-row lg:gap-16 mb-12">
						<div className="lg:w-1/3 mb-8 lg:mb-0">
							<FadeIn>
								<h2 className="text-4xl sm:text-5xl font-medium text-white mb-4">
									Frequently asked{" "}
									<span className="italic text-zinc-500">questions</span>
								</h2>
							</FadeIn>
						</div>

						<div className="lg:w-2/3">
							<StaggerContainer staggerDelay={0.1}>
								<Accordion.Root type="single" collapsible className="space-y-4">
									{faqs.map((faq) => (
										<StaggerItem key={faq.question}>
											<Accordion.Item
												value={faq.question}
												className="bg-[#141414] rounded-xl border border-white/[0.06] overflow-hidden"
											>
												<Accordion.Trigger className="flex items-center justify-between w-full p-6 text-left hover:bg-white/[0.02] transition-colors group">
													<span className="text-base font-medium text-white pr-4 text-left">
														{faq.question}
													</span>
													<ChevronDown className="w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180" />
												</Accordion.Trigger>
												<Accordion.Content className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
													<div className="px-6 pb-6 text-zinc-400 leading-relaxed">
														{faq.answer}
													</div>
												</Accordion.Content>
											</Accordion.Item>
										</StaggerItem>
									))}
								</Accordion.Root>
							</StaggerContainer>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
