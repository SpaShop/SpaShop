
const data_login = require('../models/login');

exports.logout = (req, res) => {
    req.session.destroy(function(err){});
    res.redirect('/');
};


exports.getLogin = (req, res) => {
    // TEST
    req.session.user_id = 1;
    req.session.user = "hello hello";
    req.session.role = 'admin';
    // TEST


    if( req.session.user_id ){
        res.redirect(`/${req.session.role}`)
    }else{
        res.render('login', {status_login:[],error_code:0});
    } 

};



exports.vertify_login = async (req, res) => {
    // console.log(req.body);
    if(req.body.user && req.body.pwd ){
        let result = await data_login.vertify_login(req.body);
        // console.log("#",result);
        if( result !== undefined ){  
            req.session.user_id = result.id;
            req.session.user = result.f_name + " " + result.l_name;
            if( result.position_id === 1){
                req.session.role = 'admin';
            }else if( result.position_id === 2){
                req.session.role = 'emp';
            }
            // console.log(req.session.role);
            res.send({success:1,path:`/${req.session.role}`});

            
        }else{
            res.send({error:1,code:'รหัสไม่ถูกต้อง'});
        }

    }
        
};


exports.vertify_ensure_password = async (req, res) => {
    console.log(req.body);
    res.send({error:1});     
};
