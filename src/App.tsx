import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { CTA } from "./components/sections/CTA";
import { FAQ } from "./components/sections/FAQ";
import { Hero } from "./components/sections/Hero";
import { Process } from "./components/sections/Process";
import { Services } from "./components/sections/Services";
import { Stats } from "./components/sections/Stats";
import { Testimonials } from "./components/sections/Testimonials";
import { TrustLogos } from "./components/sections/TrustLogos";
import { Work } from "./components/sections/Work";

function App() {
	return (
		<div className="min-h-screen bg-[#f8fafc]">
			<Header />
			<main>
				<Hero />
				<TrustLogos />
				<Services />
				<Work />
				<Process />
				<Testimonials />
				<Stats />
				<FAQ />
				<CTA />
			</main>
			<Footer />
		</div>
	);
}

export default App;
