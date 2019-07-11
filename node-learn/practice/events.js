var events = require('events');

// Create an eventEmitter objectc object
eventObj = new events.EventEmitter();

// Create an event and bind a function with it
eventObj.once('my-own-event', () => {
  console.log('random text called after my-event occured');
});

// Fire(emit) the event
eventObj.emit('my-own-event');

eventObj.emit('my-own-event');
//when used "once",instead of "on" the second one doesn't work
