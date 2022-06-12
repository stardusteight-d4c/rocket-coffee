const menuToggle = document.querySelector("#menuToggle");
const itemsMenu = document.querySelector("#itemsMenu");

menuOff = true;
menuToggle.addEventListener("click", (event) => {
  if (menuOff) {
    itemsMenu.classList.add("menu__items--active");
    menuOff = false;
  } else {
    itemsMenu.classList.remove("menu__items--active");
    menuOff = true;
  }
});
