"use client"

// Dependencies.
import { signIn, signOut } from "next-auth/react"
import Link from "next/link"

// Sign up.
export function SignUpButton() {
	return (
		<Link
			href="/sign-up"
			className="border p-5"
		>
			Sign Up
		</Link>
	)
}

// Sign in.
export function SignInButton() {
	return (
		<button
			onClick={() => signIn()}
			className="border p-5"
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
			className="border p-5"
		>
			Sign Out
		</button>
	)
}

// Account.
export function AccountButton() {
	return (
		<Link
			href="/account"
			className="border p-5"
		>
			Account
		</Link>
	)
}
