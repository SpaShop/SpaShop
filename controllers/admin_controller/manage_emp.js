
const model = require('../../models/employee');

exports.Manage_emp = async (req, res) => {

    if( req.session.role === "admin" ){
        let db_employee =  await model.get_emp();
        let db_position =  await model.get_position();
        // console.log("#",db_employee);
        res.render('template',{
            session_user_id:req.session.user_id,
            session_user:req.session.user,
            session_role:req.session.role,
            db_employee:db_employee,
            db_position:db_position,
            header:"Manage Employee",
            file:'admin_page/manage_emp'
        });
    }else{
        res.redirect('/');
    }

};

exports.setEmployee =async (req, res) => {
    if(req.session.role == "admin"){
        if(req.params.action === "add"){
            // is match with old data
            // let isVali = await data_manage.getValidation_NAME_USERNAME(req.body).then((data)=>{return data})
            // if(isVali === true){
            //     data_manage.setData_Employee(req.body).then(()=>{
            //         res.redirect("/admin/manage_employee");
            //     });
            // }else{
            //     res.redirect("/admin/manage_employee?error=1");
            // }
            
        }else if(req.params.action === "delete"){
            // data_manage.deleteData_Employee(req.body).then(()=>{
            //     res.redirect("/admin/manage_employee");
            // });
        }else if(req.params.action === "update"){
            // is match with old data
            // let isVali = await data_manage.getValidation_NAME_update(req.body).then((data)=>{return data})
            // if(isVali === true){
            //     data_manage.updateData_Employee(req.body).then(()=>{
            //         console.log("update done");
            //         res.redirect("/admin/manage_employee");
            //     });
            // }else{
            //     res.redirect("/admin/manage_employee?error=2");
            // }
        }
    }else{
        res.redirect("/");
    }
};

// setEmployee