var events = require('events');

var myEmitter = new events.EventEmitter();

var fun1 = (msg) => {
    console.log("one says:-" + msg);
};

var fun2 = (msg) => {
    console.log("two says:-" + msg);
};

myEmitter.on('myEvent', fun1);
myEmitter.on('myEvent', fun1);
myEmitter.on('myEvent', fun2);

myEmitter.removeListener('myEvent', fun1);

myEmitter.emit('myEvent', 'Hare Krishna');

myEmitter.removeAllListeners('myEvent');

myEmitter.emit('myEvent', 'Nitai Gauranga');

