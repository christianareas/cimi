// Convert nodes to HTML.
function convertNodeToHTML(node) {
	switch (node.type) {
		// Headings.
		case "HEADING": {
			const level = node.headingData?.level || 2
			return `<h${level}>${(node.nodes || []).map(convertNodeToHTML).join("")}</h${level}>`
		}

		// Paragraphs.
		case "PARAGRAPH": {
			return `<p>${(node.nodes || []).map(convertNodeToHTML).join("")}</p>`
		}

		// Text.
		case "TEXT": {
			let text = node.textData.text
			if (node.textData.decorations) {
				for (const decoration of node.textData.decorations) {
					if (decoration.type === "BOLD") {
						text = `<strong>${text}</strong>`
					} else if (decoration.type === "ITALIC") {
						text = `<em>${text}</em>`
					} else if (
						decoration.type === "COLOR" &&
						decoration.colorData.foreground
					) {
						text = `<span style="color: ${decoration.colorData.foreground}">${text}</span>`
					}
				}
			}
			return text
		}

		// Ordered lists.
		case "ORDERED_LIST": {
			return `<ol>${(node.nodes || []).map(convertNodeToHTML).join("")}</ol>`
		}

		// Unordered lists.
		case "BULLETED_LIST": {
			return `<ul>${(node.nodes || []).map(convertNodeToHTML).join("")}</ul>`
		}

		// List items.
		case "LIST_ITEM": {
			return `<li>${(node.nodes || []).map(convertNodeToHTML).join("")}</li>`
		}

		// Dividers.
		case "DIVIDER": {
			return "<hr />"
		}

		// Button links.
		case "BUTTON": {
			const text = node.buttonData.text || ""
			const url = node.buttonData.link?.url || "#"
			const target = node.buttonData.link?.target || "_self"
			return `<a href="${url}" target="${target}">${text}</a>`
		}

		// Images.
		case "IMAGE": {
			const imageId = node.imageData.image.src.id
			const imageUrl = imageId.startsWith("http")
				? imageId
				: `https://static.wixstatic.com/media/${imageId}`
			return `<img src="${imageUrl}" alt="${node.imageData.caption || ""}"/>`
		}

		// Galleries.
		case "GALLERY": {
			const itemsHTML = node.galleryData.items
				.map((item) => {
					const url = item.image.media.src.url
					const fullUrl = url.startsWith("http")
						? url
						: `https://static.wixstatic.com/media/${url}`
					return `<img src="${fullUrl}" alt="Gallery image" />`
				})
				.join("")
			return `<div class="gallery">${itemsHTML}</div>`
		}

		// Tables.
		case "TABLE": {
			// Convert each row.
			const rowsHTML = (node.nodes || []).map(convertNodeToHTML).join("")
			return `<table>${rowsHTML}</table>`
		}

		// Table rows.
		case "TABLE_ROW": {
			const cellsHTML = (node.nodes || []).map(convertNodeToHTML).join("")
			return `<tr>${cellsHTML}</tr>`
		}

		// Table cells.
		case "TABLE_CELL": {
			return `<td>${(node.nodes || []).map(convertNodeToHTML).join("")}</td>`
		}

		// iFrames.
		case "HTML": {
			return node.htmlData?.html ? node.htmlData.html : ""
		}

		// Unsupported nodes.
		default: {
			console.error(
				"Unsupported node encountered:",
				JSON.stringify(node, null, 2),
			)
			return `<span>Unsupported node: ${node.type}</span>`
		}
	}
}

// Convert rich content to HTML.
function convertRichContentToHTML(richContent) {
	return richContent.nodes.map(convertNodeToHTML).join("\n")
}

// Parse.
const responseJson = pm.response.json()

// Initialize the posts array.
let wixPosts = []

// If the response contains the posts array, map to the new format.
if (responseJson.posts && responseJson.posts.length > 0) {
	wixPosts = responseJson.posts.map((wixPost) => {
		return {
			type: "fundraise",
			title: wixPost.title,
			end_at: wixPost.firstPublishedDate,
			coverUrl: wixPost.coverMedia?.image?.url
				? wixPost.coverMedia.image.url
				: null,
			description: wixPost.richContent
				? `<h1>${wixPost.title}</h1>\n
				${convertRichContentToHTML(wixPost.richContent)}`
				: "",
		}
	})
}

// Log the posts array.
console.log(wixPosts)

// Store the posts array as a collection variable.
pm.collectionVariables.set("wixPosts", JSON.stringify(wixPosts))
