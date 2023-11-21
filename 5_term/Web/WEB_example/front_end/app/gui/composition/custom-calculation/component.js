
import '../../component/custom-button/component.js';
import '../../component/custom-input/component.js';
import '../../component/custom-row/component.js';

import { DCounterFactory, ECounterFactory, PCounterFactory, QCounterFactory, StatusFactory } from '../../../domain/index.js';
import { RouterFactory } from '../../route/RouterFactory.js';
import template from './template.js';


class CustomCalculation  extends HTMLElement {
    constructor() { 
        console.log('constructor custom-Calculation...');  
        super();   
        this.attachShadow({ mode: 'open' });  
        this.counterQ = QCounterFactory.createInstance();
        this.counterD = DCounterFactory.createInstance();
        this.counterP = PCounterFactory.createInstance();
        this.counterE = ECounterFactory.createInstance();
        
        this.fStatus = StatusFactory.createInstance();
    }
    
    connectedCallback() {  
    console.log('connectedCallback custom-Calculation...');  
    this._render();   
    this._startAutoChange();
    }
    
    disconnectedCallback() {     
    console.log('disconnectedCallback custom-Calculation...'); 
    this._stopAutoChange();
    } 
    
    _startAutoChange() {
        this._intervalId = setInterval(() => {
            this._performlistener();
        }, 1000)
    }

    _stopAutoChange() {
        clearInterval(this._intervalId);
    }
    static get observedAttributes() {
    return []; 
    }                    
    
    attributeChangedCallback(attr, prev, next) {
    console.log('attributeChangedCallback custom-Calculation...');     
    }
    
    //**********************************

    _exitlistener(event) {
        event.stopPropagation();  

        let router = RouterFactory.createInstance();    
        router.go('authentication');
    }

    _addlistener(event) {
        event.stopPropagation();  
        const row = document.createElement('custom-row');

        this.shadowRoot.childNodes[5].appendChild(row);
        this.counterE.increaseEmptyTasks();
    }
    
    _performlistener() {
        this._status = this.fStatus.getStatus(); 

        if(this._status === 'Готово') {
            this.counterD.increaseDoneTasks();
            this.counterP.decreasePerformTasks();
        } else if(this._status === 'Выполняется') {
            this.counterE.decreaseEmptyTasks();
            this.counterP.increasePerformTasks();
            this.counterD.decreaseDoneTasks();
        }
        this._status = "";
        this.fStatus.fixStatus(this._status);
        let node = this.shadowRoot.childNodes[5]
        console.log(11111);
        console.log(node.childNodes.length);
        this.counterQ.fixQuantityTasks(node.childNodes.length);
    }

    _render() {
    console.log('_render custom-Calculation...');      
        if(!this.ownerDocument.defaultView) return;    
        this.shadowRoot.innerHTML = template(this);
        this.shadowRoot.childNodes[1].addEventListener('click',this._exitlistener.bind(this));  
        
        this.shadowRoot.childNodes[3].addEventListener('click', this._addlistener.bind(this));
        // this.shadowRoot.childNodes[3].childNodes[3].addEventListener('click', this._performlistener.bind(this));
        // this.shadowRoot.childNodes[3].childNodes[11].addEventListener('click', this._donelistener.bind(this));
        console.log(this.shadowRoot.childNodes);
        
       
    }
     
}    

customElements.define('custom-calculation',CustomCalculation);

