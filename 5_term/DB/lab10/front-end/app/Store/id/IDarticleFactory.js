import { IDarticle } from "./IDarticle.js";

export class IDarticleFactory {
  static _id = null;

  static _createInstance() {
    return new IDarticle();
  }

  static createInstance() {
    if (IDarticleFactory._id === null) {
      IDarticleFactory._id = IDarticleFactory._createInstance();
    }
    return IDarticleFactory._id;
  }
}
