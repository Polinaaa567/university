import { IDarticleFactory } from "../../../Store/id/IDarticleFactory.js";
import { ApiServiceFactory } from "../../../api/ApiServiceFactory.js";
import { RouterFactory } from "../../route/RouterFactory.js";

import template from "./template.js";

class InformationExample extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.mongoFactory = ApiServiceFactory.createInstance();
    this.collection = null;
    this.router = RouterFactory.createInstance();
    this.IDGet = IDarticleFactory.createInstance();
  }

  async connectedCallback() {
    this._render();
    this.renderDocument();
  }

  async _fetchCollection() {
    let id = this.IDGet.get();
    if (this.collection === null) {
      this.collection = await this.mongoFactory.fetchSpecificData(id);
    }
    return this.collection;
  }

  async renderDocument() {
    let collection = await this._fetchCollection();
    let Node = this.shadowRoot.querySelector('.divCell');

    collection.forEach((article) => {
      let articleDiv = document.createElement("div");
      articleDiv.innerHTML = `
          <p><strong>Название статьи:</strong> ${article.title}</p>
          <p><strong>Автор(ы):</strong> ${article.author.join(", ")}</p>
          <p><strong>Дата размещения:</strong> ${new Date(
            article.data
          ).toLocaleDateString()}</p>
          <p><strong>Текст статьи:</strong> ${article.body}</p>
          <p><strong>Теги:</strong> ${article.tag.join(", ")}</p>
          <p><strong>Критика:</strong></p>
          <ul>
            ${article.critique.map((c) => `
              <li>
                <p><strong>Пользователь:</strong> ${c.user_name}</p>
                <p><strong>Комментарий:</strong> ${c.text_message}</p>
                <p><strong>Рейтинг:</strong> ${c.rating}</p>
              </li>`
              ).join("")}
          </ul>
        `;
      Node.appendChild(articleDiv);
    });
  }

  _listener() {
    this.router.go("ApplicationWithDB");
  }

  _render() {
    if (!this.ownerDocument.defaultView) return;
    this.shadowRoot.innerHTML = template(this);

    this.shadowRoot.querySelector('.EXIT')
      .addEventListener("click", this._listener.bind(this));
  }
}

customElements.define("custom-inf", InformationExample);
