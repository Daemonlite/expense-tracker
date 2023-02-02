const router = require('express').Router()
const {getUsers,register,loginUser,updateUserInfo,deleteUser} = require('../handler/userHandler')
const {verifyToken} = require('../middleware/verify')

router.get('/',verifyToken,getUsers)
router.post('/register',register)
router.post('/login',loginUser)
router.put('/:id',updateUserInfo)
router.delete('/:id',verifyToken,deleteUser)

module.exports = router