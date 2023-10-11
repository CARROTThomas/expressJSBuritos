const express = require('express')
const app = express()
const port = 3000
const pizzaRoutes = require('./routes/pizzas')
const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost:27017/foodtruck')
    .then(()=>{console.log('on est bien connectés')})
    .catch((err)=>console.log(err))

app.use(express.json())


app.use('/api/pizzas', pizzaRoutes)



app.listen(port, ()=>{
    console.log("knock knock knock knock")
})

