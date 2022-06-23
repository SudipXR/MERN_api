// role based access control

const isAdmin = (req, res, next) => {
    let role = "admin";
    if(role === 'admin'){
        next();
    } else{
        next({
            status: 403,
            msg: 'Unauthorized'
        })
    }
};

const isCustomer = (req, res, next) => {
    let role = "customer";
    if(role === 'customer'){
        next();
    } else{
        next({
            status: 403,
            msg: 'Unauthorized'
        })
    }
};

const isSeller = (req, res, next) => {
    let role = "seller";
    if(role === 'seller'){
        next();
    } else{
        next({
            status: 403,
            msg: 'Unauthorized'
        })
    }
};

module.exports = {
    isAdmin,
    isCustomer,
    isSeller
};
