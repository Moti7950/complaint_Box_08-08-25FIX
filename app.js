import complaintsServer from "./routes/ExspresServer.js"

const PORT = process.env.PORT;

complaintsServer.listen(PORT, () => {
    console.log(`Im lisinig to you on port ${PORT}`);

})