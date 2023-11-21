import { Status } from "./Status.js";

export class StatusFactory {

    static _status = null;
  
    static _createInstance() {
      return new Status();
    }
  
    static createInstance() {
      if (StatusFactory._status === null) {
        StatusFactory._status = StatusFactory._createInstance();
      }
      return StatusFactory._status;
    }
  }