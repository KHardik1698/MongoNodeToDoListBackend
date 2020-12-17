const sendResponse = (statusCode, status, data, req, res) => {
  res.statusCode(statusCode).json({
    status: status,
    data: data,
  });
};

module.exports = sendResponse;
