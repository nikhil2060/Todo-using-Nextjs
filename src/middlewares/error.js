export const errorHandler = (
  res,
  statusCode = 200,
  message = "Internal Server Error"
) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

export const asyncError = (passedFn) => (req, res) => {
  return Promise.resolve(passedFn(req, res)).catch((err) => {
    errorHandler(res, 500, err.message);
  });
};
