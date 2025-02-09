const express = require("express");
const {connectDB} = require("./db.Config");
const { authRouter } = require("./routes/authentication.routes");
const { userRouter } = require("./routes/user.routes");
const { authorRouter } = require("./routes/author.routes");
const { BookRouter } = require("./routes/book.routes");
const { borrowingRouter } = require("./routes/borrow.routes");

const app = express()

app.use(express.json())

app.use("/auth", authRouter)
app.use("/user", userRouter)
app.use("/author", authorRouter)
app.use("/books", BookRouter)
app.use("borrow", borrowingRouter)


app.listen(8000,()=>{
    connectDB()
    console.log("Server is running at http://localhost:8000")
})