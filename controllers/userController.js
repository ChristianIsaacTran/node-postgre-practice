
// gets usernames from database and displays them on root route
exports.getUserNames = (req, res) => {
    console.log("usernames will be logged here - wip");
    res.render("index", {title: "Username Display"});
};

// renders the form to input usernames into
exports.getForm = (req, res) => {
    res.render("new", {title: "Username Form"});
};


//
exports.postForm = (req, res) => {
    console.log("username to be saved: ", req.body.username);
};