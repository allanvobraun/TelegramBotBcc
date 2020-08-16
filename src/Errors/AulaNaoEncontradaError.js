import { BaseError } from "./BaseError.js";

export class AulaNaoEncontradaError extends BaseError{
  constructor() {
    super("Não foi encontrada nenhuma aula para hoje, tente denovo amanhã");
  }
}