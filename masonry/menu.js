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
    menu2.addEventListener('click', catFact);
    menu2.addEventListener('click', closeMenu);
}
const menu3 = document.querySelector("#menu3");
if (menu3) {
    menu3.addEventListener('click', closeMenu);
}
const menu4 = document.querySelector("#menu4");
if (menu4) {
    menu4.addEventListener('click', getWeather);
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
function catFact(event) {
    chrome.runtime.sendMessage({name: "fetchFacts"}, (response) => {
        //Wait for response
    
        console.log(response);

        document.querySelector('h1').innerHTML = "Random Cat Fact"
        document.querySelector('p').innerHTML = response.fact;
    });
}

function getWeather(event) {
    chrome.runtime.sendMessage({name: "weather"}, (response) => {
        //Wait for response
    
        console.log(response);

        document.querySelector('h1').innerHTML = "Sky of Binghamton"
        document.querySelector('p').innerHTML = response.fact + ' ' + response.temp + '°F';

        if ((response.fact == 'Sunny') || (response.fact == 'Mostly Sunny')) {
            document.getElementById("sky").src = ("https://cdn.discordapp.com/attachments/939539790855045130/939788138639937576/IMG_8493.gif");
            document.getElementById("sky").style.visibility = 'visible';
        }
        if ((response.fact == 'Clear') || (response.fact == 'Mostly Clear')) {
            document.getElementById("sky").src = ("https://media.discordapp.net/attachments/939539790855045130/939799418838876190/Untitled_Artwork.gif");
            document.getElementById("sky").style.visibility = 'visible';
        }
        if ((response.fact == 'Mostly Cloudy') || (response.fact == 'Partly Cloudy') || (response.fact == 'Partly Sunny')) {
            document.getElementById("sky").src = ("https://media.discordapp.net/attachments/939539790855045130/939792519435272212/Untitled_Artwork.gif");
            document.getElementById("sky").style.visibility = 'visible';
        }
    });
}


function closeMenu(event) {
    // first click should close the message boxes 
    console.log("hello world");
    if (click == true) {
        for (let el of document.querySelectorAll('.message')) el.style.visibility = 'visible';
        // .message.css({visibility: visible});
        click = false;
    }
    else {
        for (let el of document.querySelectorAll('.message')) el.style.visibility = 'hidden';
        document.getElementById("sky").style.visibility = 'hidden';
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

