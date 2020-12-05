var events = require('events');

var myEmitter1 = new events.EventEmitter();
var myEmitter2 = new events.EventEmitter();

console.log("Default max listeners in first event:- " + myEmitter1.getMaxListeners());
console.log("Default max listeners in first event:- " + myEmitter2.getMaxListeners());

events.defaultMaxListeners = 2;

console.log("Default max listeners in first event:- " + myEmitter1.getMaxListeners());
console.log("Default max listeners in first event:- " + myEmitter2.getMaxListeners());

myEmitter1.setMaxListeners(6);
myEmitter2.setMaxListeners(3);

console.log("Default max listeners in first event:- " + myEmitter1.getMaxListeners());
console.log("Default max listeners in first event:- " + myEmitter2.getMaxListeners());

var fun1 = (msg) => {
    console.log("\none says:-" + msg);
};

var fun2 = (msg) => {
    console.log("\ntwo says:-" + msg);
};

for(let i = 0; i < 3; i++){
    myEmitter1.on('myEvent', fun1);
}

for(let i = 0; i < 11; i++){
    myEmitter2.on('myEvent1', fun2);
}

myEmitter1.emit('myEvent', 'Hare Krishna');
myEmitter2.emit('myEvent1', 'Hare rama');
