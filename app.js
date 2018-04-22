const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyBDw1puUcKo9S96vqHp5cDEZqTWBeX7sQM',
    json: true
}, (error, response, body) => {
    // console.log(JSON.stringify(body, undefined, 2));
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});

