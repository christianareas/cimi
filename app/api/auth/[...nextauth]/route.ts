// Dependencies.
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth"

// Configure NextAuth.
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign In",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
					label: "Password",
					type: "password",
				},
      },
      async authorize(credentials) {
        // Replace with logic to authenticate user.
        const user = { id: "1", name: "Christian", email: "me@areas.me" }
        return user
      },
    }),
  ],
}

// Handle requests.
const authHandler = NextAuth(authOptions)

export {
	authHandler as GET,
	authHandler as POST,
}
