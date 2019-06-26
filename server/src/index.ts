import express from 'express';
import { router } from './routes';
import bodyParser from 'body-parser';

const PORT = 3033;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);



app.get('/', (req, res) => {
  res.send('server is live')
})
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`)
})
