import { Comando } from "./Comando.js";
import { Controller } from "./Controller.js";

export function listen() {
  const echo = new Comando("echo", true, Controller.echo);
  const proxima = new Comando("proxima", false, Controller.proxima)
}
