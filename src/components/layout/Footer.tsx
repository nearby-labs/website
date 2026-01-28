import { Github, Mail, Twitter } from "lucide-react";
import { Logo } from "../Logo";
import { Container } from "./Container";

const footerLinks = {
	services: [
		{ label: "Full-Stack Development", href: "#services" },
		{ label: "Mobile Development", href: "#services" },
		{ label: "Technical Architecture", href: "#services" },
		{ label: "Product Strategy", href: "#services" },
	],
	company: [
		{ label: "About Us", href: "#" },
		{ label: "Our Work", href: "#work" },
		{ label: "Process", href: "#process" },
		{ label: "Contact", href: "#cta" },
	],
	resources: [
		{ label: "Blog", href: "#" },
		{ label: "Case Studies", href: "#work" },
		{ label: "FAQ", href: "#faq" },
		{ label: "Documentation", href: "#" },
	],
};

const socialLinks = [
	{ icon: Twitter, href: "https://twitter.com/nearbylabs", label: "Twitter" },
	{ icon: Github, href: "https://github.com/nearby-labs", label: "GitHub" },
	// { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
	{ icon: Mail, href: "mailto:hello@nearbylabs.dev", label: "Email" },
];

export function Footer() {
	return (
		<footer className="bg-[#0a0a0a] border-t border-white/5">
			<Container>
				<div className="py-16 lg:py-20">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
						<div className="col-span-2 md:col-span-1">
							<div>
								<a href="/" className="flex items-center gap-3 mb-6">
									<Logo />
									<span className="text-xl font-medium text-white">
										Nearby<span className="text-[#F1A015]">Labs</span>
									</span>
								</a>
							</div>
							<p className="text-sm text-zinc-500 mb-8 max-w-xs">
								Helping startups build exceptional products with modern
								technology and expert guidance.
							</p>
							<div className="flex gap-3">
								{socialLinks.map((social) => (
									<a
										key={social.label}
										href={social.href}
										className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
										aria-label={social.label}
										target="_blank"
										rel="noopener noreferrer"
									>
										<social.icon className="w-4 h-4 text-zinc-400" />
									</a>
								))}
							</div>
						</div>

						<div>
							<h3 className="font-medium text-white mb-6">Services</h3>
							<ul className="space-y-4">
								{footerLinks.services.map((link) => (
									<li key={link.label}>
										<a
											href={link.href}
											className="text-sm text-zinc-500 hover:text-white transition-colors"
										>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h3 className="font-medium text-white mb-6">Company</h3>
							<ul className="space-y-4">
								{footerLinks.company.map((link) => (
									<li key={link.label}>
										<a
											href={link.href}
											className="text-sm text-zinc-500 hover:text-white transition-colors"
										>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h3 className="font-medium text-white mb-6">Resources</h3>
							<ul className="space-y-4">
								{footerLinks.resources.map((link) => (
									<li key={link.label}>
										<a
											href={link.href}
											className="text-sm text-zinc-500 hover:text-white transition-colors"
										>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-sm text-zinc-600">
							© {new Date().getFullYear()} Nearby Labs. All rights reserved.
						</p>
						<div className="flex gap-8">
							<a
								href="/privacy"
								className="text-sm text-zinc-600 hover:text-white transition-colors"
							>
								Privacy Policy
							</a>
							<a
								href="/terms"
								className="text-sm text-zinc-600 hover:text-white transition-colors"
							>
								Terms of Service
							</a>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
}
