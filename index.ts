import express from "express"
import store from "./controller/store"
import mysql from "mysql2"
const app = express()
app.use(express.json())
app.get("/", (req, res) => {
    res.send({message : "welcome! 팝푱"})
})

app.get("/db", async (req,res) => {
    const conntection = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '1111',
        database: 'poppiyong'
    })
    conntection.execute("SELECT * FROM store", (err, result, field) => {        
        if (err)
            res.status(500).json({message : "서버오류..."})
        res.send({
            list : result
        })
    })
    return    
})
app.use("/store", store)
app.listen(5000, () => {
    console.log("SERVER OPEN!")
})