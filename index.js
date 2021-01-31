const express = require('express');

const app = express();
const port = 3000;

app.listen(port, ()=>{console.log(`server listening at port ${port}`)});

let version = {
    "version":"1.0.0",
    "description":"1. bugs fixed \n2. dark mode enabled",
    "forceUpdate":true
};

app.get("/version", (req, res)=>{
    res.json(version);
});

