import express from "express";

const complaintRouter = express.Router()

complaintRouter.post("/newComplaint", async (req,res) => {
    try
    {
        console.log("Hi from newComplaint!");
        console.log("Received body", req.body);
        await createNewComplaint(req.body)
        res.status(200).json({message: "Success to writa a new complaint"})
    }
    catch(err)
    {
        res.status(500).json({error: "Internal server error!"})
    }
})

export default complaintRouter;


// new page 

async function createNewComplaint()
{
    console.log("Hi");
}