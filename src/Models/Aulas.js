import { BaseModel } from "./BaseModel.js";
import { DiasSemana } from "./DiasSemana.js";
import { diaSemana, proximoHorarioDeAula } from "../helpers/dates.js";

class Aulas extends BaseModel {
  constructor() {
    super();
    this.diasSemanaModel = new DiasSemana();
  }

  async getAll() {
    const docs = await this.collectionReference.get().then((snapshot) => {
      return snapshot.docs.map((doc) => doc.data());
    });
    return docs;
  }

  async getProximaAulaData() {
    // const diaHoje = diaSemana();
    const diaHoje = "segunda";

    return await this.diasSemanaModel
      .getDiaAulasHorariosSnap(diaHoje)
      .then((aulasArray) => {
        return aulasArray
          .find((aula) => {
            return aula.data().hora_inicio === proximoHorarioDeAula();
          })
          .data();
      });
  }
}
const aula = new Aulas();
aula.getProximaAulaData().then((retorno) => {
  console.log("retornou");
  console.log(retorno);
});
