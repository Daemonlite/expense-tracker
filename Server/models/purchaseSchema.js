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
    expenseCategory:[{type:mongoose.Types.ObjectId,ref:'Expenses',required:false}],
    user:[{type:mongoose.Types.ObjectId,ref:'User',required:false}],
    
},{
    timestamps:true,
})
module.exports = mongoose.model('Purchases',purchasesSchema)