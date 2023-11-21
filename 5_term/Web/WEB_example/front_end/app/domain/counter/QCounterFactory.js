import { QCounter } from "./QCounter.js";

export class QCounterFactory {
    static _counter = null;
    
    static _createInstance() {
      return new QCounter();
    }
  
    static createInstance() {
      if (QCounterFactory._counter === null) {
        QCounterFactory._counter = QCounterFactory._createInstance();
      }
      return QCounterFactory._counter;
    }
  }