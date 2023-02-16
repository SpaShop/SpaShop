
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/SpaShop');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



const employee = new mongoose.Schema({
    Emp_FName : String ,
    Emp_LName : String ,
    Emp_Address : String ,
    Emp_Email : String ,
    Emp_Tel : String ,
    Emp_Username : String ,
    Emp_Password : String ,
    Emp_Flag_login : Number ,
    Emp_Flag : Number ,
    Position_id : Number 
});








module.exports.EmployeeModel = mongoose.model('Employee', employee);



// module.exports.mongoose =  mongoose;
// exports.connection = connection;