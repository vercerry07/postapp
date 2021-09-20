let jwt = require('jsonwebtoken')
let auth = (req,res,next)=>{
 
    
     try {
      let token = req.headers.authorization.split(' ')[1]
      let customauth = token.length < 500
      let decodeddata = null
      if(token && customauth){
       decodeddata = jwt.verify(token, process.env.jwtkey)
       
       req.userId = decodeddata.id 

      }
      else {
          decodeddata = jwt.decode(token)




          req.userID = decodeddata.sub
          
          next()
      }
     } catch (error) {   
      console.log(error)  
    }    
}



module.exports = auth