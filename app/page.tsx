// Dependencies.
import {
  SignUpButton,
  SignInButton,
  SignOutButton,
  AccountButton,
} from "./components/buttons"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"

// Home.
export default async function Home() {
  // Get the session.
  const session = await getServerSession(authOptions)

  return(
    <main>
      <SignUpButton />
      <SignInButton />
      <SignOutButton />
      <AccountButton />

      {/* Session. */}
      <p>Server session:</p>
      <pre>{JSON.stringify(session)}</pre>
    </main>
  )
}
