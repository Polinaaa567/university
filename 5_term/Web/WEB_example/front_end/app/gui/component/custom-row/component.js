import template from './template.js';
import { ApiServiceFactory } from '../../api/ApiServiceFactory.js';
import { ResultFactory } from "../../../domain/index.js";
import { StatusFactory } from '../../../domain/index.js';

class CustomRow extends HTMLElement {

  constructor() {
    console.log('constructor Custom-table...');
    super();
    this.attachShadow({ mode: 'open' });
    this.api = ApiServiceFactory.createInstance();
  }

  connectedCallback() {
    console.log('connectedCallback custom-table...');
    this._render();
  }

  disconnectedCallback() {
    console.log('disconnectedCallback custom-table...');
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('attributeChangedCallback custom-table...');
  }



  async _listenerPerform(event) {
    event.stopPropagation();
    let a = (this.shadowRoot.childNodes[3].childNodes[1].childNodes[0].xValue);
    let b = (this.shadowRoot.childNodes[3].childNodes[1].childNodes[2].xValue);
    if(!a || !b || isNaN(a) || isNaN(b)){
      alert("Please enter a number");
  }
  else{
    try {
      this.fResult = ResultFactory.createInstance();
      this.fStatus = StatusFactory.createInstance();
      this._result = await this.api.calc(a, b);
      this.fResult.fixResult(this._result);
    } catch (error) {
      console.log(error);
    }

    let tdStatus = (this.shadowRoot.childNodes[3].childNodes[9]);
    tdStatus.innerHTML = 'Выполняется';
    this.fStatus.fixStatus(tdStatus.textContent);
    (this.shadowRoot.childNodes[3].childNodes[5]).innerHTML = ' ';
  }
}

  _listenerUpdate(event) {
    event.stopPropagation();
    let tdStatus = (this.shadowRoot.childNodes[3].childNodes[9]);
    if (tdStatus.innerHTML === 'Выполняется') {
      tdStatus.innerHTML = 'Готово';
      this.fStatus.fixStatus(tdStatus.textContent);

      this.result = this.fResult.getResult();
      (this.shadowRoot.childNodes[3].childNodes[5]).innerHTML = this.result;
    }
  }

  _listenerDelete(event) { 
    event.stopPropagation();
    this.remove();
  }

  _render() {
    console.log('_render custom-table...');
    if (!this.ownerDocument.defaultView) return;
    this.shadowRoot.innerHTML = template(this);
    console.log(this.shadowRoot.childNodes);
    console.log(this.shadowRoot.childNodes[3].childNodes[3]);
    this.shadowRoot.childNodes[3].childNodes[3].childNodes[0].addEventListener('click', this._listenerPerform.bind(this));
    this.shadowRoot.childNodes[3].childNodes[11].childNodes[0].addEventListener('click', this._listenerUpdate.bind(this));
    this.shadowRoot.childNodes[3].childNodes[7].childNodes[0].addEventListener('click', this._listenerDelete.bind(this));
  }
}

customElements.define('custom-row', CustomRow);
console.log('Log:Defining custom-row');

