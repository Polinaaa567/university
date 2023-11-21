import { Store } from "../Store.js";

export class QCounter extends Store {

    constructor() {
      super();
      this._quantityTasks = 0;
    }
  // QuantityTasks
    getQuantityTasks() {
      return this._quantityTasks;
    }
    
    fixQuantityTasks(quantity) {
      this._quantityTasks = quantity;
      super._emit(this._quantityTasks);
    }
    
  
    // increaseQuantityTasks() {
    //   this._quantityTasks += 1;
    //   super._emit(this._quantityTasks);
    // }

    // decreaseQuantityTasks() {
    //     this._quantityTasks -= 1;
    //     super._emit(this._quantityTasks);
    // }
}