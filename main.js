const navbar = document.getElementById("nav");
let prevScrollPosition = window.pageYOffset;
let navbarTopPosition = navbar.offsetTop;
window.addEventListener("scroll", () => {
  let currentScrollPosition = window.pageYOffset;
  if (prevScrollPosition < currentScrollPosition) {
    console.log(navbarTopPosition);
    navbar.style.top = `-100px`;
  } else {
    navbar.style.top = `${navbarTopPosition}px`;
  }
  prevScrollPosition = currentScrollPosition;
});
