import express from "express";
import connectdb from "./config/db.js";
import dotenv from "dotenv"
import todoRoutes from "./routes/todoRoutes.js";
import dns from "dns/promises"
import cors from 'cors';


dns.setServers(["1.1.1.1"]);
dotenv.config()


const app = express();

app.use(cors({
    origin:'http://localhost:5173'
}))

app.use(express.json());

app.use("/api/todo", todoRoutes)

connectdb().then(() => {
    app.listen(process.env.PORT, ()=> {
        console.log("Server Started");
    });
})
