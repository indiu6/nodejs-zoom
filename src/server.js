import express from 'express';
import path from 'path';
const __dirname = path.resolve();

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/src/views');

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
});
