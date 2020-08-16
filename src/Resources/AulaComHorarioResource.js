import { AulaMensagemResource } from "./AulaMensagemResource.js";
import { HorarioMensagemResource } from "./HorarioMensagemResource.js";
import { BaseMensagemResource } from "./BaseMensagemResource.js";

export class AulaComHorarioResource extends BaseMensagemResource {
  constructor(aulaObject, horarioObject) {
    super();
    this.aulaResource = new AulaMensagemResource(aulaObject);
    this.horarioResource = new HorarioMensagemResource(horarioObject);
  }

  toString() {
    return `${this.aulaResource}\n${this.horarioResource}`;
  }
}
