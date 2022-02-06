//Send Message to Background
chrome.runtime.sendMessage({name: "fetchFacts"}, (response) => {
    //Wait for response

    console.log(response);

    document.querySelector('p').innerHTML = response.fact;


});