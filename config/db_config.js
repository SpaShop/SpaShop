
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/SpaShop');
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
    Position_id : Number ,
    id : Number 
});

const employee_position = new mongoose.Schema({
    name : String ,
    id : Number 
});



module.exports.Emp_Model = mongoose.model('Employee', employee);
module.exports.Emp_posiiton_Model = mongoose.model('Employee_position', employee_position);



// module.exports.mongoose =  mongoose;
// exports.connection = connection;