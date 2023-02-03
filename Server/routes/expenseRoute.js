const router = require('express').Router()
const {getExpenses,getExpensesByUserId,addExpenseCategory,deleteExpenseCategory} = require('../handler/expenseHandler')


router.get('/',getExpenses)
router.post('/',addExpenseCategory)
router.delete('/:id',deleteExpenseCategory)

module.exports = router