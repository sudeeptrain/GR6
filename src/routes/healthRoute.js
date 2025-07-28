import { Router } from "express";

const healthRouter = new Router();

healthRouter.get("/",(req,res)=>{
    res.status(200).json({messsage:"All OK!"});
});

export default healthRouter;