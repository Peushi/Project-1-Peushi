// Select the toggle button
const toggleBtn = document.querySelector(".header__toggle-btn");

// Select the header
const header = document.querySelector(".header");

// Add click event listener
toggleBtn.addEventListener("click", () => {
    header.classList.toggle("header-open");

    console.log("Header toggled!");
});
