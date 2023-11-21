import { ECounter } from "./ECounter.js";

export class ECounterFactory {
    static _counter = null;
    
    static _createInstance() {
      return new ECounter();
    }
  
    static createInstance() {
      if (ECounterFactory._counter === null) {
        ECounterFactory._counter = ECounterFactory._createInstance();
      }
      return ECounterFactory._counter;
    }
  }