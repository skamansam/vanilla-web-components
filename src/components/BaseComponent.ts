export default class BaseComponent extends HTMLElement {
	// Subclasses must set `static tagName = "..."` to the id of their <template>.
	// We can't derive this from `this.constructor.name` because minifiers (esbuild/terser)
	// strip the name off anonymous class expressions like the ones passed directly to
	// `customElements.define(name, class extends BaseComponent { ... })`, which silently
	// broke template lookup (and therefore the shadow DOM) in production builds while
	// working fine in unminified dev builds.
	static tagName: string;
	constructor() {
		super();
		const htmlElement = (this.constructor as typeof BaseComponent).tagName;
		const template = htmlElement ? document.getElementById(htmlElement) : null;
		if (!template) return;
		const templateContent = (template as HTMLTemplateElement).content;

		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.appendChild(templateContent.cloneNode(true));
		this.__initComponent();
	}
	__initComponent() {
		// `setup`/`render` are regular class methods on subclasses, so they live on the
		// prototype, not as "own" properties of the instance. `Object.hasOwn(this, "setup")`
		// (or the old `hasOwnProperty` equivalent) is therefore always false and would
		// silently skip calling them, e.g. breaking CategorySearch's input listener setup.
		// Since BaseComponent already provides no-op defaults, it's safe to always call these.
		this.setup();
		this.__render();
		this.render();
	}
	__render() {
		if (!this.shadowRoot) return;
		this.shadowRoot.querySelectorAll("[part]").forEach((elem) => {
			const attribute = elem.getAttribute("part");
			const value = attribute ? this.dataset?.[attribute] : undefined;
			if (attribute && value) elem.textContent = value;
			else (elem as HTMLElement).style.display = "none";
		});
	}
	static get observedAttributes() {
		return [];
	}
	setup() {}
	render() {}
	attributeChangedCallback(
		_name: string,
		_oldValue: string,
		_newValue: string,
	) {}
}
