import { db } from "../inicializadores/init_firebase.js"

export class BaseModel {

  constructor() {
    this.collectionName = this.constructor.name.toLowerCase();
  }

  get collectionReference() {
    return db.collection(this.collectionName);
  }
}