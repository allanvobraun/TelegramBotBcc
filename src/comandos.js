import { Comando } from "./Comando.js";
import { Controller } from "./Controller.js";

export function listen() {
  const echo = new Comando("echo", Controller.echo);
  const aulasHoje = new Comando("aulashoje", Controller.echo);
}
