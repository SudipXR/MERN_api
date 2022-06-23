const express = require("express");
const app = express();
const routes = require("./routes/route");

// http://localhost:9001/api/v1
app.use("/api/v1/", routes);

// initial err handling middleware
app.use((req, res, next) => {
    next({
        status: 404,
        msg: 'Not found'
    })
});

// error page handling(err handling middleware)
app.use((error, req, res, next) => {
    let status = error.status || 500;
    let msg = error.msg || "Server Error";
    console.error(error);

    res.status(status).json({
        result: null,
        msg: msg,
        status: false
    })
});

app.listen(9002, 'localhost', (err) => {
    if(err){
        console.error("APP: ", err);
        console.log("Error listening 9001");
    } else{
        console.log("Server listening to port 9002.");
        console.log("Press CTRL+C to end server.")
    }
});