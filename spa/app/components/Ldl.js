export function Ldl() {
  const d = document,
    $ldl = d.createElement("div"),
    $styles = d.getElementById("dynamic-styles");
  $ldl.classList.add("container");

  $ldl.innerHTML = ` 
  <h2 class="titulo-ldl"> Calculadora de LDL </h2>
  <div class="rowLdl">

          <input
            type="range"
            min="50"
            max="700"
            value="50"
            id="cTotal"
           
          />
          <span id="cTotal-val">Colesterol total: <b>50</b> mg/dl. </span>
        </div>
        <div class="rowLdl">
          <input
            type="range"
            min="10"
            max="100"
            value="10"
            id="hdl"
            
          />
          <span id="hdl-val">HDL: <b>10</b> mg/dl. </span>
        </div>
        <div class="rowLdl">
          <input
            type="range"
            min="50"
            max="400"
            value="50"
            id="trigliceridos"
            
          />
          <span id="trigliceridos-val">Triglicéridos: <b>50</b> mg/dL.</span>
        </div>

        <p id="result">30 mg/dL.</p>
        <p id="category">
          (Interpretación según riesgo cardiovascular.)
        </p>`;

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

.titulo-ldl{

  font-family: grafiti;
  text-align: center;
  font-size:2rem;
   margin-bottom: 2rem;
   font-weight: 500;
}


.rowLdl{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 40px;
}
.rowLdl span {
  font-weight: 500;
  font-size: 1.2rem;
  margin-left: 1rem;
}
input[type="range"] {
  width: 65%;
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

@media (max-width: 600px) {
  
.container {
  background-color: #ffffff;
 
  min-width: 90%;
 }

 h2{
  font-size:2rem;
 }

  .rowLdl {
    display: flex;
    flex-wrap: wrap;
   
    
  }
  
  .rowLdl span{
  order: -1;
  margin-bottom:0.8rem;
}


input[type="range"] {
  width: 85%;

}

#result{
  font-size:2rem;
}


`;

  function calculate() {
    let ldl;
    const d = document,
      result = d.getElementById("result"),
      cTotal = parseInt(d.getElementById("cTotal").value),
      hdl = parseInt(d.getElementById("hdl").value),
      trigliceridos = parseInt(d.getElementById("trigliceridos").value);

    d.getElementById(
      "cTotal-val"
    ).innerHTML = `Colesterol Total: <b>${cTotal}</b>  mg/dl.`;
    d.getElementById("hdl-val").innerHTML = `HDL: <b>${hdl}</b>  mg/dl.`;
    d.getElementById(
      "trigliceridos-val"
    ).innerHTML = `Triglicéridos: <b>${trigliceridos}</b>  mg/dl.`;

    ldl = (cTotal - (hdl + trigliceridos / 5)).toFixed(0);
    result.textContent = ldl + " mg/dL.";
  }

  setTimeout(() => {
    d.addEventListener("input", calculate);
  }, 100);

  return $ldl;
}
