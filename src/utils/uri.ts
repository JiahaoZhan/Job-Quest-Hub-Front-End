const isProduction = process.env.NODE_ENV === 'production';

const url = isProduction ? 'https://github.com/jiahaoZhan' : 'http://localhost:8080';

const apiUrl = '/api';

export {
  apiUrl,
  url
};