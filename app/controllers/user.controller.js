class UserController{
    getAllUsers = (req, res, next) => {
        // 
        res.json({
            result: [],
            msg: 'Fetched all users',
            status: true
        })
    } 

    updateUserByID = (req, res, next) => {
        res.json({
            result: {
                params: req.params,
                query: req.query,
                body: req.body
            },
            msg: "Update user."
        })    
    }
    
    deleteUserByID = (req, res, next) => {
        res.json({
            result: {
                params: req.params,
                query: req.query,
                body: req.body
            },
            msg: "Delete user."
        })
    }
    
    getUserByID = (req, res, next) => {
        res.json({
            result: {
                params: req.params,
                query: req.query,
                body: req.body
            },
            msg: "Fetch user."
        })
    }
}

module.exports = UserController;