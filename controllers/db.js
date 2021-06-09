import mysql from 'mysql';
import { v4 as uuidv4 } from 'uuid';
//var my_sql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'chandu'
});
 
// connection.connect();
connection.connect(function(err) {
    if (err) {
        console.error('CONNECT FAILED', err.code);
        // setTimeout(startConnection, 2000);
    }
    else
        console.error('CONNECTED');
});

let users=[]

export const getResults = function(req,res) {
	//console.log("Mem.;oo");
	var sql = "SELECT id from users";
	let query = connection.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log("Result: " + result);
        // var data = []
        // result.forEach((x, i) => { 
        // 	console.log(x);
        // 	data.push(x)
        // 	// data.push({"name": x.name, "age": x.age, "gender": x.gender, "id": x.id})
        // })
        res.send(result)
    });
}

export const insertUser = function(req,res) {
	let values={
		"name":req.body.name,
		"age":req.body.age,
		"gender":req.body.gender
		//"id":req.body.id
	}
	let id=uuidv4();
	let sql="insert into users(name,age,gender,id) values ('"+ values["name"] +"'," + values["age"]+ ",'"+ values["gender"]+  "','"+ id+"')";
	console.log(sql)
	let query=connection.query(sql,(err, result) => {
		if (err) throw err;
		console.log("no.of rows inserted into the table : "+result.affectedRows);
		res.send("no.of rows inserted into the table : "+result.affectedRows)
	});
}

export const getSpeuser = function(req,res) {
	const { id }=req.params;

	let sql="select name, age, gender from users where id= "+ mysql.escape(id);
	console.log(sql)
	let query=connection.query(sql,(err, result) => {
		if (err) throw err;
		console.log(result);
		res.send(result)
	});
}

export const deleteuser = function(req,res) {
	const { id }=req.params;
	let sql="delete from users where id= " +mysql.escape(id);
	console.log(sql)
	let query=connection.query(sql,(err, result) => {
		if (err) throw err;
		console.log("no.of records deleted: "+result.affectedRows);
		res.send("no.of records deleted: "+result.affectedRows);
	});
}

export const updateuser = function(req,res) {
	const id = req.params.id;
	let values={
		"name":req.body.name,
		"age":req.body.age,
		"gender":req.body.gender
	}
	//const { name, age, gender} = req.body;
	let sql="UPDATE users SET name = '"+ values["name"] +"', age=" + values["age"] + ", gender='"+values["gender"]+"' WHERE id = '"+id+"'";
	//var sql = "UPDATE users set ? WHERE id = ?";
	console.log(sql);
	console.log(values)
	//if(name) req.body.name = name;
	//if(age) req.body.age = age;
	//if(gender) req.body.gender = gender;
	let query=connection.query(sql,(err,result,fields) => {
		if (err) throw err;
		console.log("no.of records updated "+result.affectedRows);
		res.send("no.of records updated "+result.affectedRows);
	});
}















/*export const deleteuser= function(req,res) {
	var sql="delete from users where name='chandu'";
	let query=connection.query(sql,(err, result,fields) => {
		if (err) throw err;
		console.log("no.of rows deleted from the table : "+result.affectedRows);
		res.send("no.of rows deleted from the table : "+result.affectedRows)
	});
}

export const updateuser= function(req,res) {
	var sql="update users set id='555' where id='553'";
	let query=connection.query(sql,(err, result,fields) => {
		if (err) throw err;
		console.log("no.of records updated in the table : "+result.affectedRows);
		res.send("no.of records updated in the table : "+result.affectedRows)
	});
} */