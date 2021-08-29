function cartcontroller(){

    return{
        fill(req,res){
            res.render("customer/error_cart")
            
        },
        
        update(req,res){
            return JSON.res({data:"allok"})
        }

    }
}


module.exports=cartcontroller