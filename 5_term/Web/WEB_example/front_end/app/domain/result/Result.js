import { Store } from "../Store.js";

export class Result extends Store {

    constructor() {
      super();
      this._result = '';
    }
  
    fixResult(result) {
      this._result = result;
      console.log('Result::fixResult: ' + this._result);
      super._emit(this._result);
    }
  
    getResult() {
      console.log('Result::getResult: ' + this._result);
      return this._result;
    }
  }