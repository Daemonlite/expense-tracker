const mongoose = require('mongoose')

const expenseCategorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    budgetAmount:{
        type:Number,
        default:0
    },
    purchases:{
        type:Array,
    },
    user:{
    type: String,
     required:true,
    },
},{
    timestamps:true,
})
module.exports = mongoose.model('Expense',expenseCategorySchema)