const notifyButton = document.getElementById("notifyButton");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");


notifyButton.addEventListener("click", () => {
    popup.classList.add("active");
});


closePopup.addEventListener("click", () => {
    popup.classList.remove("active");
});


popup.addEventListener("click", (event) => {

    if (event.target === popup) {
        popup.classList.remove("active");
    }

});


/* NAVBAR EFFECT */

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(8,8,8,0.92)";
        header.style.backdropFilter = "blur(15px)";
        header.style.position = "fixed";

    } else {

        header.style.background = "transparent";
        header.style.backdropFilter = "none";
        header.style.position = "absolute";

    }

});
