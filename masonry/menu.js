// this section of the program should allow you to open the main menu when clicking on the cat
let click = true;
let messageBox = $(".message");
const cat = document.querySelector(".i1");
if (cat) {
    cat.addEventListener('click', openMenu);
}

/*function showImage(image) {
    document.getElementById(image).style.visibility = "visible";
}

function hideImage(image) {
    document.getElementById(image).style.visibility = "hidden";
}*/

function openMenu(event) {
    // first click should open the menu, second click on cat will close the menu
    console.log("hello world");
    if (click == true) {
        messageBox.css({visability = visible});
        click = false;
    }
    else {
        messageBox.css({visability = hidden});
        click = true;
    }
}
