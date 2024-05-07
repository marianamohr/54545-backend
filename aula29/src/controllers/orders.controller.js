const orderDao = require("../DAO/order.dao");

const getOrders = async (req, res) => {
  res.send({ status: "success", result: "getOrders" });
};

const getOrderById = async (req, res) => {
  res.send({ status: "success", result: "getOrderById" });
};

const createOrder = async (req, res) => {
  const order = req.body;

  // numero
  // business 50 pitStop
  // user 100 mari
  // user existe?
  // fazer um find pelo id recebido do user
  // fazer um find em users pelo id recebido
  // business existe?
  // fazer um find em business pelo id recebido
  const orderCreated = orderDao.createOrder(order)
  res.send({ status: "success", result: orderCreated });
};

const resolveOrder = async (req, res) => {
  res.send({ status: "success", result: "resolveOrder" });
};

module.exports = {
  getOrders,
  getOrderById,
  createOrder,
  resolveOrder,
};
