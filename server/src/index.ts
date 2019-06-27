import express from 'express';
import { router } from './routes';
import bodyParser from 'body-parser';
/* ******** CONNECT DB ******** */
import { db } from './database/database';
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('db is connected....'));
/* ******** SERVER CONFIG ******** */
const PORT = 3033; // not using process.env for ease of running the app.
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
/* ******** SERVER INIT ******** */
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
