const router = require('express').Router()
const {getExpenses,addExpenseCategory,deleteExpenseCategory} = require('../handler/expenseHandler')


router.get('/',getExpenses)
router.post('/',addExpenseCategory)
router.delete('/:id',deleteExpenseCategory)

module.exports = router