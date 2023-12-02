import template from "./template.js";

import "../../composition/custom-add/component.js";

class XAdd extends HTMLElement {
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

customElements.define("app-add", XAdd);
