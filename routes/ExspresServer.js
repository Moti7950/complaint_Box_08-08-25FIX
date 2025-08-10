import express from "express";
import adminRouter from "./adminRouter.js"
import complaintRouter from "./complaintRouter.js"

const complaintsServer = express()

complaintsServer.use(express.json())

complaintsServer.use("/user", adminRouter)

complaintRouter.use("/complaint",complaintRouter)

export default complaintsServer;
