// Dependencies.
import { NextResponse } from "next/server"
import getMarkdown from "@/lib/api/getAndSaveMarkdown"

// Types.
import type { NextRequest } from "next/server"

// GET request.
export async function GET(request: NextRequest) {
	try {
		const markdown = await getMarkdown()

		return NextResponse.json({ markdown }, { status: 200 })
	} catch (error) {
		return NextResponse.json(
			{
				error:
					"Couldn’t find any Markdown files. Ensure one exists at /src/data/content/.",
			},
			{ status: 404 },
		)
	}
}
