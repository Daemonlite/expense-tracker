const router = require('express').Router()

const {getPurchases,createPurchase,updatePurchase,deletePurchase,getPurchasesByExpenseCategory} = require('../handler/purchasesHandler')

router.get('/',getPurchases)
router.get('/:id',getPurchasesByExpenseCategory)
router.post('/',createPurchase)
router.put('/:id',updatePurchase)
router.delete('/:id',deletePurchase)

module.exports = router