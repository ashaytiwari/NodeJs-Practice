var events = require('events');

var myEmitter = new events.EventEmitter();

var fun1 = (msg) => {
    console.log('Msg from 1:-' + msg);
}

var fun2 = (msg) => {
    console.log('Msg from 2:-' + msg);
}

myEmitter.on('myEvent', fun1);

myEmitter.prependListener('myEvent', fun2);
// myEmitter.prependListener('myEvent', fun1);

console.log(myEmitter.listeners('myEvent'));
console.log(myEmitter.listenerCount('myEvent'));

myEmitter.emit('myEvent', 'Hare Krishna');
