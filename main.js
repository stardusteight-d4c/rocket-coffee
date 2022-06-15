const menuToggle = document.querySelector("#menuToggle");
const itemsMenu = document.querySelector("#itemsMenu");

menuOff = true;
menuToggle.addEventListener("click", (event) => {
  if (menuOff) {
    itemsMenu.classList.add("menu__items--active");
    menuToggle.setAttribute('src', 'assets/menu-buguer-close.svg');
    menuOff = false;
    ocultarDiv(".banner__content");
    ocultarDiv(".blur-mobile");
  } else {
    itemsMenu.classList.remove("menu__items--active");
    menuToggle.setAttribute('src', 'assets/menu-buguer-open.svg');
    menuOff = true;
    exibirDiv(".banner__content");
    exibirDiv(".blur-mobile");
  }
});

const ocultarDiv = (div) => {
  document.querySelector(`${div}`).style.visibility = 'hidden';
};

const exibirDiv = (div) => {
  document.querySelector(`${div}`).style.visibility = 'visible';
};

