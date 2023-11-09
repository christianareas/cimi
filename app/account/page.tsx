"use client"

// Deependencies.
import { redirect } from "next/navigation"
import { useSession } from "next-auth/react"
import { cache, use } from "react"

// Types.
type User = {
	id: string
	email: string
	name: string
}

// Get users (placeholder).
const getUsers = cache(() =>
	fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json())
)

// Page.
export default function Account() {
	// Get the session or redirect the user to the sign in page.
	const { status } = useSession({
		required: true,
		onUnauthenticated() {
			redirect("/api/auth/signin") // ** how do I change this to /sign-in?
		}
	})

	// If status loading, display loading.
	if (status === "loading") {
		return <p>Loading...</p>
	}

	// Get the users.
	let users = use<User[]>(getUsers())

	// JSX.
	return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 20,
        }}
      >
        {users.map((user) => (
          <div
            key={user.id}
            style={{ border: "1px solid #ccc", textAlign: "center" }}
          >
            <img
              src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
              alt={user.name}
              style={{ height: 180, width: 180 }}
            />
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
