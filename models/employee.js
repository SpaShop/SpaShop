const con = require('../config/db_config.js')

exports.get_emp = async () => {
    let sql = ` SELECT em.id,em.f_name,em.l_name,em.address,em.email,em.tel,em_pos.name as position  FROM employee em , employee_position em_pos 
                where em_pos.id = em.position_id and flag = 1`
    let result = await con.query(sql)
    return result;
};
exports.get_position = async () => {
    let sql = ` SELECT * FROM employee_position `
    let result = await con.query(sql)
    return result;
};


exports.insert_emp = async () => {
    let sql = ` INSERT INTO employee( f_name , l_name , address , email , tel , username , password , position_id , flag_login , flag) 
                VALUES ("${data.Fname}", "${data.Lname}", "${data.address}","${data.email}", "${data.tel}","${data.username}","",${data.position} , 0 , 1);`
    let result = await con.query(sql)
};




exports.is_duplicate_name = async (input) => {
    /**
     * f_name , l_name
     */
    
    let sql = ` SELECT * FROM employee WHERE f_name = '${input.f_name}' and l_name = '${input.l_name}' and flag = 1 `
    let result = await con.query(sql)
    if( result.length > 0 ){
        return true;
    }else{
        return false;
    }
};
exports.is_duplicate_name_id = async (input) => {
    /**
     * f_name , l_name
     * id
     */
    
    let sql = `SELECT * FROM employee WHERE f_name = '${input.Uf_name}' and l_name = '${input.Ul_name}' and id =${input.Uid}  and flag = 1 `
    let result = await con.query(sql)
    if( result.length > 0 ){
        return true;
    }else{
        return false;
    }
};
