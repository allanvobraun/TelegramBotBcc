import { BaseMensagemResource } from "./BaseMensagemResource.js";

export class HorarioMensagemResource extends BaseMensagemResource {
  constructor(horarioObject) {
    super();
    this.horario = horarioObject;
  }

  toString() {
    return `Começa as: ${this.horario.hora_inicio}\nTermina as: ${this.horario.hora_fim}`;
  }
}
