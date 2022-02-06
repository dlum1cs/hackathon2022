//Listen for messages
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  
    if(msg.name == "fetchFacts") {
        //Wait for response
        //const strLen = '100';
        const apiCall = 'https://catfact.ninja/fact?max_length=100';
        console.log(apiCall);
        //Call api
        fetch(apiCall).then(function(res) {
            //Wait for response
            if (res.status !== 200) {
                response({fact: 'Error'});
                return;
            }
            res.json().then(function(data) {
                //Send the response
                response({fact: data.fact});
            });
        }).catch(function(err) {
            response({data: 'Error'});
        });
    }
    if(msg.name == "fetchJokes") {
        //Wait for response
        const apiCall = 'https://geek-jokes.sameerkumar.website/api?format=json';
        console.log(apiCall);
        //Call api
        fetch(apiCall).then(function(res) {
            //Wait for response
            if (res.status !== 200) {
                response({fact: 'Error'});
                return;
            }
            res.json().then(function(data) {
                //Send the response
                response({fact: data.joke});
            });
        }).catch(function(err) {
            response({data: 'Error'});
        });
    }
    return true;

  });

