import { PCounter } from "./PCounter.js";

export class PCounterFactory {
    static _counter = null;
    
    static _createInstance() {
      return new PCounter();
    }
  
    static createInstance() {
      if (PCounterFactory._counter === null) {
        PCounterFactory._counter = PCounterFactory._createInstance();
      }
      return PCounterFactory._counter;
    }
  }