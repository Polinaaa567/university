import template from './template.js';

import { UserFactory } from "../../../domain/index.js";
import { RouterFactory } from '../../route/index.js';
import {ApiServiceFactory} from '../../api/ApiServiceFactory.js';

import '../../component/custom-button/component.js';
import '../../component/custom-input/component.js';


class PredLogin extends HTMLElement {
  constructor() { 
    console.log('constructor custom-login...');  
    super();   
    this.attachShadow({ mode: 'open' });            
  }
     
  connectedCallback() {  
    console.log('connectedCallback custom-login...');  
    this._render();   
  }
  
  disconnectedCallback() {     
    console.log('disconnectedCallback custom-login...');    
  } 
  
  static get observedAttributes() {
    return []; 
  }                    
  
  attributeChangedCallback(attr, prev, next) {
    console.log('attributeChangedCallback custom-login...');     
    }
    
    //**********************************

  // async _fetch(){
    
  // }
    
  async _listener(event) {   
    console.log('custom-login clicked');                  
    event.stopPropagation();  

    console.log(this.shadowRoot.childNodes);
    let userName = (this.shadowRoot.childNodes[1].xValue);   
    let password = (this.shadowRoot.childNodes[3].xValue);     
    
    try{
    let log = ApiServiceFactory.createInstance();
    let ok = await log.getTokenData(userName, password); 
    // вернется токен, но можно возвращать и ок
    console.log(ok);
    console.log(this.shadowRoot.childNodes);
    // let user = UserFactory.createInstance();
    //   user.fixUserName(userName);    

    //   alert('User ' + userName);

    //   let router = RouterFactory.createInstance();    
    //   router.go('calculation');
    
    // if (ok) {

      let user = UserFactory.createInstance();
      user.fixUserName(userName);    

      alert('User ' + userName);

      let router = RouterFactory.createInstance();    
      router.go('calculation');
    // }
    // else {
    //   alert('Неправильный пароль или логин');

    // }
  } catch(e) {
    console.log(e);
  }  
  }   
      
  _render() {
    console.log('_render custom-login...');      
    if(!this.ownerDocument.defaultView) return;    
    this.shadowRoot.innerHTML = template(this);
    this.shadowRoot.childNodes[5].addEventListener('click',this._listener.bind(this));   
  }
}
     
     customElements.define('custom-login',PredLogin);
     console.log('Log:Defining custom-login');