const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/03516b4d2a76bef2a40e0bd3f36b89c2/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        } else {
            callback('Unable to fetch weather.');
        } 
    });
};

module.exports = {
    getWeather
};

// url: `https://api.darksky.net/forecast/03516b4d2a76bef2a40e0bd3f36b89c2/35.4791403,-97.23171400000001`,