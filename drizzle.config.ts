// Dependencies.
import { defineConfig } from "drizzle-kit"

// URL.
const url = process.env.POSTGRES_URL_NON_POOLING
if (!url) {
	throw new Error("There’s no POSTGRES_URL_NON_POOLING environment variable.")
}

// Configuration.
export default defineConfig({
	schema: "./drizzle/schema.ts",
	out: "./drizzle/migrations",
	dialect: "postgresql",
	dbCredentials: { url },
})
