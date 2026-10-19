import type { RequestHandler } from 'express';

const allowedOrigins: readonly string[] = [
  'http://localhost:3000',
  'https://codemagics.ru',
  'https://app.codemagics.ru',
  'https://demo.codemagics.ru',
];

export const cors: RequestHandler = (req, res, next) => {
  const origin = req.header('origin')?.toLowerCase();

  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With, content-type',
  );
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
};
