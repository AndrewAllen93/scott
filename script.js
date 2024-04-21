let menus = document.querySelector(".navbar");
let menus_btn = document.querySelector(".ri-menu-4-line");
let close_btn = document.querySelector(".close-btn");

menus_btn.addEventListener("click", function () {
  menus.classList.add("active2");
  // Add event listener to the document body to close the menu when clicking outside of it
  document.body.addEventListener("click", closeMenuOnClickOutside);
});

close_btn.addEventListener("click", function () {
  menus.classList.remove("active2");
  // Remove the event listener when the close button is clicked
  document.body.removeEventListener("click", closeMenuOnClickOutside);
});

// Function to close the menu when clicking outside of it
function closeMenuOnClickOutside(event) {
  if (!menus.contains(event.target) && !menus_btn.contains(event.target)) {
    menus.classList.remove("active2");
    document.body.removeEventListener("click", closeMenuOnClickOutside);
  }
}
