import { Store } from "../Store.js";

export class ECounter extends Store {

    constructor() {
      super();
      this._emptyTasks = 0;
    }
    getEmptyTasks() {
      return this._emptyTasks;
    }

    increaseEmptyTasks() {
        this._emptyTasks += 1;
        super._emit(this._emptyTasks);
    }

    decreaseEmptyTasks() {
        this._emptyTasks -= 1;
        super._emit(this._emptyTasks);
    }
}