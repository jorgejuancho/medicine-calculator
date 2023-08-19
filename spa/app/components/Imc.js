export function Imc() {
  const d = document,
    $imc = d.createElement("div"),
    $styles = d.getElementById("dynamic-styles");

  $imc.classList.add("container");
  $imc.innerHTML = `
  <h2 class="titulo-imc"> Indice de masa corporal </h2>
  <div class="rowImc">


          <input
            type="range"
            min="20"
            max="200"
            value="20"
            id="weight"
                     />
          <span id="weight-val"><b>20 </b>kg</span>
        </div>

        <div class="rowImc">
          <input
            type="range"
            min="100"
            max="250"
            value="100"
            id="height"
                       />
          <span id="height-val"><b>100 </b>cm</span>
        </div>

        <h2 id="result">20.0  kg/m<sup>2</sup></h2>
        <p id="category">Peso Normal</p>

    `;

  $styles.innerHTML = `

  @font-face {
  font-family: grafiti;
  src: url("./Bombing.ttf");
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
.titulo-imc{
   font-size: 2rem;
 font-family: grafiti;
 text-align: center;
 margin-bottom: 2rem;
 font-weight: 500;
}

  .rowImc {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 40px;
  }
  .rowImc span {
    
    font-weight: 500;
    font-size: 1.5rem;
    margin-left: 1rem;
   
  }

  input[type="range"] {
    width: 80%;
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
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
   
  }
  #category {
   
    font-size: 18px;
    text-align: center;
    letter-spacing: 1px;
  } 

  
@media (max-width: 600px) {
  
.container {
  background-color: #ffffff;
 
  min-width: 90%;
 
}


  .rowImc {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    
  }
  
 .rowImc span{
  order: -1;
  margin-bottom:0.5rem;
  font-size: 1rem;
}

input[type="range"] {
  width: 85%;

}

  
  `;

  function calculate() {
    let $imcCalculado,
      category = "";

    const background = d.querySelector(".container").style,
      $result = d.getElementById("result"),
      $weight = parseInt(d.getElementById("weight").value),
      $height = parseInt(d.getElementById("height").value);

    d.getElementById("weight-val").innerHTML = `<b>${$weight}</b>` + " kg";
    d.getElementById("height-val").innerHTML = `<b>${$height}</b>` + " cm";

    $imcCalculado = (($weight * 10000) / ($height * $height)).toFixed(1);
    $result.innerHTML = ` ${$imcCalculado} kg/m<sup>2</sup>`;

    if ($imcCalculado < 18.5) {
      category = "Peso Bajo";

      background.setProperty("background-color", "#ffc44d");
    } else if ($imcCalculado >= 18.5 && $imcCalculado <= 24.9) {
      category = "Peso Normal";

      background.setProperty("background-color", "#0be881");
    } else if ($imcCalculado >= 25 && $imcCalculado <= 29.9) {
      category = "Sobrepeso";

      background.setProperty("background-color", "#ff884d");
    } else {
      category = "Obesidad";

      background.setProperty("background-color", "#d64161");
    }

    d.getElementById("category").textContent = category;
  }

  setTimeout(() => {
    d.addEventListener("input", calculate);
  }, 100);

  return $imc;
}
