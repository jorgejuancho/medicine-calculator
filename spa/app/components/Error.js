import { Loader } from "./Loader.js";

export function Error() {
  const d = document,
    $error = d.createElement("div"),
    $styles = d.getElementById("dynamic-styles");

  $error.classList.add("error");

  $error.innerHTML = `<p>Error: No se encuentra la ruta seleccionada, regresa al home</p>
 <a  href="#/bmi">  <img class="flecha" src="./spa/app/assets/flecha.png" alt="flecha derecha" /> Home</a>

`;

  $styles.innerHTML = `

  
.error {
  padding: 1rem;
  font-size: 150%;
  font-weight: bold;
  text-align: center;
  color: #fff;
  background-color: #dc3545;
 
  box-shadow: 25px 25px 30px rgba(0, 0, 0, 0.15);
   position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 5px;
}

.error a{
  text-decoration: none;
  
}


.error mark {
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: inline-block;
  color: #fff;
  background-color: #0471c4;
}

.flecha {
  width: 2rem;

  color:#0a58ca;
}
  `;

  $error.appendChild(Loader());

  return $error;
}
