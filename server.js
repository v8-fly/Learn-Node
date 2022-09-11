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

const serveFile = async (filePath, contentType, response) => {
  try {
    const data = await fsPromises.readFile(filePath, "utf8")
    response.writeHead(200, {
      "Content-type": contentType,
    })
    response.end(data)
  } catch (err) {
    console.log(err)
    response.statusCode = 500
    response.end()
  }
}

const server = http.createServer((req, res) => {
  console.log("test", req.url, req.method)
  let filePath
  const extension = path.extname(req.url)
  console.log("extension", extension)
  let contentType
  switch (extension) {
    case ".css":
      contentType = "text/css"
      break
    case ".js":
      contentType = "text/javascript"
      break
    case ".json":
      contentType = "application/json"
      break
    case ".jpg":
      contentType = "image/jpeg"
      break
    case ".png":
      contentType = "image/png"
      break
    case ".txt":
      contentType = "text/plain"
      break
    default:
      contentType = "text/html"
  }

  if (contentType === "text/html" && req.url === "/") {
    filePath = path.join(__dirname, "views", "index.html")
  } else if (contentType === "text/css") {
    filePath = path.join(__dirname, req.url)
  }

  const fileExists = fs.existsSync(filePath)
  if (fileExists) {
    serveFile(filePath, contentType, res)
  }
})

server.listen(PORT, () => console.log(`server running on port ${PORT}`))
