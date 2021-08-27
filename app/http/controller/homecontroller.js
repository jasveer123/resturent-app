const Menu=require("../../models/menu")


function homecontroller() {
    return {
        
        async index(req, res){
         const food = await Menu.find()
         console.log(food)
          return res.render("index",{food:food})

    }
}
}

module.exports=homecontroller