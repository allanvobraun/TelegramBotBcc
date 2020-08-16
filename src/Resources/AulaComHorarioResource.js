import { AulaMensagemResource } from "./AulaMensagemResource.js";
import { HorarioMensagemResource } from "./HorarioMensagemResource.js";

export class AulaComHorarioResource {
  constructor(aulaObject, horarioObject) {
    this.aulaResource = new AulaMensagemResource(aulaObject);
    this.horarioResource = new HorarioMensagemResource(horarioObject);
  }

  toString() {

    return `${this.aulaResource}\n${this.horarioResource}`;
  }
}
