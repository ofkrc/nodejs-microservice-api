const express = require('express');
const router = express.Router();
const {
    getAllOrders,
    getOrder,
    createOrder,
    updateOrderStatus,
    getUserOrders,
    cancelOrder
} = require('../controllers/orderController');

router.route('/')
    .get(getAllOrders)
    .post(createOrder);

router.route('/:id')
    .get(getOrder)
    .put(updateOrderStatus);

router.route('/:id/cancel')
    .put(cancelOrder);

router.route('/user/:userId')
    .get(getUserOrders);

module.exports = router; 