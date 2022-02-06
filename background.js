// Listen for messages
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

    if(msg.name == "weather") {
        // response.fact = shortForecast (clear, sunnny, etc.) of current binghamton weather

        //Wait for response
        //const strLen = '100';
        const apiCall = 'https://api.weather.gov/points/42.09,-75.91';
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
                const apiTwo = data.properties.forecastHourly;
                console.log(apiTwo);

                fetch(apiTwo).then(function(res) {
                    //Wait for response
                    if (res.status !== 200) {
                        response({fact: 'Error'});
                        return;
                    }
                    res.json().then(function(data2) {
                        //Send the response
                        response({fact: data2.properties.periods[0].shortForecast, temp: data2.properties.periods[0].temperature});
                    });
                }).catch(function(err) {
                    response({data: 'Error'});
                });
            });
        }).catch(function(err) {
            response({data: 'Error'});
        });
    }

    if(msg.name == "inspiration") {
       
        const apiCall = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';
        console.log(apiCall);
        //Call api
        fetch(apiCall).then(function(res) {
            //Wait for response
            if (res.status !== 200) {
                response({fact: 'Error'});
                return;
            }
            res.json().then(function(data3) {
                //Send the response
                response({quote: data3.quoteText, author: data3.quoteAuthor});
            });
        }).catch(function(err) {
            response({data: 'Error'});
        });
    }







    return true;
  });
