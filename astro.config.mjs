// @ts-check
import node from "@astrojs/node"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import auth from "auth-astro"
import vercel from "@astrojs/vercel"

export default defineConfig({
	vite: { plugins: [tailwindcss()] },
	integrations: [react(), auth()],
	trailingSlash: "never",
	output: "server",
	adapter: vercel(),
	experimental: { svg: { mode: "sprite" } }
})
