const express = require("express")
const path = require("path")
const app = express();
const hbs = require("hbs")

const port = process.env.PORT || 3500
require("./app/dbs/dbs");
require("dotenv").config()
const session = require("express-session")
const flash=require("express-flash")
//const Mongostore= require("connect-mongo")
const MongoStore = require('connect-mongo');
//const static_path=console.log(path.join(__dirname,"/public/"))
const partials_path= path.join(__dirname,"/resources/templates/partials")
app.use(express.static('public'))
hbs.registerPartials(partials_path);
app.use(flash())

const url = 'mongodb://localhost:27017/food';

/*const mongoose = require("mongoose");

mongoose.connect(url,{
    //userCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology : true,
    useFindAndModify:false,
    useCreateIndex:false
}).then(()=>{
    console.log("connection sucessful..");

}).catch(e=>{
      console.log("error in database")
})*/


/*let mongostore = new MongoStore({
    uri: new MongoStore({ mongooseConnection: mongoose.connection  }),
    collection:'mySessions'
})*/


let store = new MongoStore({
    mongoUrl: url,
    collection: "sessions"
 });

app.use(
    session({
    secret:process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized:false,
    cookie:{maxAge:1000 * 14},
    store: store
}))

app.set('view engine', 'hbs')
app.set("views",path.join(__dirname,"/resources/templates/views/"))

require("./routes/web")(app)

app.listen(port,()=>{
    console.log(`this is running on the port ${port}`)
})