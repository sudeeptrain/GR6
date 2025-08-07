import { createShortLink } from "../services/linkService.js";
export default async function shortenHandler(req,res){
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
}