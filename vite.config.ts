import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		tailwindcss(),
		react({
			babel: {
				plugins: [["babel-plugin-react-compiler"]],
			},
		}),
	],
	build: {
		// Optimize for mobile performance
		cssCodeSplit: true,
		rollupOptions: {
			output: {
				manualChunks(id) {
					// Split framer-motion into separate chunk (large library)
					if (id.includes("framer-motion")) {
						return "framer-motion";
					}
					// Split UI components
					if (
						id.includes("@radix-ui/react-accordion") ||
						id.includes("@radix-ui/react-dialog")
					) {
						return "ui-components";
					}
				},
			},
		},
		// Optimize chunk size
		chunkSizeWarningLimit: 1000,
	},
	// Optimize dependencies
	optimizeDeps: {
		include: ["react", "react-dom", "framer-motion"],
	},
});
