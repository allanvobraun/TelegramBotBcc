import { BaseError } from "./BaseError.js";

export class NaoEstaEmAulaError extends BaseError {

  constructor() {
    super("Não esta tendo nenhuma aula no momento...", false);
  }

}