import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js'; 

const app = express();
const PORT = 5000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //res.header("Access-Control-Allow-Methods","*");
  next();
});


app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage.'));

//app.get('/', (req, res) => res.send('POST ROUTE REACHED.'));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));