import { Menu } from "./Menu.js";

export function Header() {
  const $header = document.createElement("header");

  $header.appendChild(Menu());
  $header.classList.add("header");

  return $header;
}
