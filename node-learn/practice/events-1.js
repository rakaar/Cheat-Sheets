var events = require('events');

// Create an event object as usual
eventObj = new events.EventEmitter();

// Create an event and furthur after the event create fire event
eventObj.on('my-own-event', () => {
  console.log('first event called');

  //fire another event
  eventObj.emit('second-event');
});

// Now describet the  "second-event"
eventObj.on('second-event', () => {
  console.log('second event called');
});

console.log(eventObj);

// Fire(emit) "my-own-event"
eventObj.emit('my-own-event');

/*
SUMMARY:
FIRST AN EVENT OBJECT SHOULD BE CREATED THAT WILL CONTAIN ALL THE EVENTS
USING  EventEmitter() method of events module

make an event and then bind a function to it,
object.on ('event-name', function after event is called)

then fire the event when ever u want to using
obj.emit('name of the event')



*/
