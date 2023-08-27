# html-import-element
Custom Element for adding a super simple way to import external HTML!

```html
<!-- 1. include the script in your project -->
<script src="https://unpkg.com/html-import-element@1"></script>
<!-- 2. point to your external HTML files -->
<html-import src="./title.html"></html-import>
<!-- 3. PROFIT! -->
```

## Install

Just include the following script in your page:
```html
<script src="https://unpkg.com/html-import-element@1"></script>
```

## Features
- [x] Supports inline HTML
- [x] Supports inline CSS
- [x] Supports inline script
- [x] Supports external script

## Example

```html
<!-- title.html -->
<h1>HTML Imports are super cool!</h1>
```

```html
<!-- index.html -->
<html lang="en">
	<head>
		<script src="https://unpkg.com/html-import-element@1"></script>
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

## Development

You can run `npm start`, and navigate to the `/test` or `/example` pages, which validate and show the project use-cases.
