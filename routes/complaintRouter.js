import express from "express";
import { newComplainTemplit, createNewComplaint} from "./utilsFunction.js";


const complaintRouter = express.Router()

complaintRouter.post("/newComplaint", async (req,res) => {
    try
    {
        console.log("Hi from newComplaint!");
        console.log("Received body", req.body);
        const {category,TypeOfComplaint} =req.body
        const tempData = newComplainTemplit(category,TypeOfComplaint)
        await createNewComplaint(tempData)
        res.status(200).json({message: "Success to writa a new complaint"})
    }
    catch(err)
    {
        res.status(500).json({error: "Internal server error!"})
    }
})

export default complaintRouter;
