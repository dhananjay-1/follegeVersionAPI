const express = require('express');

const app = express();

app.use(express.json());

let version = {
    "version":"1.0.0",
    "description":"1. bugs fixed \n2. dark mode enabled",
    "forceUpdate":false
};

app.get("/", (req, res)=>{
    res.send("Welcome to follege version api");
})

app.get("/version", (req, res)=>{
    res.json(version);
});



const port = process.env.PORT || '3000';
app.listen(port, ()=>{console.log(`Server started at port ${port}`)});