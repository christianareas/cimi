// Dependencies.
import {
  SignUpButton,
  SignInButton,
  SignOutButton,
  AccountButton,
} from "./components/Buttons"
import { ClientComponent } from "./components/ClientComponent"
import { ServerComponent } from "./components/ServerComponent"

// Home.
export default function Home() {
  // Render.
  return(
    <main>
      {/* Buttons */}
      <SignUpButton />
      <SignInButton />
      <SignOutButton />
      <AccountButton />

      {/* Components */}
      <ClientComponent />
      <ServerComponent />
    </main>
  )
}
