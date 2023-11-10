// Dependencies.
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import { NextResponse } from "next/server"

// Get the session from an API route.
export async function GET(request: Request) {
	// Get the session.
	const session = await getServerSession(authOptions)

	// If there’s no session, return a 401 error.
	if (!session) {
		return new NextResponse(
			JSON.stringify({
				status: "fail",
				message: "You’re not authenticated.",
			}),
			{
				status: 401
			},
		)
	}

	// Return the session.
	return NextResponse.json({
		authenticated: !!session,
		session,
	})
}
