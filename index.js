const express = require("express");
const {connectDB} = require("./db.Config");

const app = express()

app.use(express.json())


app.listen(8000,()=>{
    connectDB()
    console.log("Server is running at http://localhost:8000")
})