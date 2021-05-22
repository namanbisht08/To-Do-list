const express = require("express");
const bodyParser = require("body-parser");

const app  = express();

let items =["Buy Food","Cook Food","Eat Food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', function(req,res){
    let today = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    //var day = today.toLocaleDateString("en-US", options);
    let day = today.toLocaleDateString("hi-IN", options);

    res.render("list",{KindOfDay : day, newListItems: items});
});

app.post("/", function(req,res){
    let item = req.body.newItem;
    //console.log(item);
    items.push(item);
    res.redirect("/");
});

app.listen(3000, ()=> console.log("Server started at port 3000"));