import express from 'express';

//import { getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';
import { getResults,insertUser,getSpeuser,deleteuser,updateuser } from '../controllers/db.js';

//import {Register} from '../controllers/db.js';

const router = express.Router();

router.get('/',getResults);

router.get('/getdb',getResults);

router.post('/', insertUser);

router.get('/:id', getSpeuser);

router.post('/del/:id', deleteuser);

router.post('/:id',updateuser);

//router.post('/register',Register);

//router.get('/register',Register);

//router.post('/login',Login);

//router.get('/deldb', deleteuser);

//router.get('/upddb', updateuser);

//router.post('/',insertUser); 

//router.get('/:id', getUser); 

//router.delete('/:id', deleteUser);

//router.patch('/:id',updateUser);

export default router;