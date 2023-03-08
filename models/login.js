const con = require('../config/db_config.js')
const sha = require('../config/encrypt')


exports.vertify_login = async (input) => {
    let sql = ` SELECT em.id ,em.f_name,em.l_name ,em.position_id , em_pos.name as position FROM employee em , employee_position em_pos 
                where em_pos.id = em.position_id and em.username = '${input.user}' and em.password = '${sha.encrypt(input.pwd)}' and em.flag = ${1}`
    let result = await con.query(sql)
    // console.log(result);
    if( result.length > 0 ){
        return result[0];
    }else{
        return undefined;
    }
};







/*
    ---- Pattern ---
    let sql = ` SELECT em.id ,em.f_name,em.l_name , em_pos.name as position FROM employee em , employee_position em_pos 
                    where em_pos.id = em.position_id and em.username = '${input.user}' and em.password = '${sha.encrypt(input.pwd)}' and em.flag = ${1}`
    let result = await con.query(sql)
    // console.log(result);
    if( result.length > 0 ){
        return result[0];
    }else{
        return undefined;
    }

    --- Pattern Get ---
    let result = await data_login.vertify_login(req.body);
*/

