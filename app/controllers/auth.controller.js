const AuthService = require("../services/auth.service");

class AuthController{
    constructor(){
        this.auth_svc = new AuthService();
    }

    login = (req, res, next) => {
        try{
            let data = req.body;
            let result = this.auth_svc.loginValidate(data);

            // TODO login logic
            res.json({
                result: result,
                msg: "Login successfull",
                status: true
            })
        } catch(error){
            // error
            console.log("LoginException: ", error);
            next({
                status: 400,
                msg: error
            })
        }

        
    }
    
    register = (req, res, next) => {
        let data = req.body;
        if(req.file){
            data.image = req.file.filename;
        }
        try{
            res.json({
                result: {
                    user: req.body,
                },
                status: true,
                msg: "Register"
            })
        } catch(error){
            next({
                status: 400,
                msg: error
            })
        }
    }

}
module.exports = AuthController;