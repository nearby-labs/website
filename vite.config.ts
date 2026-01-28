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
				manualChunks: {
					// Split framer-motion into separate chunk (large library)
					"framer-motion": ["framer-motion"],
					// Split UI components
					"ui-components": [
						"@radix-ui/react-accordion",
						"@radix-ui/react-dialog",
					],
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
