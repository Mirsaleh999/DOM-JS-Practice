
const navMenu = document.querySelector(".task-6-inner");
const navMenuBtn = document.querySelector(".task-6-inner .burger-menu");

navMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
