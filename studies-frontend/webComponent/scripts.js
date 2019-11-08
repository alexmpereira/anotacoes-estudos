
var importContent = document.querySelector('#meuMenu').import;
var template = importContent.querySelector('#meuMenu').content;

customElements.define('meu-menu',
	class extends HTMLElement{
		constructor(){
			super();
			const shadowRoot = this.attachShadow({mode: 'open'})
			.appendChild(template.cloneNode(true));
		}
	}
)