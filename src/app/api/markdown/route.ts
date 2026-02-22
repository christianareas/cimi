// Dependencies.
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import getMarkdown from "@/lib/api/getAndSaveMarkdown"

// GET request.
export async function GET(_request: NextRequest) {
	try {
		const markdown = await getMarkdown()

		return NextResponse.json({ markdown }, { status: 200 })
	} catch (error) {
		console.error(error)
		return NextResponse.json(
			{
				error:
					"Couldn’t find any Markdown files. Ensure one exists at /src/data/content/.",
			},
			{ status: 404 },
		)
	}
}
