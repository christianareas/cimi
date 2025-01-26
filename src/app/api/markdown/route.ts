// Dependencies.
import { NextResponse } from "next/server"
import getMarkdown from "@/lib/api/getMarkdown"

// Types.
import type { NextRequest } from "next/server"

// GET request.
export async function GET(request: NextRequest) {
	// Get the file source from the query parameters.
	const { searchParams } = new URL(request.url)
	const src = searchParams.get("src")

	// If there’s no file source, return an error.
	if (!src) {
		return NextResponse.json(
			{ error: "You must define a `src` query parameter." },
			{ status: 400 },
		)
	}

	// Get the Markdown content.
	try {
		const markdown = getMarkdown(src)
		return NextResponse.json({ markdown }, { status: 200 })
	} catch (error) {
		return NextResponse.json(
			{
				error: `Couldn’t find any Markdown files. Ensure one exists at /src/data/content${src}.`,
			},
			{ status: 404 },
		)
	}
}
