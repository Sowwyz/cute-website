//
// Script created by Paflo (pawlo1020#6568) ÂŠ 2022
// version 1.3
// 18.12.2022 - last update
//

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
const about = {
    yearOfStartProgramming: 2006
    // Sowwyz#1337
    // Sowwyz#1337
    // Sowwyz#1337
    // Sowwyz#1337
    // Sowwyz#1337
    // Sowwyz#1337
};
// Sowwyz#1337
document.getElementById("age-p-correct").innerText = (year - about.yearOfStartProgramming);
document.getElementById("cp").innerHTML = "Copyright &copy; <b>Sowwyz</b> 2023" + year;
// Sowwyz#1337
const aboutme = document.getElementById("aboutme");
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
window.addEventListener("scroll", function () {
    let pos = aboutme.getBoundingClientRect();
    (pos.top >= 0 && pos.bottom <= window.innerHeight) ? aboutme.classList.add("focus") : aboutme.classList.remove("focus");
});

// Sowwyz#1337
const support = () => {
    return window.location.href = "https://github.com/Sowwyz";
}
// Sowwyz#1337
// Sowwyz#1337
const discord = () => {
    alert("!");
    return window.location.href = "https://discord.com/users/394251966571872256";
}// Sowwyz#1337
// Sowwyz#1337
window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}
// Sowwyz#1337
// Sowwyz#1337
window.onload = () => {
    $(".loader").fadeOut("fast");
    document.body.style = null;
}
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337