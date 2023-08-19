export function Dark() {
  const d = document,
    $button = d.createElement("button"),
    $selectors = d.querySelectorAll("[data-dark]"),
    $styles = d.getElementById("tema-estilos"),
    moon = `<i class="fa-solid fa-lightbulb"></i>`,
    sun = `<i class="fa-regular fa-lightbulb"></i>`;

  $button.classList.add("dark-theme-btn");
  $button.innerHTML = moon;

  // console.log($selectors);
  // console.log(d.dataset);

  const themeDark = () => {
    $selectors.forEach((el) => el.classList.add("dark-mode"));
    $button.innerHTML = sun;
  };

  const themeLight = () => {
    $selectors.forEach((el) => el.classList.remove("dark-mode"));
    $button.innerHTML = moon;
  };

  d.addEventListener("click", (e) => {
    if (
      e.target.matches(".dark-theme-btn") ||
      e.target.matches(`.dark-theme-btn *`)
    ) {
      if ($button.innerHTML === moon) {
        themeDark();
      } else {
        themeLight();
      }
    }
  });

  $styles.innerHTML = `
  .dark-theme-btn{
   
 width: 2rem;
 height: 2rem;
 border-radius: 50%;
 margin-left: 2rem;
 border: 0;
 transition: all 0.3s ease-out;
}

.dark-theme-btn:hover{
    background-color: #777;
    /* color: crimson; */
    transition: all 1s ease-out;
}

.dark-mode{
  background-color: #222;
 
    
}







`;

  return $button;
}
