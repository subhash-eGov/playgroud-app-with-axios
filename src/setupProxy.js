const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/egov-mdms-service',
    createProxyMiddleware({
      target: 'https://egov-micro-dev.egovernments.org',
      changeOrigin: true
    })
  );

  app.use(
    '/localization',
    createProxyMiddleware({
      target: 'https://egov-micro-dev.egovernments.org',
      changeOrigin: true
    })
  );
};
