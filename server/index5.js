let express = require('express')
let postroute = require('./route/postroute')


let cors = require('cors')
let mongoose = require('mongoose')
let bodyparser = require('body-parser')
let dotenv = require('dotenv')
let app = express()
let userroute = require('./route/userroute')

dotenv.config()

app.use(cors())
app.use(bodyparser.json({ limit: '30mb', extended: true }))
app.use(bodyparser.urlencoded({ limit: '30mb', extended: true }))




app.use('/post',postroute)

app.use('/user',userroute)
mongoose.connect(process.env.mongourl).then(()=>{
console.log('connected successfully')   
}).catch((err)=>{
    console.log(err)
})

// app.get('/',(req,res)=>{
//     res.send('hello')   
// })

app.listen(3200,console.log('server start'))