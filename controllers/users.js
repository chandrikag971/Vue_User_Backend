import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req,res) => {
	res.send(users);
}

/*export const createUser = function (req,res) {
	const user= req.body;


	users.push({...user,id: uuidv4() });

	res.send(`User with the name ${user.name} added to the database!`);
}
*/
export const getUser = (req, res) => {
	const { id }=req.params;
	//const { name, Age, Gender, id }

	const foundUser = users.find((user) => user.id = id);

	res.send(foundUser);
}

export const deleteUser = (req,res) => {
	const { id }=req.params;

	users = users.filter((user) => user.id != id);

	res.send(`User wih the id ${id} deleted from the database.`);
}

export const updateUser = (req,res) => {
	const { id } = req.params;
	const { name, Age, Gender} = req.body;
	const user=users.find((user) => user.id=id);

	if(name) user.name = name;
	if(Age) user.Age = Age;
	if(Gender) user.Gender = Gender;

	res.send(`User with the id ${id} has been updated`);

}