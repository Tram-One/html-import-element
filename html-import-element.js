class HTMLImport extends HTMLElement {
	async connectedCallback() {
		// src should contain a relative link to the HTML file
		const htmlSrc = this.getAttribute('src');

		// fetch the content
		const htmlResult = await fetch(htmlSrc);
		const htmlContent = await htmlResult.text();

		// replace this tag with the new content
		this.outerHTML = htmlContent;
	}
}

customElements.define('html-import', HTMLImport)
