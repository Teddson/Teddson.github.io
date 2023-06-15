document.addEventListener("DOMContentLoaded", function() {
  var typingEffect = new Typed(".multitext", {
    strings: [
      "Front-End Developer",
      "Web Designer",
      "UI/UX Designer",
      "Graphics Designer",
      "Data Entry"
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
  });
});

// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
};

// scroll section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("active");
        }
      });
    }
  });

  // sticky header
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);
};

// remove toggle icon and navbar when clicking navbar links (scroll)
navbar.addEventListener("click", () => {
  menuIcon.classList.remove("fa-x");
  navbar.classList.remove("active");
});
