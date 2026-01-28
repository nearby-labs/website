import { useEffect, useRef } from "react";

interface Particle {
	x: number;
	y: number;
	size: number;
	speedX: number;
	speedY: number;
	opacity: number;
}

export function AnimatedBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const particlesRef = useRef<Particle[]>([]);
	const animationRef = useRef<number>(0);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		// Initialize particles
		const particleCount = 25;
		particlesRef.current = [];

		for (let i = 0; i < particleCount; i++) {
			particlesRef.current.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				size: Math.random() * 2 + 1,
				speedX: (Math.random() - 0.5) * 0.3,
				speedY: (Math.random() - 0.5) * 0.3,
				opacity: Math.random() * 0.5 + 0.2,
			});
		}

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Draw particles
			particlesRef.current.forEach((particle) => {
				// Update position
				particle.x += particle.speedX;
				particle.y += particle.speedY;

				// Wrap around screen
				if (particle.x < 0) particle.x = canvas.width;
				if (particle.x > canvas.width) particle.x = 0;
				if (particle.y < 0) particle.y = canvas.height;
				if (particle.y > canvas.height) particle.y = 0;

				// Draw particle
				ctx.beginPath();
				ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(212, 175, 55, ${particle.opacity})`;
				ctx.fill();
			});

			// Draw connections between nearby particles
			particlesRef.current.forEach((particle, i) => {
				particlesRef.current.slice(i + 1).forEach((otherParticle) => {
					const dx = particle.x - otherParticle.x;
					const dy = particle.y - otherParticle.y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < 150) {
						ctx.beginPath();
						ctx.moveTo(particle.x, particle.y);
						ctx.lineTo(otherParticle.x, otherParticle.y);
						ctx.strokeStyle = `rgba(212, 175, 55, ${0.1 * (1 - distance / 150)})`;
						ctx.lineWidth = 0.5;
						ctx.stroke();
					}
				});
			});

			animationRef.current = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			cancelAnimationFrame(animationRef.current);
		};
	}, []);

	return (
		<>
			<canvas
				ref={canvasRef}
				className="absolute inset-0 z-0 pointer-events-none"
				style={{ opacity: 0.6 }}
			/>

			<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
				<div
					className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#F1A015]/5 rounded-full blur-[150px] animate-pulse"
					style={{ animationDuration: "8s" }}
				/>
				<div
					className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#ffc258]/5 rounded-full blur-[150px] animate-pulse"
					style={{ animationDuration: "10s", animationDelay: "2s" }}
				/>
				<div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F1A015]/3 rounded-full blur-[200px] animate-pulse"
					style={{ animationDuration: "12s", animationDelay: "4s" }}
				/>
			</div>

			<div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23d4af37%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
		</>
	);
}
