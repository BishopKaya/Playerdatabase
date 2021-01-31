const express=require("express");
const app=express();
const mongoose=require("mongoose");
const playerController=require("./controllers/playerController");
const errorController=require("./controllers/errorController");

mongoose.Promise=global.Promise;
// Mongodb config
mongoose.connect(
    "mongodb://localhost:27017/player_db",
    {useNewUrlParser:true}
)
let db=mongoose.connection;
db.once("open",()=>{
    console.log(`Mongoose successfully connected to mongodb`);
})
app.set("port",process.env.PORT||4000);
app.set("view engine","ejs");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>res.render("index"));
app.get("/successful",(req,res)=>res.render("successful"))
app.get("/players",playerController.listPlayers)
app.get("/register",playerController.register);
app.post("/register",playerController.savePlayers)

app.use(errorController.notFound);
app.use(errorController.internalServerError);

app.listen(app.get("port"),()=>{
    console.log(`Server runnning on port ${app.get("port")}`)
})