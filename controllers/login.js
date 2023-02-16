
// const login = require('../models/login')

const data_login = require('../models/login');

// exports.logout = (req, res) => {
//     req.session.destroy(function(err){});
//     res.redirect('/');
// };

exports.getLogin = (req, res) => {


    // req.session.user_id = 47;
    // req.session.user = "ภูริกรณ์ ทองย้อย";
    // req.session.role = "admin";
    
    if( req.session.user_id ){
        res.render('main_page',{
            session_user_id:req.session.user_id,
            session_user:req.session.user,
            session_role:req.session.role,
        });
    }else{
        res.render('login', {status_login:[],error_code:0});
        
    }
    


};



exports.vertify_login = async (req, res) => {
    // console.log(req.body);
    

    if(req.body.user && req.body.pwd ){
        let result = await data_login.vertify_login(req.body);
        if(result !== ""){  
            res.send({success:1});
            // req.session.user_id = 47;
            // req.session.user = "ภูริกรณ์ ทองย้อย";
            // req.session.role = "admin";
            
        }else{
            res.send({error:1,code:'รหัสไม่ถูกต้อง'});
        }

        console.log(result);
    }
    
        
};


exports.vertify_ensure_password = async (req, res) => {
    console.log(req.body);
    res.send({error:1});     
};
