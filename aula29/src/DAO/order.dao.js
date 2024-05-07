const orderModel = require("../models/order.model")



const getOrders = async () => {
    const orders = await orderModel.find()
    return orders;
};

const createOrder = async (order) => {
    const orderCreated = await orderModel.create(order)
    return orderCreated;
};



module.exports = {getOrders, createOrder}