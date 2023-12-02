import { ApiServiceFactory } from "../../../api/ApiServiceFactory.js";
import { RouterFactory } from "../../route/RouterFactory.js";

import template from "./template.js";

class AddExample extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.mongoFactory = ApiServiceFactory.createInstance();
    this.router = RouterFactory.createInstance();
  }

  async connectedCallback() {
    this._render();
  }

  async newDocument() {
    this.titleInput = this.shadowRoot.querySelector('.Title').value;
    this.authorsInput = this.shadowRoot.querySelector('.Author').value;
    this.bodyInput = this.shadowRoot.querySelector('.body').value;
    this.tagsInput = this.shadowRoot.querySelector('.tag').value;

    let authors = this.authorsInput.split(", ").map((author) => author.trim());
    let tags = this.tagsInput.split(", ").map((tag) => tag.trim());

    try {
      let response = await this.mongoFactory.fetchInsertArticle(
        this.titleInput,
        authors,
        this.bodyInput,
        tags
      );

      if (response) {
        alert("Insert article successfully");
      } else {
        alert("Error inserting article");
      }
    } catch (error) {
      console.error(error);
      alert("Error inserting article");
    }
  }

  async _listener() {
    this.router.go("ApplicationWithDB");
  }

  _render() {
    if (!this.ownerDocument.defaultView) return;
    this.shadowRoot.innerHTML = template(this);

    this.shadowRoot.querySelector(".ButtonExit")
      .addEventListener("click", this._listener.bind(this));

    this.shadowRoot.querySelector('.ButtonSave')
      .addEventListener("click", this.newDocument.bind(this));
  }
}

customElements.define("custom-add", AddExample);
