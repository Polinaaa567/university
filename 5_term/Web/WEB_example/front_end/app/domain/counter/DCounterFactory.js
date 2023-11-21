import { DCounter } from "./DCounter.js";

export class DCounterFactory {
    static _counter = null;
    
    static _createInstance() {
      return new DCounter();
    }
  
    static createInstance() {
      if (DCounterFactory._counter === null) {
        DCounterFactory._counter = DCounterFactory._createInstance();
      }
      return DCounterFactory._counter;
    }
  }