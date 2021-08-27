const { registerHelper } = require("hbs")

function authcontroller(){

    return{
        login(req,res){
            res.render("login")
            
        },
        
        register(req,res){
            res.render("Register")
        }

    }
}


module.exports=authcontroller