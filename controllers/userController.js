// database operations from db/queries.js 
const db = require("../db/queries");


// gets usernames from database and displays them on root route
exports.getUserNames = async (req, res) => {
    // console.log("usernames will be logged here - wip");

    // get usernames from the database
    const usernames = await db.getAllUsernames();

    res.render("index", {title: "Username Display", usernames: usernames});
};

// renders the form to input usernames into
exports.getForm = async (req, res) => {
    res.render("new", {title: "Username Form"});
};


//
exports.postForm = async (req, res) => {
    // console.log("username to be saved: ", req.body.username);

    //get form data from form encoder
    const {username} = req.body; 

    // post submitted username to the database
    await db.insertUsername(username);

    // redirect user back to home to view username
    res.redirect("/");
};