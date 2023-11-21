import { Store } from "../Store.js";

export class PCounter extends Store {

    constructor() {
      super();
      this._performTasks = 0;
    }
    // performTasks
    getPerformTasks() {
      return this._performTasks;
    }
  
    increasePerformTasks() {
        this._performTasks += 1;
        super._emit(this._performTasks);
    }

    decreasePerformTasks() {
      if (this._performTasks > 0){
        this._performTasks -= 1;
        super._emit(this._performTasks);
      }
      else {
        this._performTasks = 0;
        super._emit(this._performTasks);
      }
      
        // this._performTasks -= 1;
        // if (this._performTasks < 0){
        //   this._performTasks = 0;
        // }
        
    }

}