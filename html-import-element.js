class HTMLImport extends HTMLElement {
	async connectedCallback() {
		// src should contain a relative link to the HTML file
		const htmlSrc = this.getAttribute('src');

		// fetch the content
		const htmlResult = await fetch(htmlSrc);
		const htmlContent = await htmlResult.text();

		// create an empty element to store new DOM
		const empty = document.createElement('template')
		empty.innerHTML = htmlContent;

		// if any script tags are added, clone them
		const scripts = empty.content.querySelectorAll('script');
		scripts.forEach((script) => {
			// Clone the script node
			const clonedScript = document.createElement('script');
			[...script.attributes].forEach((attr) => clonedScript.setAttribute(attr.name, attr.value));
			clonedScript.textContent = script.textContent;

			// replace the original script tag with this new one (which will cause it to trigger)
			script.parentNode.replaceChild(clonedScript, script);
		});

		// replace this tag with the new content
		this.replaceWith(...empty.content.childNodes)
	}
}

customElements.define('html-import', HTMLImport)
