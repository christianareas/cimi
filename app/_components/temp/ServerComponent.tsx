// Dependencies.
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/_lib/auth"

// Server component.
export const ServerComponent = async () => {
	// Get the session from the server.
	const session = await getServerSession(authOptions)

	// Render.
	return (
		<>
			<p>Session from a server component:</p>
			<pre>{JSON.stringify(session)}</pre>
		</>
	)
}
