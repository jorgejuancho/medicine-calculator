export function FG() {
  const d = document,
    $fg = d.createElement("div"),
    $styles = d.getElementById("dynamic-styles");

  $fg.classList.add("container");

  $fg.innerHTML = `
  
  <h2 class="titulo-fg">CALCULADORA DE FUNCION RENAL</h2>
        <div class="rowFG">
          <input type="range" min="0" max="120" value="0" id="edad" />
          <span id="edad-val">Edad <b>0</b> años. </span>
        </div>

        <div class="rowFG">
          <input type="range" min="0" max="1000" value="0" id="creatinina" />
          <span id="creatinina-val">Creatinina <b>0</b> mg/dl. </span>
        </div>

        <div class="rowFG">
          <input type="range" min="0" max="200" value="0" id="peso" />
          <span id="peso-val">Peso <b>0</b> kg.</span>
        </div>

        <!-- <div class="rowFG">
          <input type="range" min="0" max="150" value="0" id="estatura" />
          <span id="estatura-val">Estatura <b>0</b> cm</span>
        </div> -->

        <div class="rowFG" id="genero" class="genero">
          <label for="hombre" >
            <input type="radio" id="hombre" name="genero" value="hombre" />
            Hombre</label
          >

          <label for="mujer" >
            <input type="radio" id="mujer" name="genero" value="mujer" />
            Mujer
          </label>

          <label for="genero" class="sinSeleccionar">
            <input id="sinSeleccionar" type="radio" name="genero" value="genero" checked />
            Genero
          </label>

          <span id="refresh"> </span>
        </div>

        <p id="result">0  mL/min.</p>
        <p id="category">Tasa de filtración glomerular(TFG).</p>`;

  $styles.innerHTML = `

  @font-face {
  font-family: grafiti;
  src: url("./Bombing.ttf");
}
body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
}
 
main {
  flex-grow: 1;
}

.container {
  background-color: #ffffff;
  padding: 40px 30px;
  width: 50%;
  min-width: 400px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  box-shadow: 25px 25px 30px rgba(0, 0, 0, 0.15);
}
.titulo-fg{

  font-family: grafiti;
  text-align: center;
  font-size:2rem;
   margin-bottom: 2rem;
   font-weight: 500;
}


.rowFG{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 40px;
}

.rowFG#genero{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

.rowFG span {
  font-weight: 500;
   font-size: 1.2rem;
  margin-left: 1rem;
}

input[type="range"] {
  width: 70%;
  height: 0.35rem;
  -webkit-appearance: none;
  appearance: none;
  background-color: #dcdcdc;
  border-radius: 3px;
  outline: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: 1.5rem;
  width: 1.5rem;
  background-color: #1c1c1c;
  border-radius: 50%;
  cursor: pointer;
}

#result {
   font-family: grafiti;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
}
#category {
  font-size: 18px;
  text-align: center;
  letter-spacing: 1px;
  
}

p#category{
  margin-top: 1rem;
}

.rowFG#genero{
    font-size: 1.2rem;
       justify-content: space-evenly;
}

label [type="radio"]{
  width: 1.2rem;
  height: 1.2rem;
  accent-color: black;

 }

  .rowFG span{
   font-family: "Roboto", sans-serif;

}


@media (max-width: 600px) {

.container {
  background-color: #ffffff;
   min-width: 90%;
 }

  .rowFG{
  display: flex;
  flex-wrap: wrap;
 align-items: center;
    justify-content: center;
    margin-bottom: 40px;
}
  .rowFG span{
  order: -1;
  margin-bottom:0.8rem;

}



}


`;

  document.addEventListener("input", (e) => {
    let tfg;

    const result = d.getElementById("result"),
      $edad = parseInt(d.getElementById("edad").value),
      $creatinina = parseFloat(d.getElementById("creatinina").value / 100),
      $peso = parseInt(d.getElementById("peso").value),
      $label = d.querySelector(".sinSeleccionar");

    d.getElementById("edad-val").innerHTML = `Edad: <b>${$edad}</b> años.`;

    d.getElementById(
      "creatinina-val"
    ).innerHTML = `creatinina: <b>${$creatinina}</b> mg/dl.`;

    d.getElementById("peso-val").innerHTML = `Peso: <b>${$peso}</b> kg.`;

    tfg = (((140 - $edad) * $peso) / ($creatinina * 72)).toFixed(1);

    if (e.target.matches("#hombre")) {
      result.innerHTML = ` ${tfg} mL/min.`;
    } else if (e.target.matches("#mujer")) {
      result.innerHTML = ` ${(tfg * 0.85).toFixed(1)} mL/min.`;
    } else {
      return false;
    }

    $label.style.setProperty("display", "none");
  });

  return $fg;
}
