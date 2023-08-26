import express from 'express';
import payload from 'payload';

require('dotenv').config();

const server = express();

server.get('/', (_, response) => {
  response.redirect('/admin');
});

const start = async () => {
  await payload.init({
    express: server,
    mongoOptions: {
      dbName: process.env.DATABASE_NAME,
    },
    mongoURL: process.env.MONGODB_URI,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
    secret: process.env.PAYLOAD_SECRET,
  });

  server.listen(8888);
};

start();
