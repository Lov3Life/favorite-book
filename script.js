const OpenButton = document.getElementById("open-button");
const NavBar = document.querySelector("nav");
const MainStyle = document.querySelector("main");

function NavBarDisplay() {
    NavBar.style.display = "block";
    MainStyle.style.marginLeft = "25%";
    OpenButton.style.display = "none";
    OpenButton.style.margin = "0";
}

function NavBarDisplayNone() {
    NavBar.style.display = "none";
    MainStyle.style.marginLeft = "0";
    OpenButton.style.display = "inline";
    OpenButton.style.margin = "5px";
}