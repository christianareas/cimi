// Dependencies.
import { PrismaClient } from "@prisma/client"

// Define a global Prisma client.
const globalPrisma = global as unknown as { prisma: PrismaClient }

// Use the existing Prisma client or create a new one.
export const prisma =
	globalPrisma.prisma ||
	new PrismaClient({
		log: ["query"]
	})

// If not in production, set global Prisma client.
if (process.env.NODE_ENV !== "production") globalPrisma.prisma = prisma
