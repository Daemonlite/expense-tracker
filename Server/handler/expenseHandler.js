const Expenses = require('../models/expenseCategorySchema')
const User = require('../models/userSchema')

const getExpenses = async (req,res) => {
    const expenses = await Expenses.find({}).exec();
    if (!expenses) {
      return res.status(404).json({ message: "No expenses found  found" });
    } else {
      res.status(200).json(expenses);
    }
}

const addExpenseCategory = async (req,res) => {
    const {title,description,budgetAmount,user,purchases} = req.body

    if(!title || !description){
        res.status(400).json({message:"enter required fields"})
    }
    
    

    let existingUser;
    try {
      existingUser = await User.findById(user)
    } catch (error) {
      console.log(error)
    }
    if(!existingUser){
      return res.status(400).json({message:"User not found"})
    }

    const exp = new Expenses({
        title,
        description,
        budgetAmount,
        user,
        purchases
    })

 try {
    await exp.save()
    existingUser.expenseCategories.unshift(exp)
    existingUser.save()
   
 } catch (error) {
    console.log(error)
 }
 return res.status(201).json(exp)

  }



  const deleteExpenseCategory = async (req, res, next) => {
    const id = req.params.id;
  
    let purch;
    try {
      purch = await Expenses.findOne({ _id: id });
      if (!purch) {
        return res.status(404).json({ message: "The specified expense category was not found." });
      }
      await Expenses.deleteOne({ _id: id });
      await User.updateOne({ _id: purch.user }, { $pull: { expenseCategories: { _id: purch._id } } });
    } catch (err) {
      return res.status(500).json({ message: "Unable to delete the expense category. An internal server error has occurred." });
    }
    return res.status(200).json({ message: "Successfully deleted the expense category." });
  };
  
  

module.exports = {
    getExpenses,
    addExpenseCategory,
    deleteExpenseCategory
}