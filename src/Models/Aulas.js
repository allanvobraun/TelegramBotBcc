import { BaseModel } from "./BaseModel.js";
import { DiasSemana } from "./DiasSemana.js";
import { AulaNaoEncontradaError } from "../Errors/AulaNaoEncontradaError.js";
import { NaoEstaEmAulaError } from "../Errors/NaoEstaEmAulaError.js";
import { diaSemana, horaAtual } from "../helpers/dates.js";
import { ComparadorHorarios } from "../helpers/ComparadorHorarios.js";

export class Aulas extends BaseModel {
  constructor() {
    super();
    this.diasSemanaModel = new DiasSemana();

    // this.diaHoje = "quinta";
    // this.horaAgora = "22:14:00";
    this.diaHoje = diaSemana();
    this.horaAgora = horaAtual();
    this.comparadorHorarios = new ComparadorHorarios(this.horaAgora);
  }

  async getAllData() {
    const docs = await this.collectionReference.get().then((snapshot) => {
      return snapshot.docs.map((doc) => doc.data());
    });
    return docs;
  }

  async getAulaDocSnap(diaSemana, horarioInicio) {
    const aulasCollectionRef = await this.diasSemanaModel.getDiaAulasHorariosRef(
      diaSemana
    );

    const aulaHorarioDoc = await aulasCollectionRef
      .where("hora_inicio", "==", horarioInicio)
      .get()
      .then((snapshot) => {
        return snapshot.docs[0];
      });

    return aulaHorarioDoc;
  }

  async getProximaAulaData() {
    const horario = this.comparadorHorarios.getProximoHorarioAula();
    const aulaSnap = await this.getAulaDocSnap(this.diaHoje, horario);

    if (typeof aulaSnap === "undefined") {
      throw new AulaNaoEncontradaError(this.diaHoje, horario);
    }

    return aulaSnap.data();
  }

  async getAtualAulaData() {
    const horario = this.comparadorHorarios.getHoraInicioAula();
    const aulaSnap = await this.getAulaDocSnap(this.diaHoje, horario);

    if (typeof aulaSnap === "undefined") {
      throw new NaoEstaEmAulaError();
    }

    return aulaSnap.data();
  }
}
