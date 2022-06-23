const router = require('express').Router();
const loginCheck = require("../app/middleware/auth.middleware");
const {isAdmin} = require("../app/middleware/rbac.middleware");         // object destructuring
// const rbac = require("../app/middleware/rbac.middleware");

const UserController = require("../app/controllers/user.controller");
let user_obj = new UserController;


router.route('/')
    // .get(loginCheck, rbac.isAdmin, (req, res, next) => {
    // .get(loginCheck, isAdmin, (req, res, next) => {
    // // TODO: db fetch query execute data return
    // });
    .get(loginCheck, isAdmin, user_obj.getAllUsers);

router.route('/:id')
    // ..../user/:id    ====> Update user by id
    .put(user_obj.updateUserByID)

    // ..../user/:id    ====> Delete user by id
    .delete(user_obj.deleteUserByID)

    // ..../user/:id    ====> Get user by id
    .get(user_obj.getUserByID);

module.exports = router;