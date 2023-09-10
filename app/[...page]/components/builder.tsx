"use client"

// Dependencies.
import { builder } from "@builder.io/sdk"
import { BuilderComponent, useIsPreviewing } from "@builder.io/react" 
import DefaultErrorPage from "next/error"

// Builder public API key.
builder.init("b4c50d0bc6434f6f9c3c2bd02024ae13")

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
