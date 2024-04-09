const optionBtns = document.querySelectorAll(".task-11 .optionBtn");

optionBtns.forEach(btn => {
  btn.addEventListener("click", toggleActiveClass);
});

function toggleActiveClass() {
  this.parentElement.classList.toggle("active");
}
