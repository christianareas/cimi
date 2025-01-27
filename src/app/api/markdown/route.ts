// Dependencies.
import { NextResponse } from "next/server"
import getMarkdown from "@/lib/api/getAndSaveMarkdown"

// Types.
import type { NextRequest } from "next/server"

// GET request.
export async function GET(request: NextRequest) {
	// Get the file source from the query parameters.
	const { searchParams } = new URL(request.url)
	const src = searchParams.get("src") ?? ""

	// Get the Markdown content.
	try {
		const markdown = await getMarkdown(src)

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
