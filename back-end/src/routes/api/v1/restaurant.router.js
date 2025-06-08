const express = require('express');
const router = express.Router();
const { RestaurantController } = require('../../../controllers/index');
const { AuthMiddleware } = require('../../../middlewares/index');


router.get('/', AuthMiddleware.checkRoles(['GUEST', 'CUSTOMER', 'STAFF', 'MANAGER', 'ADMIN']), RestaurantController.getAllRestaurants);
router.get('/get-paginated-restaurants', AuthMiddleware.checkRoles(['GUEST', 'CUSTOMER', 'STAFF', 'MANAGER', 'ADMIN']), RestaurantController.getPaginatedRestaurants);
router.get('/get-restaurants-by-voucherId/:voucherId', AuthMiddleware.checkRoles(['GUEST', 'CUSTOMER', 'STAFF', 'MANAGER', 'ADMIN']), RestaurantController.getRestaurantsByVoucherId);
router.get('/get-restaurants-by-dishId/:dishId', AuthMiddleware.checkRoles(['GUEST', 'CUSTOMER', 'STAFF', 'MANAGER', 'ADMIN']), RestaurantController.getRestaurantsByDishId);
router.get('/get-restaurant/:id', AuthMiddleware.checkRoles(['GUEST', 'CUSTOMER', 'STAFF', 'MANAGER', 'ADMIN']), RestaurantController.getRestaurant);



module.exports = router;
