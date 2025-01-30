const header = document.querySelector(".header");

console.log(header);

window.addEventListener("scroll", (e) => {
  if (window.scrollY) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});
