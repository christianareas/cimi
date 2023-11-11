// Dependencies.
import { authOptions } from "@/lib/auth"
import NextAuth from "next-auth"

// Handle authentication requests.
const authHandler = NextAuth(authOptions)

export {
	authHandler as GET,
	authHandler as POST,
}
