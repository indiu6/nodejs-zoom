import express from 'express';
import path from 'path';
import http from 'http';
import WebSocket from 'ws';

const __dirname = path.resolve();

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/src/views');
app.use('/public', express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.render('home');
});

const handleListen = () => console.log(`Listening on http://localhost:3000`);

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const handleConnection = (socket) => {
  console.log(socket);
};

wss.on('connection', handleConnection);

server.listen(3000, handleListen);
