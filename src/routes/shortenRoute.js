import { Router } from "express";
import { createShortLink } from "../services/linkService.js";
import "dotenv/config"

const shortenRouter = new Router();

shortenRouter.post("/",async (req,res)=>{
    console.log("req body", req.body);
    const {url} = req.body;
    if(!url) 
        res.json({"message":"NO url provided"}) ;
    try {
        
        const linkRecord = await createShortLink(url);
        console.log(linkRecord);
        res.status(201).json({
            code:linkRecord.code, 
            shortUrl:`${process.env.BASE_URL}/${linkRecord.code}`
        }
)
    } catch (error) {
        console.log(error);
    }   
});

export default shortenRouter;
