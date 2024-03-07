const userValidation = (req, res, next) => {
  const { first_name, last_name, email } = req.body;
  if (!first_name || !last_name || !email) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  next();
};

module.exports = userValidation;
