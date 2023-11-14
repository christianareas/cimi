"use client"

// Dependencies.
import { SessionProvider } from "next-auth/react"

type Props = {
	children?: React.ReactNode
}

// NextAuth providers.
export const NextAuthProviders = ({ children }: Props) => {
	return (
		<SessionProvider>
			{children}
		</SessionProvider>
	)
}
