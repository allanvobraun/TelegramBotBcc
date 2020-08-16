import { BaseError } from "./BaseError.js";

// quando não tem aula no dia ex: sabado
export class SemAulaError extends BaseError {
  constructor(diaSemana) {
    super(`Não foram encontradas aulas para ${diaSemana}`);
  }
}
