const router = require('express').Router()
const cartController = require('../controllers/cartController')

router.get('/', cartController.getCarts)
router.post('/', cartController.addToCart)
router.patch('/additem/:id', cartController.addItem)
router.patch('/minitem/:id', cartController.minItem)
router.delete('/:id', cartController.deleteCart)

module.exports = router