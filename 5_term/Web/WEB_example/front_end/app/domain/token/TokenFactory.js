import {Token} from "./Token.js";

export class TokenFactory {
    static createInstance() {
      return new Token();
    }
  }