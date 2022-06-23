class AuthService{
    loginValidate = (data) => {
        let error = {};
        if(!data.email){
            error['email'] = "Email is required.";
        } else{
            delete error['email'];
        };
        if(!data.password){
            error['password'] = "Password is required.";
        } else{
            delete error['password'];
        };

        if(Object.keys(error).length){      // False value 0
            console.log(error);
            throw error;
        } else{
            return data;
        };
    }
}

module.exports = AuthService;