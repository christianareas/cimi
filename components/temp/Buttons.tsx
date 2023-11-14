"use client"

// Dependencies.
import { signIn, signOut } from "next-auth/react"
import Link from "next/link"

// Sign up.
export function SignUpButton() {
	return (
		<button
			className="bg-blue-500 text-white my-2 mr-2 p-2 rounded"
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
			className="bg-blue-500 text-white my-2 mr-2 p-2 rounded"
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
			className="bg-blue-500 text-white my-2 mr-2 p-2 rounded"
		>
			Sign Out
		</button>
	)
}

// Account.
export function AccountButton() {
	return (
		<button
			className="bg-blue-500 text-white my-2 mr-2 p-2 rounded"
		>
			<Link
				href="/account"
			>
				Account
			</Link>
		</button>
	)
}
