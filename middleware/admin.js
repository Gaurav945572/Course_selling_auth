const {Admin} = require("../db/index.js");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB.
    // Check readme for the exact headers to be expected
    const usernameResponse = req.headers.username;
    const passwordResponse = req.headers.password;
    
    let existingElement =await Admin.findOne({username: usernameResponse,password: passwordResponse});
    if(existingElement){
        console.log("Admin exist");
        next();
    }
    else{
        res.status(403).json({
            msg: "Admin doesn't exist"
        })
    }
}

module.exports = adminMiddleware;
