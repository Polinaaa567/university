import template from "./template.js";

import "../../composition/custom-app/component.js";

class XApplicationwithDB extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this._render();
  }

  //**********************************

  _render() {
    if (!this.ownerDocument.defaultView) return;
    this.shadowRoot.innerHTML = template(this);
  }
}

customElements.define("app-main", XApplicationwithDB);
