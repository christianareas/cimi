"use client"

// Dependencies.
import { useSession } from "next-auth/react"

// Client component.
export const ClientComponent = () => {
	// Get the session from the client.
	const { data: session, status } = useSession()

	// Render.
	return (
		<>
			<p>Session from a client component:</p>
			<pre>{JSON.stringify(session)}</pre>
		</>
	)
}
