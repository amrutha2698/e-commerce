//import express
const express = require('express')

//import product controller
const productController =require('../controllers/productController')
// import wishlistController
const wishlistController =require('../controllers/wishlistController')
//import cartController
const cartController = require('../controllers/cartController')

//to create route using express
const router = new express.Router()

//route for getallproducts
router.get('/products/get-all-products',productController.getallProducts)

//ROUTE for view product 
router.get('/products/view/:id',productController.viewProduct)

//route for add to wishlist
router.post('/wishlist/add-product',wishlistController.addtowishlist)

//route for get wishlist
router.get('/wishlist/all-products',wishlistController.getwishlist)

//router for removing an item from wishlist
router.delete('/wishlist/remove-item/:id',wishlistController.removeItem)

// add to cart item
router.post('/cart/add-product',cartController.addTocart)

//routs for get cart
router.get('/cart/all-products',cartController.getcart)

//router for remove item
router.delete('/cart/remove-item/:id',cartController.removecartItem)

//route for incrementing cart item
router.get('/cart/increment-item/:id',cartController.inCartItem)

//route for incrementing cart item
router.get('/cart/decrement-item/:id',cartController.deCartItem)

//router for empty cart
router.delete('/cart/empty',cartController.emptyCart)

//export router
module.exports = router