import {
	GITHUB_CLIENT_ID as clientId,
	GITHUB_CLIENT_SECRET as clientSecret
} from "@/lib/env"
import GitHub from "@auth/core/providers/github"
import { defineConfig } from "auth-astro"

export default defineConfig({ providers: [GitHub({ clientId, clientSecret })] })
