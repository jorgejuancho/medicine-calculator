export function Refresh() {
  const d = document,
    $refresh = d.createElement("i");
  $refresh.classList.add("fa-solid", "fa-arrows-rotate", "refresh");
  $refresh.setAttribute("onclick", "location.reload();");

  return $refresh;
}
