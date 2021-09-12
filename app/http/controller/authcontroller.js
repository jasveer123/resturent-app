const User = require("../../models/User")
const bcrypt = require("bcrypt")
function authcontroller() {

    return {
        login(req, res) {
            res.render("auth/login")

        },

        register(req, res) {
            res.render("auth/register")
        },

       async details(req,res) {

            const { name, email, password } = req.body
            
            if(!name || !email || !password) {
                req.flash("error", "All fields are required")
                req.flash("name", name)
                req.flash("email", email)
                return (res.redirect('/register'))
            }
            
            User.exists({ email: email }, (err, result) => {
                if(result){
                req.flash("error", "Email already exists")
                req.flash("name", name)
                req.flash("email", email)
                return (res.redirect('/register'))
                }
            })

            

            const passs = await bcrypt.hash(password,10)
            console.log(passs)

            const user = new User({
             name:name,
             email:email,
             password:passs
            })

             
            user.save().then((user) => {
                // Login
                return res.redirect('/')
             }).catch(err => {
                req.flash('error', 'Something went wrong')
                    return res.redirect('/register')
             })


        console.log(req.body)

        }

    }
}


module.exports = authcontroller