const {User} = require("../db/index.js");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB.
    // Check readme for the exact headers to be expected
    const usernameResponse = req.headers.username;
    const passwordResponse = req.headers.password;
    

    let existingElement = await User.findOne({username:usernameResponse,password:passwordResponse});
    if(existingElement){
        console.log("User has been found")
        next();
    }
    else{
        res.status(403).json({
            msg: "User doesn't exist"
        })
    }
}

module.exports = userMiddleware;
