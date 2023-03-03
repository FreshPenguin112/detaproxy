const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
  '/',
  cors(),
  createProxyMiddleware({
    target: process.env.WEBSITE_TO_PROXY || 'https://example.com',
    changeOrigin: true,
  })
);

app.listen(+process.env.PORT || 1234);
