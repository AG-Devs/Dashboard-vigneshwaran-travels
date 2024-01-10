const mongoose=require('mongoose')
const express=require('express')
const app=express()
const routeUrls=require('./router.cjs')
const cors=require('cors')
const dotenv=require('dotenv')

dotenv.config()

mongoose.connect('mongodb+srv://agdeveloperss:AG12345@cluster0.zjfpuve.mongodb.net/VigneshwaranTravels?retryWrites=true&w=majority')
app.use(cors())
app.use(express.json())

app.use("/users",routeUrls)
app.use("/customer",routeUrls)



app.listen(process.env.PORT || 3003,console.log('server  is up'))