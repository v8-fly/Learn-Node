const os = require("os")
const path = require("path")
const { add } = require("./math")
const fsPromises = require("fs").promises
// const file = require("./files/starter.txt")

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())
// console.log(__dirname)
// console.log(__filename)
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))
// console.log(add(1, 2))

// console.log(__dirname)

// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) {
//       throw err
//     } else {
//       console.log(data)
//     }
//   }
// )

// process.on("uncaughtException", (err) => {
//   console.error("hey HARDIK there is an uncought exception", err)
//   process.exit(1)
// })

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "I am in Space step 1 done",
//   (err) => {
//     if (err) {
//       throw err
//     } else {
//       fs.appendFile(
//         path.join(__dirname, "files", "reply.txt"),
//         "\n\n Stepp >> 2",
//         (err) => {
//           if (err) {
//             throw err
//           } else {
//             fs.rename(
//               path.join(__dirname, "files", "reply.txt"),
//               path.join(__dirname, "files", "This is renamed.txt"),
//               (err) => {
//                 if (err) {
//                   throw err
//                 } else {
//                   console.log("Rocket in Orbit lknlknln")
//                 }
//               }
//             )
//           }
//         }
//       )
//       console.log("Rocket in Orbit")
//     }
//   }
// )

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "lorem.txt"),
      "utf-8"
    )
    await fsPromises.appendFile(
      path.join(__dirname, "files", "lorem.txt"),
      `\n\n${data + "hey We wrote to the file HARDIK"}`
    )
    const data2 = await fsPromises.readFile(
      path.join(__dirname, "files", "lorem.txt"),
      "utf-8"
    )
    fsPromises.unlink(path.join(__dirname, "files", "lorem.txt"))
    console.log(data2)
  } catch (error) {
    console.log(error)
  }
}
fileOps()
