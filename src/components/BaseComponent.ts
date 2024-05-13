export default class BaseComponent extends HTMLElement {
  constructor() {
    super();
    const htmlElement = this.constructor.name.replace(/[A-Z]/g, (match, offset) => (offset > 0 ? "-" : "") + match.toLowerCase());
    let template = document.getElementById(htmlElement);
    let templateContent = template.content;

    let shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(templateContent.cloneNode(true));
  }
  setup() {

  }
  render() {
    this.shadowRoot.querySelectorAll("[attribute]").forEach((elem) => {
      const attribute = elem.getAttribute("attribute");
      const value = this.dataset?.[attribute];
      if (attribute && value) elem.textContent = value;
      else elem.style.display = "none";
    });
    this.render();
  }
  static get observedAttributes() {
    return [];
  }
  attributeChangedCallback(name, oldValue, newValue) {
  }
}
