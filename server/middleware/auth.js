let jwt = require('jsonwebtoken')
let auth = async (req,res,next)=>{
 
    
     try {
      console.log(req.headers.authorization)
      let token = req.headers.authorization.split(' ')[1]
    //   console.log(token)
      let customauth = token.length < 500
      let decodeddata = null
      if(token && customauth){
      
        decodeddata = jwt.verify(token, process.env.jwtkey)
       
       req.userId = decodeddata.id 

      } 
      else {
          decodeddata = jwt.decode(token)




          req.userId = decodeddata.sub
          
      }
      next()
     } catch (error) {   
      console.log(error)  
    }    
}



module.exports = auth