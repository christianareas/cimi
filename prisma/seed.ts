// Dependencies.
import { PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"

// Prisma client.
const prisma = new PrismaClient()

// Seed user.
async function seedUser() {
	// Create hashed password.
	const password = await hash("password", 12)

	// Create user.
	const user = await prisma.user.upsert({
		where: { email: "me@areas.me" },
		update: {},
		create: {
			email: "me@areas.me",
			password,
		},
	})
	console.log({ user })
}

// Call seed user.
seedUser()
	.then(() => prisma.$disconnect())
	.catch(async (error) => {
		console.error(error)
		await prisma.$disconnect()
		process.exit(1)
	})
