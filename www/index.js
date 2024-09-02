const toggleMode = () => {
    const body = document.body;
    const img = document.getElementById("mode")

    if (!body.className) {
        body.className = "dark";
        img.src = "icons/dark.svg";
    } else {
        body.className = "";
        img.src = "icons/light.svg";
    }
};
