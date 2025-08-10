import express from "express";
import {getAllComplaints} from "./utilsFunction.js"

const adminRouter = express.Router()

async function authMiddleware(req, res, next) {
  const { username, password } = req.query;

  if (password !==process.env.USERNAME && username !== process.env.PASSWORD) {
    return res.status(401).send("incorect user or password");
  }

  next()
}

adminRouter.get("/readComplaints",authMiddleware, async (req, res) => {
    try {
        console.log("Hi from readComplaints");
        const getComplaints = await getAllComplaints()
        res.status(200).json({message: "Success to read", data: getComplaints})
    }
    catch(err)
    {
        res.status(500).json({error: "Internal server error!!", err })
    }
})

export default adminRouter;
