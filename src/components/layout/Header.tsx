import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "../Logo";
import { Button } from "../ui/Button";
import { Container } from "./Container";

const navLinks = [
	{ href: "#services", label: "Services" },
	{ href: "#work", label: "Work" },
	{ href: "#process", label: "Process" },
	{ href: "#faq", label: "FAQ" },
];

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				isScrolled
					? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5"
					: "bg-transparent"
			}`}
		>
			<Container>
				<nav className="flex items-center justify-between h-20">
					<div>
						<a href="/" className="flex items-center gap-3 group">
							<Logo />
							<span className="text-xl font-medium text-white tracking-tight">
								Nearby<span className="text-[#F1A015]">Labs</span>
							</span>
						</a>
					</div>

					<div className="hidden md:flex items-center gap-10">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
							>
								{link.label}
							</a>
						))}
					</div>

					<div className="hidden md:block">
						<Button
							variant="primary"
							size="sm"
							onClick={() => {
								document
									.getElementById("cta")
									?.scrollIntoView({ behavior: "smooth" });
							}}
						>
							Get Started
						</Button>
					</div>

					<button
						type="button"
						className="md:hidden p-2 text-white"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label="Toggle menu"
					>
						{isMobileMenuOpen ? (
							<X className="w-6 h-6" />
						) : (
							<Menu className="w-6 h-6" />
						)}
					</button>
				</nav>
			</Container>

			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.2 }}
						className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10"
					>
						<div className="px-6 py-8 space-y-6">
							{navLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									className="block text-lg text-zinc-400 hover:text-white transition-colors"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{link.label}
								</a>
							))}
							<Button
								variant="primary"
								className="w-full mt-4"
								onClick={() => {
									setIsMobileMenuOpen(false);
									document
										.getElementById("cta")
										?.scrollIntoView({ behavior: "smooth" });
								}}
							>
								Get Started
							</Button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
