
// Custom middleware

const loginCheck = (req, res, next) => {
    // TODO: Login check
    let is_login = true;
    if(is_login){
        next();
    } else{
        // res.status(401).json({
        //     result: null,
        //     msg: "Unauthorized",
        //     status: false
        // })
        next({
            status: 401,
            msg: "Unauthorized"
        })

    }
}

module.exports = loginCheck;