import express from "express";

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


// new page

import { MongoClient } from "mongodb";

const mongoServer = new MongoClient(process.env.MONGO_URL)
console.log(process.env.MONGO_URL);

async function getAllComplaints() 
{
    await mongoServer.connect();
    try
    {
        const DBname = mongoServer.db("complaints_DB")
        const DBTablename = DBname.collection("complaints")
        const result = await DBTablename.find().toArray()
        console.log(result);
        return result;
    }
    catch(err)
    {
        console.error("MongoDb error:", err.message);
        console.error(err)
           return [];
    }
    finally {
        await mongoServer.close()
    }
}