const router = require('express').Router()

const {getPurchases,createPurchase,updatePurchase,deletePurchase} = require('../handler/purchasesHandler')

router.get('/',getPurchases)
router.post('/',createPurchase)
router.put('/:id',updatePurchase)
router.delete('/:id',deletePurchase)

module.exports = router