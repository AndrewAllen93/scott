document.addEventListener("DOMContentLoaded", () => {
  /*=============== SHOW MENU ===============*/
  const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

  /* Menu show */
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });

  /* Menu hidden */
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });

  /*=============== SEARCH ===============*/
  const search = document.getElementById("search"),
    searchBtn = document.getElementById("search-btn"),
    searchClose = document.getElementById("search-close");

  /* Search show */
  searchBtn.addEventListener("click", () => {
    search.classList.add("show-search");
  });

  /* Search hidden */
  searchClose.addEventListener("click", () => {
    search.classList.remove("show-search");
  });

  /*=============== LOGIN ===============*/
  const login = document.getElementById("login"),
    loginBtn = document.getElementById("login-btn"),
    loginClose = document.getElementById("login-close");

  /* Login show */
  loginBtn.addEventListener("click", () => {
    login.classList.add("show-login");
  });

  /* Login hidden */
  loginClose.addEventListener("click", () => {
    login.classList.remove("show-login");
  });

  // Get the navbar element
  const navbar = document.getElementById("navbar");

  // Listen for scroll events on the window
  window.addEventListener("scroll", () => {
    // Check if the scroll position is greater than 0
    if (window.scrollY > 0) {
      // Add the 'navbar-hidden' class if the scroll position is greater than 0
      navbar.classList.add("navbar-hidden");
    } else {
      // Remove the 'navbar-hidden' class if the scroll position is 0
      navbar.classList.remove("navbar-hidden");
    }
  });
});
