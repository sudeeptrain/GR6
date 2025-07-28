import { Router } from "express";
import { createShortLink } from "../services/linkService.js";

const shortenRouter = new Router();

shortenRouter.post("/",async (req,res)=>{
    console.log("req body", req.body);
    const {url} = req.body;
    try {
        
        const linkRecord = await createShortLink(url);
        console.log(linkRecord);
        res.status(201).json({
            code:linkRecord.code, 
            shortUrl:linkRecord.url
        }
)
    } catch (error) {
        console.log(error);
    }   
});

export default shortenRouter;
