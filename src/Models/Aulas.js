import { BaseModel } from "./BaseModel.js";
import { DiasSemana } from "./DiasSemana.js";
import { AulaNaoEncontradaError } from "../Errors/AulaNaoEncontradaError.js";
import { diaSemana, horaAtual } from "../helpers/dates.js";
import { ComparadorHorarios } from "../helpers/ComparadorHorarios.js";

export class Aulas extends BaseModel {
  constructor() {
    super();
    this.diasSemanaModel = new DiasSemana();

    this.diaHoje = "segunda";
    this.horaAgora = "20:14:00";
    //this.diaHoje = diaSemana();
    // this.horaAgora = horaAtual();
    this.comparadorHorarios = new ComparadorHorarios(this.horaAgora);
  }

  async getAll() {
    const docs = await this.collectionReference.get().then((snapshot) => {
      return snapshot.docs.map((doc) => doc.data());
    });
    return docs;
  }

  async getAulaData(diaSemana, horarioInicio) {
    const aulasCollectionRef = await this.diasSemanaModel.getDiaAulasHorariosRef(
      diaSemana
    );

    const aulaHorarioDoc = await aulasCollectionRef
      .where("hora_inicio", "==", horarioInicio)
      .get()
      .then((snapshot) => {
        return snapshot.docs[0];
      });

    if (typeof aulaHorarioDoc === "undefined") {
      throw new AulaNaoEncontradaError(diaSemana, horarioInicio);
    }
    
    return aulaHorarioDoc.data();
  }

  async getProximaAulaData() {
    return await this.getAulaData(this.diaHoje, this.comparadorHorarios.getProximoHorarioAula());
  }

  // async getAtualAulaData() {
  //   return await this.getAulaData(this.diaHoje, proximoHorarioDeAula());
  // }
}