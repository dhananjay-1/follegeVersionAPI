const express = require('express');

const app = express();

app.use(express.json());

const description = 
`We just made follege app cooler for you.

What's new 
1. Bugs fixed 
2. Push Notifications enabled
3. App performance optimized
`;

let version = {
    "version":"1.0.2",
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