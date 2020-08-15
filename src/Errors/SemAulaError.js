import { BaseError } from "./BaseError.js";

export class SemAulaError extends BaseError {
  constructor(diaSemana) {
    super(`Não foram encontradas aulas para ${diaSemana}`);
  }
}
