import { ApiServiceFactory } from "../../../api/ApiServiceFactory.js";
import { RouterFactory } from "../../route/RouterFactory.js";

import template from "./template.js";

class ApplicationMain extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.mongoFactory = ApiServiceFactory.createInstance();
    this.collection = null;
    this.router = RouterFactory.createInstance();
  }

  async _fetchCollection() {
    this.collection = await this.mongoFactory.fetchCollection();
    return this.collection;
  }

  // получить названия всех коллекций
  async getAllCollection() {
    let collections = await this._fetchCollection();

    console.log(collections);
    return collections.reduce((spisok, { name }) => {
      spisok.add(name);

      console.log(spisok);
      return spisok;
    }, new Set());
  }

  async renderTable(collectionSelect, event) {
    let data = await this.mongoFactory.fetchAllData(collectionSelect);

    let table = document.createElement("table");
    table.className = "table";

    // Добавить новый документ
    let addNewButton = document.createElement("button");
    addNewButton.className = 'AddNewDocument';
    addNewButton.textContent = "Добавить новый документ";
    addNewButton.addEventListener("click", () => {
      let modal = document.createElement("div");
      modal.classList.add("modal");
      modal.innerHTML = `
      <div class="modal-content">
        <span class="closeNew">&times;</span>
        <textarea class="dataNewArea" placeholder="Enter JSON data"></textarea>
        <button class="saveButtonNew">Save</button>
      </div>
    `;
      this.shadowRoot.appendChild(modal);

      let closeButton = modal.querySelector(".closeNew");
      closeButton.addEventListener("click", () => {
        modal.remove();
      });

      let saveButton = modal.querySelector(".saveButtonNew");
      saveButton.addEventListener("click", async () => {
        let newDataCol = JSON.parse(modal.querySelector(".dataNewArea").value);

        delete newDataCol._id;
        let result = await this.mongoFactory.fetchInsertData(
          collectionSelect,
          newDataCol
        );
        console.log(result);

        let existingTable = this.shadowRoot.querySelector("table");
        existingTable.remove();
        this.renderTable(collectionSelect);
        modal.remove();
      });
    });

    let headerRow = document.createElement("tr");

    Object.keys(data[0]).forEach((key) => {
      let headerCell = document.createElement("th");
      headerCell.textContent = key;
      headerRow.appendChild(headerCell);
    });

    let addButtonHeaderCell = document.createElement("th");
    addButtonHeaderCell.appendChild(addNewButton);
    headerRow.appendChild(addButtonHeaderCell);
    table.appendChild(headerRow);

    data.forEach((item) => {
      // Delete document
      let ButtonDelete = document.createElement("button");
      ButtonDelete.className = "delete";
      ButtonDelete.textContent = "Delete";
      ButtonDelete.addEventListener("click", async (event) => {
        event.stopPropagation();
        let result = await this.mongoFactory.fetchDeletedData(
          collectionSelect,
          item._id
        );
        console.log(result);
        let existingTable = this.shadowRoot.querySelector("table");
        existingTable.remove();
        this.renderTable(collectionSelect);
      });

      // Update document
      let ButtonUpdate = document.createElement("button");
      ButtonUpdate.className = "update";
      ButtonUpdate.textContent = "Update";
      ButtonUpdate.addEventListener("click", async (event) => {
        event.stopPropagation();

        // Создаётся окно для ввода
        let modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `
          <div class="modal-content">
            <span class="close">&times;</span>
            <textarea class="dataTextArea">${JSON.stringify(item)}</textarea>
            <button class="saveButton">Save</button>
          </div>
        `;
        this.shadowRoot.appendChild(modal);

        let closeButton = modal.querySelector(".close");
        closeButton.addEventListener("click", () => {
          modal.remove();
        });

        let saveButton = modal.querySelector(".saveButton");
        saveButton.addEventListener("click", async () => {
          let newData = JSON.parse(modal.querySelector(".dataTextArea").value);

          delete newData._id;
          let result = await this.mongoFactory.fetchUpdateData(
            collectionSelect,
            item._id,
            newData
          );
          console.log(result);

          let existingTable = this.shadowRoot.querySelector("table");
          existingTable.remove();
          this.renderTable(collectionSelect);
          modal.remove();
        });
      });

      let dataRow = document.createElement("tr");

      Object.values(item).forEach((value) => {
        let dataCell = document.createElement("td");
        if (typeof value === "object") {
          dataCell.textContent = JSON.stringify(value);
        } else {
          dataCell.textContent = value;
        }

        dataRow.append(dataCell, ButtonUpdate, ButtonDelete);
      });
      table.appendChild(dataRow);
    });

    let existingTable = this.shadowRoot.querySelector("table");
    if (existingTable) {
      existingTable.replaceWith(table);
    } else {
      this.shadowRoot.appendChild(table);
    }
  }

  async connectedCallback(event) {
    this._render();

    let collectionSelect = this.shadowRoot.querySelector(".select");
    let names = await this.getAllCollection();

    names.forEach((collection) => {
      let option = document.createElement("option");
      option.value = collection;
      option.text = collection;
      collectionSelect.appendChild(option);
    });

    const selectArticleButton = this.shadowRoot.querySelector(".selectArticle");
    selectArticleButton.addEventListener("click", () => {
      let selectedCollection = collectionSelect.value;
      this.renderTable(selectedCollection);
    });
  }

  _render() {
    if (!this.ownerDocument.defaultView) return;
    this.shadowRoot.innerHTML = template(this);
  }
}

customElements.define("app-main", ApplicationMain);
