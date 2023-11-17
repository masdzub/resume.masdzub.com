const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

themeToggle.addEventListener("click", () => {
  if (htmlElement.classList.contains("dark")) {
    htmlElement.classList.remove("dark");
    htmlElement.style.colorScheme = "light";
    themeToggle.innerHTML = '<i class="far fa-sun"></i>';
  } else {
    htmlElement.classList.add("dark");
    htmlElement.style.colorScheme = "dark";
    themeToggle.innerHTML = '<i class="far fa-moon"></i>';
  }
});