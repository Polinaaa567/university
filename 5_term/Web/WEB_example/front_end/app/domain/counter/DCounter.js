import { Store } from "../Store.js";


export class DCounter extends Store {

    constructor() {
      super();
      this._doneTasks = 0;
    }
    // doneTasks
    getDoneTasks() {
      return this._doneTasks;
    }
  
    increaseDoneTasks() {
      
        this._doneTasks += 1;
        super._emit(this._doneTasks);
    }

    decreaseDoneTasks() {
      if(this._doneTasks > 0) {
        this._doneTasks -= 1;
        super._emit(this._doneTasks);
      } else {
        this._doneTasks = 0;
        super._emit(this._doneTasks);
      }
    }    
}