const service = require("../service/user.service");

const get = async (req, res) => {
  const user = await service.get();
  return res.status(200).json({ message: user });
};

module.exports = { get };
