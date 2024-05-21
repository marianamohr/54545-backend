const errorMiddleware = (error, req, res, next) => {
  console.log("Resquest",req.route.path, req.route.methods, error.cause);
  return res.status(error.status).send({ status: "error", error: error.name });
};
module.exports = errorMiddleware