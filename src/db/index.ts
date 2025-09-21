// Dependencies.
import { sql } from "@vercel/postgres"
import { drizzle } from "drizzle-orm/vercel-postgres"

// Database.
export const db = drizzle(sql)
