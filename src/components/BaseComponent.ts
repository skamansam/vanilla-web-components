export default class BaseComponent extends HTMLElement {
  constructor() {
    super();
    const htmlElement = this.constructor.name.replace(/[A-Z]/g, (match, offset) => (offset > 0 ? "-" : "") + match.toLowerCase());
    let template = document.getElementById(htmlElement);
    let templateContent = template.content;


    let shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(templateContent.cloneNode(true));
    this.__initComponent();
  }
  __initComponent() {
    this.__setup();
    if(this.hasOwnProperty('setup')) this.setup();
    this.__render();
    if(this.hasOwnProperty('render')) this.render();
  }
  __setup() {
    if (!this.setup || this.setup === this.constructor.prototype.setup) return;
  }
  __render() {
    this.shadowRoot.querySelectorAll("[part]").forEach((elem) => {
      const attribute = elem.getAttribute("part");
      const value = this.dataset?.[attribute];
      if (attribute && value) elem.textContent = value;
      else elem.style.display = "none";
    });
    if (!this.hasOwn('render') || this.render === this.constructor.prototype.render) return;
  }
  static get observedAttributes() {
    return [];
  }
  attributeChangedCallback(name, oldValue, newValue) {
  }
}
