const router = require('express').Router();
const AuthController = require("../app/controllers/auth.controller");
const auth_ctrl = new AuthController();

// http://localhost:9002/api/v1/register
router.post("/register", auth_ctrl.register);

// http://localhost:9002/api/v1/login
router.post("/login", auth_ctrl.login);

module.exports = router;