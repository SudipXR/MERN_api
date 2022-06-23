const express = require("express");
const app = express();

const user_routes = require('./user.routes');
const auth_routes = require('./auth.routes');

// http://localhost:9002/api/v1/
app.get("/", (req, res, next) => {          // Application & Custom level middleware
    res.json({
        result: {
            banner: [],
            category: [],
            products: [],
            ads: []
        },
        msg: "Home page",
        status: true
    });
        
});

// http://localhost:9001/api/v1/
app.post("/", (req, res, next) => {
    res.json({
        result: "Post test",
        msg: "Success",
        status: true
    })
});

// http://localhost:9001/api/v1/about
app.use("/about", (req, res, next) => {
    // about content
    res.json({
        result: "",
        msg: "",
        status: true
    })
});

// http://localhost:9001/api/v1/product/3
app.get("/product/:id", (req, res, next) => {
    res.json({
        result: {
            params: req.params,
            query: req.query,
            body: req.body
        }
    })
});

app.use('/user', user_routes);
app.use('/', auth_routes);

module.exports = app;