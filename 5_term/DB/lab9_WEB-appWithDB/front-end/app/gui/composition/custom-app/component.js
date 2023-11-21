import { ApiServiceFactory } from "../../api/ApiServiceFactory.js";

import "../../component/custom-button/component.js";
import "../../component/custom-input/component.js";

import template from "./template.js";

class DatabaseExample extends HTMLElement {
  constructor() {
    console.log("constructor custom-app...");
    super();
    this.attachShadow({ mode: "open" });

    this.mongoFactory = ApiServiceFactory.createInstance();
    this.collection = null;
  }

  // при создании данного блока вызывается сразу connectedCallback заполняет select
  async connectedCallback() {
    console.log("connectedCallback custom-app...");
    this._render();

    let authorSelect = this.shadowRoot.childNodes[3].childNodes[7];
    let authors = await this.getAllAuthor();

    authors.forEach(author => {
      let option = document.createElement('option');
      option.value = author;
      option.text = author;
      authorSelect.appendChild(option);
    })
  }

  // вызывается метод fetchMongoDB при чём только 1 раз
  async _fetchCollection() {
    console.log("_fetchCollection()");
    if (this.collection === null) {
      this.collection = await this.mongoFactory.fetchMongoDB();
    }
    return this.collection;
  }

  // получить всех авторов
  async getAllAuthor() {
    let collection = await this._fetchCollection();

    return collection.reduce((spisok, {author}) => {
      author.forEach(a => spisok.add(a));
      return spisok;
    }, new Set());
  }

  //**********************************

  // для добавления полей в div
  async renderDocument(article, index, Node) {
    let number = document.createElement("p");
    let titleElement = document.createElement("p");
    let authorElement = document.createElement("p");
    let date = document.createElement("p");
    let br = document.createElement("br");

    number.textContent = `Статья № ${index + 1}`;
    titleElement.textContent = `Название статьи: ${article.title}`;
    authorElement.textContent = `Автор(ы): ${article.author.join(", ")}`;
    date.textContent = `Дата размещения: ${article.data} \n\n`;

    Node.append(number, titleElement, authorElement, date, br);
  }

  // для показа документов
  async ShowDocument(event) {
    console.log("custom-login clicked");
    event.stopPropagation();

    console.log(this.shadowRoot.childNodes);
    
    let result = this.shadowRoot.childNodes[5];
    result.textContent = '';
    
    this.shadowRoot.childNodes[3].childNodes[3].xValue = '';
    try {
      let collection = await this._fetchCollection();
      console.log(collection);

      collection.forEach((article, index) => {
        this.renderDocument(article, index, result);
      });
    } catch (e) {
      console.log(e);
    }
  }

  // для поиска по названию
  async SearchTitle(event) {
    console.log("custom-button clicked SearchTitle");
    event.stopPropagation();

    try {
      let collection = await this._fetchCollection();
      let result = this.shadowRoot.childNodes[5];
      result.textContent = '';

      collection.forEach((article, index) => {
        let searchtitle = this.shadowRoot.childNodes[3].childNodes[3].xValue.toLowerCase();
        console.log(searchtitle);
        let {title} = article;
       
        if (searchtitle  && title.toLowerCase().includes(searchtitle )) {
          this.renderDocument(article, index, result);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  // для фильтрации по автору
  async SearchAuthor(event) {
    console.log("custom-button clicked SearchAuthor");
    event.stopPropagation();

    try {
      let collection = await this._fetchCollection();
      
      let result = this.shadowRoot.childNodes[5];
      result.textContent = '';
      this.shadowRoot.childNodes[3].childNodes[3].xValue = '';

      collection.forEach((article, index) => {
        let searchAuthor = this.shadowRoot.childNodes[3].childNodes[7].value.toLowerCase();
        console.log(searchAuthor);

        let {author} = article;
        if (author.some(a => a.toLowerCase().includes(searchAuthor))) {
          this.renderDocument(article, index, result);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  _render() {
    console.log("_render custom-app...");
    if (!this.ownerDocument.defaultView) return;
    this.shadowRoot.innerHTML = template(this);

    console.log(this.shadowRoot.childNodes);
    console.log(this.shadowRoot.childNodes[3].childNodes);
    
    this.shadowRoot.childNodes[3].childNodes[1].addEventListener(
      "click",
      this.ShowDocument.bind(this)
    );

    this.shadowRoot.childNodes[3].childNodes[5].addEventListener(
      'click',
      this.SearchTitle.bind(this)
    );

    this.shadowRoot.childNodes[3].childNodes[9].addEventListener(
      'click',
      this.SearchAuthor.bind(this)
    )
  }
}

customElements.define("custom-app", DatabaseExample);
console.log("Log:Defining custom-app");
