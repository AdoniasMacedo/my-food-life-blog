const buttonMenu = document.getElementById("button-menu");
const sideMenu = document.getElementById("links-menu");
const overlay = document.getElementById("overlay");

buttonMenu.addEventListener("click", () => 
{
    buttonMenu.classList.toggle("active");
    sideMenu.classList.toggle("active");
    overlay.classList.toggle("active");
})

overlay.addEventListener("click", () => 
{
    buttonMenu.classList.remove("active");
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
})