document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

document.addEventListener("dragstart", function(event) {
    if (event.target.tagName === "IMG") {
        event.preventDefault();
    }
});

function abrirMenu() {

    const menu = document.getElementById("linksMenu");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }

}