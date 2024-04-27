import { Request, Response } from "express";

const homeDetails = (req: Request, res: Response) => {
  res.json({ message: "Home page" })
}

const about=(req:Request,res:Response)=>{
    res.json({
        message:"about page"
    })
}
export { homeDetails,about }
