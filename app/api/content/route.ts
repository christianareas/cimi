// Dependencies.
import { NextResponse } from "next/server"
import getMarkdown from "@/lib/content/getMarkdown"

// Types.
import type { NextRequest } from "next/server"

// Get Markdown.
export async function GET(request: NextRequest) {
	console.log("Test")

	// Get the slug.
	const { searchParams } = new URL(request.url)
	const markdownSlug = searchParams.get("markdownSlug")

	// If there’s no slug, return an error.
	if (!markdownSlug) {
		return NextResponse.json(
			{ error: "There’s no Markdown slug." },
			{ status: 400 },
		)
	}

	// Get the Markdown content.
	try {
		const markdownContent = getMarkdown(markdownSlug)
		return NextResponse.json({ markdownContent }, { status: 200 })
	} catch (error) {
		return NextResponse.json(
			{ error: "There’s no Markdown file." },
			{ status: 404 },
		)
	}
}
