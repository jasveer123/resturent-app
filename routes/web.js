
const authcontroller = require("../app/http/controller/authcontroller")
const homecontroller = require("../app/http/controller/homecontroller")


function initroutes(app){

  app.get("/",homecontroller().index)

app.get("/cart",(req,res)=>{
  res.render("error_cart")
})

app.get("/login",authcontroller().login)

app.get("/Register",authcontroller().register)


app.get("/Menu",(req,res)=>{
  res.render("Menu")
})

}


module.exports=initroutes;