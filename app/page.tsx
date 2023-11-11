// Dependencies.
import {
  SignUpButton,
  SignInButton,
  SignOutButton,
  AccountButton,
} from "./components/buttons"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { User } from "./components/user"

// Home.
export default async function Home() {
  // Get the session from a server component.
  const session = await getServerSession(authOptions)

  return(
    <main>
      <SignUpButton />
      <SignInButton />
      <SignOutButton />
      <AccountButton />

      <p>Server session:</p>
      <pre>{JSON.stringify(session)}</pre>

      <User />
    </main>
  )
}
