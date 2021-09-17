let express = require('express')
let postroute = express.Router()


let mongoose = require('mongoose')
let Postmessage = require('../model/post')
postroute.get('/',async(req,res)=>{
  try {
    let posts = await Postmessage.find()
     res.json(posts)        
  
    } catch (err) {
   
     console.log(err)      
  }      
})




postroute.post('/',async(req,res)=>{

  try {
    let {title, message, creator, likecount, selectedfile} = req.body 
    let newpost = new Postmessage({
      creator,
      title,
      message,
      
      selectedfile,
      likecount
    }) 
    
    await newpost.save()
    res.status(201).json(newpost)
  } catch (err) {
    res.status(404).json({
      msg:err
    
    })
  }
})



postroute.patch('/:id',async(req,res)=>{

  let {id: _id} = req.params
   
  
  
  let post = req.body
  if(mongoose.Types.ObjectId.isValid(_id)){
     
        
        let rpost = await Postmessage.findByIdAndUpdate(_id, {...post, _id}   , {new:true} )   
    res.json(rpost)
  }else

  {
     res.status(404).send('no post')  
  }
})
postroute.delete('/:id',async(req,res)=>{
  let {id} = req.params  
  
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(402).send('no post')
  await Postmessage.findByIdAndDelete(id)
  
  res.json({msg:'post removed'})

})
postroute.patch('/:id/likepost',async(req,res)=>{
  let {id} = req.params
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(402).send('no post')
        let post = await Postmessage.findById(id)
        let updatedpost = await Postmessage.findByIdAndUpdate(id, {likecount:post.likecount + 1}, {new: true}) 

        res.json(updatedpost)
        
})
module.exports = postroute