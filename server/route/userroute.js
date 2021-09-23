let express = require('express')
let userroute = express.Router()


let bcrypt = require('bcryptjs')
let jwt = require('jsonwebtoken')
let User = require('../model/user')
userroute.get('/',(req,res)=>{
  res.send('hello')
})

userroute.post('/signin', async(req,res)=>{  

  let {email, password} = req.body
  try { 
  let exuser = await User.findOne({email})
  
  
  if(!exuser){
      return res.status(404).json({ 
        msg:'user not found'
      
      })
  }
  let correctpassword = await bcrypt.compare(password, exuser.password)
  if(!correctpassword){
      return res.status(400).json({
         msg:'invalid credentilas'
  
        })   
  }
  let token = jwt.sign({email:exuser.email, id:exuser._id}, process.env.jwtkey,{ expiresIn:'1h'})

  res.json({result:exuser, token})
  } catch (error) {
    res.status(500).json({msg:'something went wrong'})
  }
})

userroute.post('/signup',async(req,res)=>{
      let {email, password, firstname, lastname} = req.body  
      try {
        

       
       let exuser = await User.findOne({email})
       if(exuser){
        return res.status(400).json({

          msg:'user exists'
        }) 
       }
       let enpwd = await bcrypt.hash(password, 10)
       let user = await User.create({


        email:email,
        password:enpwd,
        
        name:`${firstname} ${lastname}`
       }) 
  let token = jwt.sign({email:user.email, id:user._id}, process.env.jwtkey,{ expiresIn:'1h'})
  
  return res.json({ 
    result:user, token})
      } catch (error) {
       
    console.log(error)    
    res.status(500).json({msg:'something went wrong'})

      } 
    })




module.exports = userroute