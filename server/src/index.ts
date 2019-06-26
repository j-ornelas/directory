import express from 'express';
import { router } from './routes/employees';

const PORT = 3033;
const app = express();
app.use(router);


app.get('/', (req, res) => {
  res.send('server is live')
})
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`)
})
