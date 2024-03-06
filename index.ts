import express from "express"
import store from "./controller/store"
import mysql from "mysql2"
const app = express()
app.use(express.json())
app.get("/", (req, res) => {
    res.send({message : "welcome! 팝푱"})
})
app.use("/store", store)
app.listen(5000, () => {
    console.log("SERVER OPEN!")
})