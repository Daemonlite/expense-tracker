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
    user:{
     type:mongoose.Types.ObjectId,
     ref:'User'
    },
},{
    timestamps:true,
})