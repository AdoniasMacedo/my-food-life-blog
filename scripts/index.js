const buttonMenu = document.getElementById("button-menu");
const sideMenu = document.getElementById("links-menu");
const overlay = document.getElementById("overlay");

buttonMenu.addEventListener("click", () => 
{
    sideMenu.classList.add("active");
    overlay.classList.add("active");
})

overlay.addEventListener("click", () => 
{
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
})