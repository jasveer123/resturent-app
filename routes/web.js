
const authcontroller = require("../app/http/controller/authcontroller")
const homecontroller = require("../app/http/controller/homecontroller")
const cartcontroller = require("../app/http/controller/cartcontroller")


function initroutes(app) {

  app.get("/", homecontroller().home)

  app.get("/cart", cartcontroller().fill)


  app.post("/updatecart", cartcontroller().update)

  app.get("/login", authcontroller().login)

  app.get("/Register", authcontroller().register)


  app.get("/Menu", (req, res) => {
    res.render("Menu")
  })

}


module.exports = initroutes;