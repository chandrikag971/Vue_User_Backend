import mysql from 'mysql';

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'chandu'
});

export const login=function(req,res){
	var email=req.body.email;
    var password=req.body.password;
    connection.query('select * from authentication where email="'+email+'" ', function (error, results, fields) {
      if (error) throw error;

      else if(results.length >0){
          if(password==results[0].password){
              console.log('successfully authenticated');
              res.send('successfully authenticated');
            } 
            else {
                console.log("Email and password does not match");
                res.send("Email and password does not match");
            }
        }
        else {
            console.log("Email does not exits");
            res.send("Email does not exits");
        }
    });
}