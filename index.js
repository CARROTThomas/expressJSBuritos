const express = require('express')
const app = express()
const port = 3001
const buritosRoutes = require('./routes/buritos')
const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost:27017/foodtruck')
    .then(()=>{console.log('on est bien connectés')})
    .catch((err)=>console.log(err))

app.use(express.json())

app.use('/api/buritos', buritosRoutes)


app.listen(port,()=>{
    console.log("knock")
})