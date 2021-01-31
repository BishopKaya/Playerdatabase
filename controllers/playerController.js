const Player=require("../models/Player");

exports.listPlayers=(req,res)=>{
    Player.find({},(error,data)=>{
        if(error)console.log(error)
        req.data=data;
        res.render("players",{players:req.data});
    })
}

exports.savePlayers=(req,res,next)=>{
    Player.create({
        name:req.body.name,
        age:req.body.age,
        position:req.body.position,
        jerseyNo:req.body.jerseyNo
    },(error,data)=>{
        if(error)next(error)
        console.log(data);
        res.render("successful")
        next();
    })
}

exports.register=(req,res)=>{
    res.render("register")
}