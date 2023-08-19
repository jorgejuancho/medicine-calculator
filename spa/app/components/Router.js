import { Error } from "./Error.js";
import { FG } from "./FG.js";
import { Imc } from "./Imc.js";
import { Ldl } from "./Ldl.js";
import { Main } from "./Main.js";

export async function Router() {
  // console.log(hash);

  const d = document,
    $main = d.querySelector("main");

  let { hash } = location;
  // console.log(hash);

  if (!hash || hash.includes("#/bmi")) {
    $main.appendChild(Imc());
  } else if (hash.includes("#/ldl")) {
    $main.appendChild(Ldl());
  } else if (hash.includes("#/fg")) {
    $main.appendChild(FG());
  } else {
    $main.appendChild(Error());
  }
  document.querySelector(".loader").style.display = "none";
}
