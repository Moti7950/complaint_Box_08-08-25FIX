import { MongoClient } from "mongodb";


const mongoServer = new MongoClient(process.env.MONGO_URL)

export async function getAllComplaints() 
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


export async function createNewComplaint(newComplain)
{
    await mongoServer.connect()
    try{
        const DBname = mongoServer.db("complaints_DB")
        const DBTablename = DBname.collection("complaints")

        const result = await DBTablename.insertOne(newComplain)

        console.log("insert complit");
        
    }
    finally{
        await mongoServer.close()
    }
}

export function newComplainTemplit(category,TypeOfComplaint)
{
    const complainTemplit =
    {
        category: category,
        TypeOfComplaint: TypeOfComplaint
    }

    return complainTemplit;
}
