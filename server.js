const http = require("http")
const path = require("path")
const fs = require("fs")
const fsPromises = require("fs").promises

const logEvents = require("./logEvents")
const EventEmitter = require("events")

class MyEmitter extends EventEmitter {}

//initialize object
const emitter = new MyEmitter()

const PORT = process.env.PORT || 3500

const server = http.createServer((req, res) => {
  let filePath

  switch (req.url) {
    case "/":
      res.statusCode = 200
      filePath = path.join(__dirname, "views", "index.html")
      fs.readFile(filePath, "utf8", (err, data) => {
        res.end(data)
      })
      break

    // default:
    //   break;
  }

  // if (req.url === "/") {
  //   res.writeHead(200, {
  //     "Content-type": "text/html",
  //   })
  //   filePath = path.join(__dirname, "views", "index.html")
  //   console.log("test", filePath)
  //   fs.readFile(filePath, "utf8", (err, data) => {
  //     res.end(data)
  //   })
  // }
})

server.listen(PORT, () => console.log(`server running on port ${PORT}`))
