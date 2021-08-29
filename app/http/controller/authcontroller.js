
function authcontroller(){

    return{
        login(req,res){
            res.render("auth/login")
            
        },
        
        register(req,res){
            res.render("auth/register")
        }

    }
}


module.exports=authcontroller