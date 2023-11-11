// Dependencies.
import {
  SignUpButton,
  SignInButton,
  SignOutButton,
  AccountButton,
} from "./components/buttons"
import { ClientComponent } from "./components/clientComponent"
import { ServerComponent } from "./components/serverComponent"

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
