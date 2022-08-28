const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  const PROXY_TARGET = process.env.REACT_APP_PROXY_TARGET;

  app.use(
    "/api/v1",
    createProxyMiddleware({
      target: PROXY_TARGET,
      changeOrigin: true
    })
  );
};
