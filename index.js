import express from 'express';

import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js'; 

import { register,registeredList } from './controllers/register.js';

import { login } from './controllers/Login.js';
//import registerController from './controllers/register-controller.js';

//import Register from './controllers/db.js';

const app = express();
const PORT = 5000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //res.header("Access-Control-Allow-Methods","*");
  next();
});


//var authenticateController=require('./controllers/authenticate-controller');
//import { registerController } from './controllers/register-controller.js';

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.post('/register',register);

app.get('/registeredList',registeredList);

app.post('/login',login);

app.use('/users', usersRoutes);

//app.post('/register',Register);

app.get('/', (req, res) => res.send('Hello from Homepage.'));

//app.get('/', (req, res) => res.send('POST ROUTE REACHED.'));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));