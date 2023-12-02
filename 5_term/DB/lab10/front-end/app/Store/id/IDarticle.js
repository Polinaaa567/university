import { Store } from "../Store.js";

export class IDarticle extends Store {
  FIX = "fix";

  constructor() {
    super();
    this._id = "";
  }

  fix(id) {
    this._id = id;
    console.log("ID::fix_id: " + this._id);
    super._emit(this._id);
  }

  get() {
    console.log("_id::get_id: " + this._id);
    return this._id;
  }

  dispatch(action, value) {
    switch (action) {
      case this.FIX:
        this.fix(value);
        break;

      default:
        break;
    }
  }
}
