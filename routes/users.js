import express from 'express';

//import { getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';
import { getResults,insertUser,getSpeuser,deleteuser,updateuser } from '../controllers/db.js';

const router = express.Router();

router.get('/',getResults);

router.get('/getdb',getResults);

router.post('/', insertUser);

router.get('/:id', getSpeuser);

router.delete('/:id', deleteuser);

router.post('/:id',updateuser);

//router.get('/deldb', deleteuser);

//router.get('/upddb', updateuser);

//router.post('/',insertUser); 

//router.get('/:id', getUser); 

//router.delete('/:id', deleteUser);

//router.patch('/:id',updateUser);

export default router;