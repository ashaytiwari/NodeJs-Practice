var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('FireEvent', () => {
    console.log('Hare Krishna');
});

myEmitter.emit('FireEvent');