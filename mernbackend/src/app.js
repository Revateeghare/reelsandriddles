const express = require("express")
const app = express()
const port = process.env.PORT || 3000;
const path = require ("path")
const collection=require("./db/conn")
const hbs=require("hbs")



const static_path = path.join(__dirname, "../public")
app.use(express.static(static_path))
app.set("view engine","hbs")
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.get("/", (req , res) => {
    res.render("index")
});

app.get("/category", (req , res) => {
    res.render("category")
});
app.get("/mlevel", (req , res) => {
    res.render("mlevel")
});
app.get("/mlevel1", (req , res) => {
    res.render("mlevel1")
});
app.get("/mlevel2", (req , res) => {
    res.render("mlevel2")
});
app.get("/mlevel3", (req , res) => {
    res.render("mlevel3")
});
app.get("/mlevel4", (req , res) => {
    res.render("mlevel4")
});
app.get("/mlevel5", (req , res) => {
    res.render("mlevel5")
});
app.get("/mlevel6", (req , res) => {
    res.render("mlevel6")
});
app.get("/mlevel7", (req , res) => {
    res.render("mlevel7")
});
app.get("/mlevel8", (req , res) => {
    res.render("mlevel8")
});
app.get("/mlevel9", (req , res) => {
    res.render("mlevel9")
});
app.get("/mlevel10", (req , res) => {
    res.render("mlevel10")
});
app.get("/register", (req , res) => {
    res.render("register")
}); 
app.get("/login", (req , res) => {
    res.render("login")
});

app.get("/aboutus", (req , res) => {
    res.render("aboutus")
});

app.get("/demo", (req , res) => {
    res.render("demo")
});
app.get("/contact", (req , res) => {
    res.render("contact")
});



app.post("/register",async(req , res) => {
    const data = {
        name : req.body.name,
        email :req.body.email,
        password : req.body.password
    }
    await collection.insertMany([data])

    res.render("category")
    
})


app.post("/login",async(req , res) => {
   try{
    const check=await collection.findOne({name:req.body.name})
if(check.password===req.body.password)
{
    res.render("category")
}
   else{
    res.send("wrong password")
   }
   }
   catch{
        res.send("wrong deatils")
   }
})
app.listen(port , () => {
    console.log(`server is running at port no ${port}`);
});
