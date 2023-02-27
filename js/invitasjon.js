const burgerBtn = document.querySelector(".hamburger");
const dropdown = document.querySelector(".dropdown");
const button = document.querySelector(".dropdown button");

let burgerOpen = false;

burgerBtn.addEventListener("click", () => {
  if (!burgerOpen) {
    burgerBtn.classList.add("open");
    dropdown.style.display = "flex";
    burgerOpen = true;
  } else {
    burgerBtn.classList.remove("open");
    dropdown.style.display = "none";
    burgerOpen = false;
  }
});
