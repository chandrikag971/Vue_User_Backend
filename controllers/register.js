//import connection from '../controllers/db.js';
import mysql from 'mysql';
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'chandu'
});
 


// // connection.connect();
// connection.connect(function(err) {
//     if (err) {
//         console.error('CONNECT FAILED', err.code);
//         // setTimeout(startConnection, 2000);
//     }
//     else
//         console.error('CONNECTED');
// });

export const register = function(req,res) {
    var details={
        "FirstName":req.body.FirstName,
        "LastName":req.body.LastName,
        "email":req.body.email,
        "password":req.body.password,
        "DateOfBirth":req.body.DateOfBirth
    }
    console.log("values are testing");
    connection.query('select * from authentication where email="'+details.email+'" ', (err, result) => {
        if (err) throw err;
        else if (result.length>0){
            console.log("user already registered");
            res.send("user already registered");
        }
        else {
            let sql="insert into authentication(FirstName,LastName,email,password,DateOfBirth) values ('"+ details["FirstName"] +"','" + details["LastName"]+ "','"+ details["email"]+  "','"+ details["password"] +"','"+ details["DateOfBirth"] +"')";
            console.log(sql);
            console.log(details);
            let query=connection.query(sql,(err,result,fields) => {
                if (err) throw err;
                console.log("user registered successfully");
                res.send("user registered successfully");
            });
        }
        //connection.end();
    });
}


export const registeredList = function(req,res) {
    //console.log("Mem.;oo");
    var sql = "SELECT * from authentication";
    let query = connection.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    });
}

// connection.query('INSERT INTO users SET ?',details, function (error, results, fields) {
    //   if (error) {
    //     res.json({
    //         status:false,
    //         message:'there are some error with query'
    //     })
    //   }else{
    //       res.json({
    //         status:true,
    //         data:results,
    //         message:'user registered sucessfully'
    //     })
    //   }
    // });

// if (err) {
//             console.log("error")
//             res.json({
//                 status:false,
//                 message:'there are some error with query'
//             })
//         }
//         else{
//             res.json({
//                 status:true,
//                 data:results,
//                 message:'user registered sucessfully'
//             })
//         }