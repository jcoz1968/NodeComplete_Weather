console.log('starting app');

setTimeout(() => {
    console.log('fired');
}, 2000);

setTimeout(() => {
    console.log('2nd timeout works');
}, 0);


console.log('finishing up');