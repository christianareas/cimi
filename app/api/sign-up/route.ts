// Dependencies.
import { prisma } from "@/lib/prisma"
import { hash } from "bcryptjs"
import { NextResponse } from "next/server"

// Sign up a user.
export async function POST(request: Request) {
	try {
		// Destructure the request body.
		const { 
			email,
			password,
		} = (await request.json()) as {
			email: string
			password: string
		}

		// Hash the password.
		const hashedPassword = await hash(password, 12)

		// Create the user.
		const user = await prisma.user.create({
			data: {
				email: email.toLowerCase(),
				password: hashedPassword,
			},
		})

		// Return the user.
		return NextResponse.json({
			user: {
				id: user.id,
				email: user.email,
			},
		})
	} catch (error: any) {
		// Return the error.
		return new NextResponse(
			JSON.stringify({
				status: "error",
				message: error.message,
			}),
			{ status: 500 },
		)
	}
}
