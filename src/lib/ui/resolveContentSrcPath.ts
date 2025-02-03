// Types.
import type { Markdown } from "@/lib/api/getAndSaveMarkdown"

// Resolve the content source path.
export default function resolveContentSrcPath(
	object: Markdown,
	path: string,
): string | undefined {
	const keys = path.split(".")
	let current: Markdown | string | undefined = object
	for (const key of keys) {
		if (typeof current === "object" && current !== null && key in current) {
			current = current[key]
		} else {
			return undefined
		}
	}
	return typeof current === "string" ? current : undefined
}
