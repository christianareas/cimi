"use client"

// Dependencies.
import { builder } from "@builder.io/sdk"
import { BuilderComponent, useIsPreviewing } from "@builder.io/react" 
import DefaultErrorPage from "next/error"

// Builder public API key.
if (process.env.BUILDER_API_KEY) {
  builder.init(process.env.BUILDER_API_KEY)
} else {
  console.error(
    "Set your Builder public API key in the BUILDER_PUBLIC_API_KEY environment variable."
  )
}

// Type definitions.
interface BuilderPageProps { 
  content: any
}

// Builder component.
export function RenderBuilderContent({
  content
}: BuilderPageProps) { 
  // Call the useIsPreviewing hook to determine if 
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing() 

  // If `content` has a value or the page is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  if (content || isPreviewing) {
    return (
      <BuilderComponent
        content={content}
        model="page"
      />
    )
  }

  // If the `content` is falsy and the page is 
  // not being previewed in Builder, render the 
  // DefaultErrorPage with a 404.
  return (
    <DefaultErrorPage
      statusCode={404}
    />
  )
}
