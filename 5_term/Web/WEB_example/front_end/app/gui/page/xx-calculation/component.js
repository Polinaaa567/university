import template from './template.js'

import '../../component/custom-label/component.js';
import '../../composition/custom-calculation/component.js'

class XCalculation extends HTMLElement {
    
 constructor() { 
   console.log('constructor authentication...');  
   super();   
   this.attachShadow({ mode: 'open' });               
 }

 connectedCallback() {  
   console.log('connectedCallback authentication...');  
   this._render();   
 }

 disconnectedCallback() {     
   console.log('disconnectedCallback authentication...');    
 } 

 static get observedAttributes() {
   return []; 
}                    

 attributeChangedCallback(attr, prev, next) {
   console.log('attributeChangedCallback authentication...');     
 }
 
 //**********************************
 
 _render() {
   console.log('_render authentication...');      
   if(!this.ownerDocument.defaultView) return;    
   this.shadowRoot.innerHTML = template(this);      
 }
}

customElements.define('xx-calculation',XCalculation);
console.log('Log:Defining web-authentication');