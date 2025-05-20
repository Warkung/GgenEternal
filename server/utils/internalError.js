const internalError = (res, error) => {
  console.log(error);
  res.status(500).send("Internal Server Error");
};

module.exports = internalError;