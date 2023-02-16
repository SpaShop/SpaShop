
const data_login = require('../models/login');

exports.logout = (req, res) => {
    req.session.destroy(function(err){});
    res.redirect('/');
};


exports.getLogin = (req, res) => {


    
    
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
        if(result !== ""){  
            req.session.user_id = result.id;
            req.session.user = result.Emp_FName + " " + result.Emp_LName;
           
            if( result.position === "Admin"){
                req.session.role = 'admin';
            }else if( result.position === "Employee"){
                req.session.role = 'emp';
            }
            // console.log(req.session.role);
            res.send({success:1,path:`/${req.session.role}`});

            
        }else{
            res.send({error:1,code:'รหัสไม่ถูกต้อง'});
        }

        // console.log(result);
    }
    
        
};


exports.vertify_ensure_password = async (req, res) => {
    console.log(req.body);
    res.send({error:1});     
};
