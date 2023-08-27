# html-import-element
Basic Element to Import HTML Content

## Example

```html
<!-- title.html -->
<h1>HTML Imports are super cool!</h1>
```

```html
<!-- index.html -->
<html lang="en">
	<head>
		<script src="../html-import-element.js"></script>
	</head>
	<body>
		<html-import src="./title.html"></html-import>
	</body>
</html>
```

That `<body>` will turn into:
```html
<body>
	<h1>HTML Imports are super cool!</h1>
</body>
```

And that's it! Read the source code if you want to see what's going on, but we do a basic fetch, and then inject the content in the page.
