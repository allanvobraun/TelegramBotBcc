import { db } from "../inicializadores/init_firebase.js"

export class BaseModel {

  constructor() {
    this.collectionName = this.constructor.name.toLowerCase();
    this.collectionReference = db.collection(this.collectionName);
    
  }
}