// Dependencies.
import { builder } from "@builder.io/sdk"
import { RenderBuilderContent } from "../../components/builder"

// Builder public API key.
if (process.env.BUILDER_PUBLIC_API_KEY) {
  builder.init(process.env.BUILDER_PUBLIC_API_KEY)
} else {
  console.error(
    "Set your Builder public API key in the BUILDER_PUBLIC_API_KEY environment variable."
  )
}

// Type definitions.
interface PageProps {
  params: {
    page: string[]
  }
}

// Builder page component.
export default async function Page(
  props: PageProps
) {
  const content = await builder
    // Get the page content from Builder with the specified options
    .get("page", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
      // Set prerender to false to return JSON instead of HTML
      prerender: false,
    })
    
    // Convert the result to a promise
    .toPromise()

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent
        content={content}
      />
    </>
  )
}
