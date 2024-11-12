
const express = require("express");
const mongoose = require('mongoose');

require('dotenv').config();

const app = express()

//Model import
const user = require("./models/user")

//Routes Import
const userRoutes = require("./routes/userRouters")

const PORT = 3000
const dbUri = process.env.DB_URInode 


app.use(express.json())

mongoose.connect(dbUri).then(() => {
    console.log("DB Conected");
})

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.use('/api/users', userRoutes)

app.get("/get-my-ip", (req, res) =>  {
    const  ip = requestIp.getClientIp(req)
    res.send({
        ip
    }) 
}) 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}
        ;D`);
})