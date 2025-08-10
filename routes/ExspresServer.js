import express from "express";
import adminRouter from "./adminRouter.js"
import complaintRouter from "./complaintRouter.js"

const complaintsServer = express()
complaintsServer.use(express.urlencoded({ extended: true }));


complaintsServer.use(express.json())

complaintsServer.use("/user", adminRouter)

complaintsServer.use("/complaint", complaintRouter);

export default complaintsServer;
