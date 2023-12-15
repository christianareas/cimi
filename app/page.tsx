// Dependencies.
import {
  SignUpButton,
  SignInButton,
  SignOutButton,
  AccountButton,
} from "./_components/temp/Buttons"
import { ClientComponent } from "./_components/temp/ClientComponent"
import { ServerComponent } from "./_components/temp/ServerComponent"

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
