// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
    changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor,
    });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
        document.body.style.backgroundColor = color;
    });
}

function paste_cat() {
    image = document.createElement('img')
    // image.src  = "0.jpeg"
    // document.body.style.backgroundColor = '#3aa757'
    // document.append(image);
    // document.write("<img src='0.jpeg' alt='alt tag'>")
}

function add_img() { 
    var img = document.createElement('img'); 
    img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png'; 
    document.getElementById('body').appendChild(img);
}