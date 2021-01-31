const express = require('express');

const app = express();

app.use(express.json());

let version = {
    "version":"1.0.0",
    "description":"We just made follege app cooler for you.\n\nWhat's new \n\n1. bugs fixed \n\n2. dark mode enabled",
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