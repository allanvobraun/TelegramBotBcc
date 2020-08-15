import { BaseModel } from "./BaseModel.js";

class Aulas extends BaseModel {
  constructor(params) {
    super(params);
  }

  static async getAll() {
    const docs = await this.collectionReference.get().then( snapshot => {
      return snapshot.docs.map(doc => doc.data());
    });
    return docs;
  }
}

// const aulas = new Aulas();
// console.log('1');
// aulas.getAll().then( result => {
//   console.log('foi');
//   console.log(result);
// })
// console.log('2');


