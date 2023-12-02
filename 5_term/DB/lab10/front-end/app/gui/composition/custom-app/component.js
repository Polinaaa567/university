import { IDarticleFactory } from "../../../Store/id/IDarticleFactory.js";
import { ApiServiceFactory } from "../../../api/ApiServiceFactory.js";
import { RouterFactory } from "../../route/RouterFactory.js";

import template from "./template.js";

class DatabaseExample extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.mongoFactory = ApiServiceFactory.createInstance();
    this.collection = null;
    this.router = RouterFactory.createInstance();
    this.idFix = IDarticleFactory.createInstance();
  }

  // вызывается метод fetchMongoDB
  async _fetchCollection() {
    this.collection = await this.mongoFactory.fetchImportantData();
    return this.collection;
  }

  // получить всех авторов
  async getAllAuthor() {
    let collection = await this._fetchCollection();

    return collection.reduce((spisok, { author }) => {
      author.forEach((a) => spisok.add(a));
      return spisok;
    }, new Set());
  }

  // при создании данного блока вызывается сразу connectedCallback заполняет select
  async connectedCallback(event) {
    this._render();

    let authorSelect = this.shadowRoot.querySelector(".select");
    let authors = await this.getAllAuthor();

    authors.forEach((author) => {
      let option = document.createElement("option");
      option.value = author;
      option.text = author;
      authorSelect.appendChild(option);
    });
  }

  //**********************************

  // для добавления полей в div
  async renderDocument(article, index, Node, showRating = false) {
    let number = document.createElement("h1");
    number.textContent = `Статья № ${index + 1}`;

    let titleElement = document.createElement("p");
    titleElement.textContent = `Название статьи: ${article.title}`;

    let authorElement = document.createElement("p");
    authorElement.textContent = `Автор(ы): ${article.author.join(", ")}`;

    let date = document.createElement("p");
    date.textContent = `Дата размещения: ${new Date(
      article.data
    ).toLocaleDateString()}`;

    let additionalInfo = [];

    if (showRating) {
      let rating = document.createElement("p");
      rating.textContent = `Рейтинг: ${article.avgRating}`;
      additionalInfo.push(rating);

      let sizeCritique = document.createElement("p");
      sizeCritique.textContent = `Кол-во комментариев: ${article.sizeCritique}`;
      additionalInfo.push(sizeCritique);
    }

    let information = document.createElement("button");
    information.textContent = "Информация о статье";
    information.className = "button-margin";
    information.addEventListener("click", async () => {
      this.idFix.dispatch(this.idFix.FIX, article._id);
      this.router.go("Inform");
    });

    let deletedata = document.createElement("button");
    deletedata.className = "ButtonDelete";
    deletedata.textContent = "Удалить запись";
    deletedata.addEventListener("click", async () => {
      await this.deletedData(article._id);
    });

    let hr = document.createElement("hr");
    Node.append(
      number,
      titleElement,
      authorElement,
      date,
      ...additionalInfo,
      information,
      deletedata,
      hr
    );
  }

  // для показа документов
  async ShowDocument(event) {
    event.stopPropagation();

    let result = this.shadowRoot.querySelector(".article");
    result.textContent = "";

    this.shadowRoot.querySelector(".input-margin").value = "";

    try {
      let collection = await this._fetchCollection();

      collection.forEach((article, index) => {
        this.renderDocument(article, index, result);
      });
    } catch (e) {
      console.log(e);
    }
  }

  // ********************

  async deletedData(id) {
    try {
      let deletedata = await this.mongoFactory.fetchDeletedArticle(id);

      if (deletedata) {
        alert("Deleted article", deletedata);
        this.ShowDocument(new Event("click"));
        this.connectedCallback(new Event("click"));
      } else {
        alert("Article not found");
      }
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  }

  // для поиска по названию
  async SearchTitle(event) {
    event.stopPropagation();

    try {
      let collection = await this._fetchCollection();
      let result = this.shadowRoot.querySelector(".article");
      result.textContent = "";

      collection.forEach((article, index) => {
        let searchtitle = this.shadowRoot
          .querySelector(".input-margin")
          .value.toLowerCase();
        let { title } = article;

        if (searchtitle && title.toLowerCase().includes(searchtitle)) {
          this.renderDocument(article, index, result);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  // для фильтрации по автору
  async SearchAuthor(event) {
    event.stopPropagation();

    try {
      let collection = await this._fetchCollection();

      let result = this.shadowRoot.querySelector(".article");
      result.textContent = "";

      this.shadowRoot.querySelector(".input-margin").value = "";

      collection.forEach((article, index) => {
        let searchAuthor = this.shadowRoot
          .querySelector(".select")
          .value.toLowerCase();

        let { author } = article;
        if (author.some((a) => a.toLowerCase().includes(searchAuthor))) {
          this.renderDocument(article, index, result);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  async GetAddPage() {
    this.router.go("Add");
  }

  // *****************************

  async Top(event) {
    event.stopPropagation();

    let result = this.shadowRoot.querySelector(".article");
    result.textContent = "";

    this.shadowRoot.querySelector(".input-margin").value = "";

    try {
      this.collection = await this.mongoFactory.fetchTopFive();

      this.collection.forEach((article, index) => {
        this.renderDocument(article, index, result, true);
      });
    } catch (e) {
      console.log(e);
    }
  }

  async DateDiff(event) {
    let dateBegin = this.shadowRoot.querySelector('.dateBegin').value;
    let dateEnd = this.shadowRoot.querySelector('.dateEnd').value;
    
    let result = this.shadowRoot.querySelector(".article");
    result.textContent = "";
    
    this.collection = await this.mongoFactory.fetchDateDiff(dateBegin, dateEnd);
    this.collection.forEach((article, index) => {
      this.renderDocument(article, index, result);
    });
  }

  _render() {
    if (!this.ownerDocument.defaultView) return;
    this.shadowRoot.innerHTML = template(this);

    this.shadowRoot.querySelector(".button-margin")
      .addEventListener("click", this.ShowDocument.bind(this));

    this.shadowRoot.querySelector(".serchTitle")
      .addEventListener("click", this.SearchTitle.bind(this));

    this.shadowRoot.querySelector(".serchAuthor")
      .addEventListener("click", this.SearchAuthor.bind(this));

    this.shadowRoot.querySelector(".AddArticle")
      .addEventListener("click", this.GetAddPage.bind(this));

    this.shadowRoot.querySelector(".topButton")
      .addEventListener("click", this.Top.bind(this));

    this.shadowRoot.querySelector(".SendButton")
      .addEventListener("click", this.DateDiff.bind(this));
  }
}

customElements.define("custom-app", DatabaseExample);
