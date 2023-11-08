// Dependencies.
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/app/lib/prisma"
import { compare } from "bcryptjs"
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
        // If there’s no email or password, return null.
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Find the user by their email.
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          },
        })

        // If there’s no user, return null.
        if (!user) {
          return null
        }

        // If the password is incorrect, return null.
        if (!(await compare(credentials.password, user.password))) {
          return null
        }
        
        // Return the user.
        return {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          randomKey: "I am a randomKey, and so can you.",
        }
      },
    }),
  ],
}

// Handle authentication requests.
const authHandler = NextAuth(authOptions)

export {
	authHandler as GET,
	authHandler as POST,
}
