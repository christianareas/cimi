"use client"

// Dependencies.
import { signIn, signOut } from "next-auth/react"
import Link from "next/link"

// Sign up.
export function SignUpButton() {
	return (
		<button
			className="border m-5 p-5"
		>
			<Link
				href="/sign-up"
			>
				Sign Up
			</Link>
		</button>
	)
}

// Sign in.
export function SignInButton() {
	return (
		<button
			onClick={() => signIn()}
			className="border m-5 p-5"
		>
			Sign In
		</button>
	)
}

// Sign out.
export function SignOutButton() {
	return (
		<button
			onClick={() => signOut()}
			className="border m-5 p-5"
		>
			Sign Out
		</button>
	)
}

// Account.
export function AccountButton() {
	return (
		<button
			className="border m-5 p-5"
		>
			<Link
				href="/account"
			>
				Account
			</Link>
		</button>
	)
}
