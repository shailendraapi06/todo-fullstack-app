const errorHandler = (err, req, res, next) => {
  console.error(err);
  const code = err.statusCode || 500;
  const message = err.message || 'Server error';
  res.status(code).json({ message });
};

module.exports = errorHandler;