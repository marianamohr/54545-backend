const customError = ({ name = "error", cause, message, status = 500 }) => {
  const error = new Error(message, { cause });
  error.name = name;
  error.status = status;
  throw error;
};

module.exports = customError;
