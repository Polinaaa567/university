import template from './template.js'

import '../../composition/custom-app/component.js'

class XApplicationwithDB extends HTMLElement {
    
  constructor() { 
    console.log('constructor XApplicationwithDB...');  
    super();   
    this.attachShadow({mode: 'open'});               
  }

  connectedCallback() {  
    console.log('connectedCallback XApplicationwithDB...');  
    this._render();   
  }
  
  //**********************************
  
  _render() {
    console.log('_render XApplicationwithDB...');      
    if(!this.ownerDocument.defaultView) return;    
    this.shadowRoot.innerHTML = template(this);      
  }
}

customElements.define('x-applicationwithdb', XApplicationwithDB);
console.log('Log:Defining web-authentication');