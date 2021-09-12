const express = require("express")
const path = require("path")
const app = express();
//const hbs = require("hbs")
const ejs = require('ejs')
const expressLayouts= require("express-ejs-layouts")

const port = process.env.PORT || 3500
require("./app/dbs/dbs");
require("dotenv").config()
const session = require("express-session")
const flash=require("express-flash")
//const Mongostore= require("connect-mongo")
const MongoStore = require('connect-mongo');
//const static_path=console.log(path.join(__dirname,"/public/"))
//const partials_path= path.join(__dirname,"/resources/templates/partials")
app.use(express.static('public'))
//hbs.registerPartials(partials_path);
app.use(flash())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const url = 'mongodb://localhost:27017/food';


let store = new MongoStore({
    mongoUrl: url,
    collection: "sessions"
 });

app.use(
    session({
    secret:process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized:false,
    cookie:{maxAge:1000 *15},
    store: store
}))
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set("views",path.join(__dirname,"/resources/views"))
app.use((req,res,next)=>{
    res.locals.session=req.session
    next();
})
require("./routes/web")(app)



app.listen(port,()=>{
    console.log(`this is running on the port ${port}`)
})