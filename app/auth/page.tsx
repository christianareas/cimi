// Dependencies.
import {
  SignUpButton,
  SignInButton,
  SignOutButton,
  AccountButton,
} from "../../components/temp/Buttons"
import { ClientComponent } from "../../components/temp/ClientComponent"
import { ServerComponent } from "../../components/temp/ServerComponent"

// Home.
export default function Auth() {
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
