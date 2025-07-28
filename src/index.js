import express from "express";
import "dotenv/config"
import morgan from "morgan";
import connectionPool from "./config/db.js";
import healthRouter from "./routes/healthRoute.js";
import shortenRouter from "./routes/shortenRoute.js";

const app = express();

const PORT = process.env.PORT || 3000;
// middleware
app.use(express.json());

// routing

app.use("/health",healthRouter);
app.use("/shorten",shortenRouter);
// app.get("/health",(req,res)=>{
//     res.status(200).json({message:"OK"});
// });

async function startServer(){
    try {
        const {rows} = await connectionPool.query("select now() as now");
        console.log(`DB started at ${rows[0].now}`);
        // start server
        app.listen(PORT,()=>{
            console.log(`server listening on ${PORT}`);
        })
    } catch (err) {
        console.log(`server not connected ${err}`);
    }
}
startServer();




