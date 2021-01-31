const express = require('express');

const app = express();

app.use(express.json());

const description = 
`We just made follege app cooler for you.

What's new 
1. bugs fixed 
2. dark mode enabled
`;

let version = {
    "version":"2.2.2",
    "description":description,
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