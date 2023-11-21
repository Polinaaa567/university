import { Store } from "../Store.js";

export class Status extends Store {

    constructor() {
      super();
      this._status = '';
    }
  
    fixStatus(status) {
      this._status = status;
      console.log('status::fixStatus: ' + this._status);
      super._emit(this._status);
    }
  
    getStatus() {
      console.log('status::getStatus: ' + this._status);
      return this._status;
    }
  }
