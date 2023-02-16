


exports.Manage_emp = (req, res) => {

    if( req.session.role === "admin" ){
        res.render('template',{
            session_user_id:req.session.user_id,
            session_user:req.session.user,
            session_role:req.session.role,
            header:"Manage Employee",
            file:'admin_page/manage_emp'
        });
    }else{
        res.redirect('/');
    }

};