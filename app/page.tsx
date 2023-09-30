// Dependencies.
import {
  SignUpButton,
  SignInButton,
  SignOutButton,
  AccountButton,
} from "./components/buttons"

// Home.
export default function Home() {
  return(
    <main>
      <SignUpButton />
      <SignInButton />
      <SignOutButton />
      <AccountButton />
    </main>
  )
}
