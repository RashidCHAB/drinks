import  express  from "express";
import mongoose from "mongoose";
import routes from "./routes/index.js"

const app = express()

app.use(express.json())
app.use(routes)

mongoose.connect("mongodb+srv://RashidChab:123@cluster0.4agwvmc.mongodb.net/drinkShop")
.then(() => {
    console.log("Database connected successfully.")
    app.listen(3000, () =>{
        console.log("Application successfully launched at http://localhost:3000")
    })
})