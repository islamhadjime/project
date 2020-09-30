

const Post = require("../models/post");





exports.home = (req,res)=>{
  res.render("index");
}


exports.doc = (req,res)=>{
  res.render("doc");
}


exports.arr = (req,res)=>{
  Post.find({},(err,postAll)=>{
    if(err){
      return res.senStatus(400)
    }
    res.render("arr",{post:postAll})
  })

}


exports.result = (req,res)=>{
  res.render("result");
}
