"use client"

// Dependencies.
import { useSession } from "next-auth/react"

// User.
export const User = () => {
	const { data: session, status } = useSession()

	return (
		<>
			<p>Client session:</p>
			<pre>{JSON.stringify(session)}</pre>
		</>
	)
}
