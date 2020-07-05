const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    'http://localhost:3000',
    createProxyMiddleware({
      target: 'https://egov-micro-dev.egovernments.org',
      changeOrigin: true,
    })
  );
};
