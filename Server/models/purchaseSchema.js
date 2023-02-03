const mongoose = require('mongoose')

const purchasesSchema  = mongoose.Schema({
    item:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    date:{
     type:String,
     required:true
    },
    expenseCategory:{
        type:String,
        required:true,
    },
    user:{
        type:String,
        required:true,
    },
    
},{
    timestamps:true,
})
module.exports = mongoose.model('Purchases',purchasesSchema)