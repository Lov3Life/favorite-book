const OpenButton = document.getElementById("open-button");
const CloseButton = document.getElementById("close-button");
const NavBar = document.querySelector("nav");
const MainStyle = document.querySelector("main");
const CloseLink = document.getElementsByClassName("close-link");

OpenButton.addEventListener("click", NavBarDisplay);
CloseButton.addEventListener("click", NavBarHide);

function NavBarDisplay() {
    NavBar.style.display = "block";
    MainStyle.style.marginLeft = "25%";
    OpenButton.style.display = "none";
    OpenButton.style.margin = "0";
}

function NavBarHide() {
    NavBar.style.display = "none";
    MainStyle.style.marginLeft = "0";
    OpenButton.style.display = "inline";
    OpenButton.style.margin = "5px";
}

window.onload = HowMuchCloseLink;

function HowMuchCloseLink() {
    for(let i = 0; i < CloseLink.length; i++) {
        CloseLink[i].addEventListener("click", NavBarHide);
    }
}