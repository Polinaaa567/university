import { Store } from "../Store.js";

export class Token extends Store {

    constructor() {
      super();
      this._token = '';
    }
  
    fixToken(token) {
      this._token = token;
      //sessionStorage.setItem('tokenData', JSON.stringify(token));
      console.log('token::fixtoken: ' + this._token);
      super._emit(this._token);
    }
  
    getToken() {
      console.log('status::gettoken: ' + this._token);
      return this._token;
    }
  }
