import { Dark } from "./Dark.js";
import { Refresh } from "./Refresh.js";

export function Menu() {
  const $menu = document.createElement("nav");

  $menu.innerHTML = `
<h2 class="header__title">Calculator</h2>
        <ul class="lista" data-dark>
        
          <li class="nav-item" data-dark>
            <a class="nav-link" id="imc" href="#/bmi" data-dark>Imc</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"  id="ldl" href="#/ldl">Ldl</a>
          </li>

          <li class="nav-item">
            <a class="nav-link"  id="fg" href="#/fg">Tfg</a>
          </li>
       
        </ul>


  `;

  $menu.appendChild(Dark());
  $menu.appendChild(Refresh());

  return $menu;
}
