const html = document.documentElement;
const img = document.getElementById("mode-switch");

if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    html.classList.add("dark");
    img.src = "icons/dark.svg";
} else {
    html.classList.remove("dark");
    img.src = "icons/light.svg";
}

const toggleMode = () => {
    if (!html.classList.contains("dark")) {
        // Next mode is dark
        localStorage.theme = "dark";
        img.src = "icons/dark.svg";
    } else {
        localStorage.theme = "light";
        img.src = "icons/light.svg";
    }
    html.classList.toggle("dark");
};

img.addEventListener("click", toggleMode);
