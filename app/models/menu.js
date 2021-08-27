const mongooose = require("mongoose")

const food_schema= new mongooose.Schema({
    name:{type:String,require:true},
    image:{type:String,require:true},
    price:{type:String,require:true},
    size:{type:String,require:true},

})

const food_menu = new mongooose.model("Menu",food_schema)

module.exports = food_menu;