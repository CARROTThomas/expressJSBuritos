



const express = require('express')
const session = require('express-session')
const app = express()
app.use(express.json())

// DB
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require('mongoose')
const mongoURI = 'mongodb://localhost:27017/user';

// connect DB
const connectDB = async () => {
    try {
        await mongoose
            .connect('mongodb://localhost:27017/foodtruck')
            .then(()=>{console.log('on est bien connectés with DB')})
            .catch((err)=>console.log(err));
    }
    catch (error) {
        console.log("Something went wrong with Database connection");
        process.exit(1);
    }
};
connectDB();


/*
mongoose
    .connect('mongodb://localhost:27017/foodtruck')
    .then(()=>{console.log('on est bien connectés')})
    .catch((err)=>console.log(err))

*/


const port = 3001
const buritosRoutes = require('./routes/buritos')
const UserRoutes = require('./routes/users')


const store = new MongoDBStore({
    uri: mongoURI,
    collection: "mySessions",
});

app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: false,
        store: store,
    })
);


app.use('/api/buritos', buritosRoutes)
app.use('/api/user', UserRoutes)

// test connection
app.listen(port,()=>{console.log(`test connexion port ${port}`)})