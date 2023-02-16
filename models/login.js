const {EmployeeModel} = require('../config/db_config.js')


exports.vertify_login = async (input) => {
    let result = await EmployeeModel.findOne({ Emp_Username: input.user , Emp_Password: input.pwd })
    return result || ""
};
// exports.get_position = async (input) => {
//     // console.log(input);
//     let result = await EmployeeModel.findOne({ Emp_Username: input.user , Emp_Password: input.pwd })
//     // console.log(result);
//     return result || ""
// };