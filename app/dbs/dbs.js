const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/food",{
    //userCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log("connection sucessful..");

}).catch((e)=>{console.log("no connection");

})

