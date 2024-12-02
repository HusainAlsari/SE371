let data_btn;
let intro_btn;
let intro_section;
let data_section;

const addMenuHandler = () => {
  const menu_btn = document.querySelector("#hide_menu");
  menu_btn.addEventListener("click", () => {
    const menu = document.querySelector("#menu");
    menu.classList.toggle("hide");
  })
}

const addDataButtonHandler = () => {
  data_btn.addEventListener("click", () => {
    intro_section.classList.add("hide");
    data_section.classList.remove("hide");
    data_btn.classList.add("bold");
    intro_btn.classList.remove("bold");
  })
}

const addIntroButtonHandler = () => {
  intro_btn.addEventListener("click", () => {
    intro_section.classList.remove("hide");
    data_section.classList.add("hide");
    intro_btn.classList.add("bold");
    data_btn.classList.remove("bold");
  })
}

document.addEventListener("DOMContentLoaded", () => {
  data_btn = document.querySelector("#data-li");
  intro_btn = document.querySelector("#introduction-li");
  intro_section = document.querySelector("#introduction-section");
  data_section = document.querySelector("#data-section");

  // Once the documnet is loaded create event handlers
  addMenuHandler();

  addDataButtonHandler();
  addIntroButtonHandler();
})