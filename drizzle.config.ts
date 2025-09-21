// Dependencies.
import { defineConfig } from "drizzle-kit"

// URL.
const url = process.env.DATABASE_URL
if (!url) {
	throw new Error("There’s no DATABASE_URL environment variable.")
}

// Configuration.
export default defineConfig({
	schema: "./src/db/schema.ts",
	out: "./src/db/migrations",
	dialect: "postgresql",
	dbCredentials: { url },
})
