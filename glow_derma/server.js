const express = require('express');
const port =  5050
const app = express();
const rateLimit = require('express-rate-limit');

app.use(express.json())
//set view engine template to headers
app.set("view engine","hbs")
//directory to folder
app.set("views","views")

app.get("/new",(req,res)=>{
    const new_data = {
        name: "Deep",
        website: "E-commerce Website",
        price: 199,
        description: "An innovative platform for easy online shopping."
      };
    res.render("index",new_data)
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})