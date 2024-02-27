import dotenv from "dotenv"
import express from "express"
import connectDB from "./db/index.js"

const app = express()

dotenv.config({
    path: "./env",
})

connectDB()

// ;(async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERROR", error)
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`app is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw err
//     }
// })()