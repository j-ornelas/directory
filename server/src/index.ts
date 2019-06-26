import express from 'express';

const app = express();
const PORT = 3033;

app.get('/', (req, res) => {
  res.send('server is live')
})
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`)
})
