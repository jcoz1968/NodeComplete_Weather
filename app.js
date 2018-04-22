const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if(errorMessage) {
//         console.log(console.errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

request({
    url: `https://api.darksky.net/forecast/03516b4d2a76bef2a40e0bd3f36b89c2/35.4791403,-97.23171400000001`,
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature);
    } else {
        console.log('Unable to fetch weather.');
    } 
});

