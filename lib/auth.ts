// Dependencies.
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import { compare } from "bcryptjs"

// Configure NextAuth.
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
		// Configure the CredentialsProvider (email and password).
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
			// Authorize the user.
      async authorize(credentials) {
        // If there’s no email or password, return null.
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        // Find the user by their email.
        const user = await prisma.user.findUnique({
          where: {
            userEmail: credentials.email
          },
        })
        // If there’s no user, return null.
        if (!user) {
          return null
        }
        // If the password’s incorrect, return null.
        if (!(await compare(credentials.password, user.userPassword))) {
          return null
        }
        // Return the user.
        return {
          id: user.userId,
          email: user.userEmail,
          firstName: user.userFirstName,
          lastName: user.userLastName,
          testKey: "I am a testKey, and so can you.",
        }
      },
    }),
  ],
  callbacks: {
    // Add the user’s ID to the session.
    session: ({ session, token }) => {
      console.log("session callback", { session, token }) // ** debug
      
			return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      }
    },
    // Add the user’s ID to the JWT.
    jwt: ({ token, user }) => {
      console.log("jwt callback", { token, user }) // ** debug
      
			if (user) {
        const u = user as unknown as any
        return {
          ...token,
          id: u.id,
        }
      }
      
			return token
    },
  },
  pages: {
    signIn: "/sign-in",
  },
}
