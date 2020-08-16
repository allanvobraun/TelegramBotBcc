import { BaseModel } from "./BaseModel.js";
import { DiasSemana } from "./DiasSemana.js";
import { AulaNaoEncontradaError } from "../Errors/AulaNaoEncontradaError.js";
import { diaSemana, proximoHorarioDeAula } from "../helpers/dates.js";

export class Aulas extends BaseModel {
  constructor() {
    super();
    this.diasSemanaModel = new DiasSemana();
    //this.diaHoje = diaSemana();
    this.diaHoje = "segunda";
  }

  async getAll() {
    const docs = await this.collectionReference.get().then((snapshot) => {
      return snapshot.docs.map((doc) => doc.data());
    });
    return docs;
  }

  async getAulaData(diaSemana, horarioInicio) {
    const aulasArray = await this.diasSemanaModel.getDiaAulasHorariosSnap(
      diaSemana
    );

    const aula = aulasArray.find((aula) => {
      return aula.data().hora_inicio === horarioInicio;
    });
    if (typeof aula === "undefined") {
      throw new AulaNaoEncontradaError(diaSemana, horarioInicio);
    }
    return aula.data();
  }

  async getProximaAulaData() {
    return await this.getAulaData(this.diaHoje, proximoHorarioDeAula());
  }

  async getAtualAulaData() {
    return await this.getAulaData(this.diaHoje, proximoHorarioDeAula());
  }
}