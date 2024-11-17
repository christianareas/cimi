// Dependencies.
import { NextResponse } from "next/server"
import getMarkdown from "@/src/lib/content/getMarkdown"

// Types.
import type { NextRequest } from "next/server"

// Get Markdown.
export async function GET(request: NextRequest) {
	// Get the file.
	const { searchParams } = new URL(request.url)
	const src = searchParams.get("src")

	// If there’s no file, return an error.
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
				error: `Couldn’t find a Markdown file. Ensure the data/content/${src} file exists.`,
			},
			{ status: 404 },
		)
	}
}
