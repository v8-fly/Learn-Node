const logEvents = require("./logEvents")

const EventEmitter = require("events")

class MyEmitter extends EventEmitter {}

//initialize object
const emitter = new MyEmitter()

//add emiter for events
emitter.on("log", (msg) => logEvents(msg))

setTimeout(() => {
  //Emit event
  emitter.emit("log", "Test event Emited!!!")
}, 2000)
