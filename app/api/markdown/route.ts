// Dependencies.
import { NextResponse } from "next/server"
import getMarkdown from "@/lib/content/getMarkdown"

// Types.
import type { NextRequest } from "next/server"

// Get Markdown.
export async function GET(request: NextRequest) {
	// Get the slug.
	const { searchParams } = new URL(request.url)
	const slug = searchParams.get("slug")

	// If there’s no slug, return an error.
	if (!slug) {
		return NextResponse.json(
			{ error: "You must define a `slug` query parameter." },
			{ status: 400 },
		)
	}

	// Get the Markdown content.
	try {
		const markdown = getMarkdown(slug)
		return NextResponse.json({ markdown }, { status: 200 })
	} catch (error) {
		return NextResponse.json(
			{
				error: `Couldn’t find a Markdown file. Ensure the data/content/${slug}.md file exists.`,
			},
			{ status: 404 },
		)
	}
}
