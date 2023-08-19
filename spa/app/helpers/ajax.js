export async function ajax(props) {
  let { url, cbSuccess } = props;
  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      let message = `Ocurrió un error al cargar la calculadora`;

      document.getElementById(
        "main"
      ).innerHTML = `<div  class="error"> <p>Error ${err.status}: ${err.statusText} <br/>  
      <mark>${message}</mark></p>
      </div>
        `;

      document.querySelector(".loader").style.display = "none";

      console.log(err);
    });
}
