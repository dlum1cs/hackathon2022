// this section of the program should allow you to open the main menu when clicking on the cat
let click = true;
// let messageBox = $(".message");
const cat = document.querySelector(".i1");
if (cat) {
    cat.addEventListener('click', openMenu);
}

const menu1 = document.querySelector("#menu1");
if (menu1) {
    menu1.addEventListener('click', closeMenu);
}
const menu2 = document.querySelector("#menu2");
if (menu2) {
    menu2.addEventListener('click', closeMenu);
}
const menu3 = document.querySelector("#menu3");
if (menu3) {
    menu3.addEventListener('click', closeMenu);
}
const menu4 = document.querySelector("#menu4");
if (menu4) {
    menu4.addEventListener('click', closeMenu);
}
const menu5 = document.querySelector("#menu5");
if (menu5) {
    menu5.addEventListener('click', closeMenu);
}
/*function showImage(image) {
    document.getElementById(image).style.visibility = "visible";
}

function hideImage(image) {
    document.getElementById(image).style.visibility = "hidden";
}*/
function closeMenu(event) {
    // first click should open the menu, second click on cat will close the menu
    console.log("hello world");
    if (click == true) {
        for (let el of document.querySelectorAll('.message')) el.style.visibility = 'visible';
        // .message.css({visibility: visible});
        click = false;
    }
    else {
        for (let el of document.querySelectorAll('.message')) el.style.visibility = 'hidden';

        // .message.css({visibility: hidden});
        click = true;
    }
}

function openMenu(event) {
    // first click should open the menu, second click on cat will close the menu
    console.log("hello world");
    if (click == true) {
        for (let el of document.querySelectorAll('.message')) el.style.visibility = 'visible';
        // .message.css({visibility: visible});
        click = false;
    }
    else {
        for (let el of document.querySelectorAll('.message')) el.style.visibility = 'hidden';

        // .message.css({visibility: hidden});
        click = true;
    }
}

