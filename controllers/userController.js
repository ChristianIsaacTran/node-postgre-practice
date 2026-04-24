// database operations from db/queries.js
const db = require("../db/queries");

// gets usernames from database and displays them on root route
exports.getUserNames = async (req, res) => {
  // console.log("usernames will be logged here - wip");

  // get usernames from the database

  //if there are query parameters in root route, then search render
  if (Object.keys(req.query).length !== 0) {
    // send search query param to db method
    const searchedUsernames = await db.getSearchedUsernames(req.query.search);
    
    return res.render("index", {
      title: "Searched Username Display",
      usernames: searchedUsernames,
    
    });
  }
  //   otherwise, normal full database render without search
  else {
    const usernames = await db.getAllUsernames();
    return res.render("index", {
      title: "Username Display",
      usernames: usernames,
    });
  }
};

// renders the form to input usernames into
exports.getForm = async (req, res) => {
  res.render("new", { title: "Username Form" });
};

//
exports.postForm = async (req, res) => {
  // console.log("username to be saved: ", req.body.username);

  //get form data from form encoder
  const { username } = req.body;

  // post submitted username to the database
  await db.insertUsername(username);

  // redirect user back to home to view username
  res.redirect("/");
};

exports.deleteUsernames = async (req, res) => {
    
    // send delete request to database
    await db.deleteUsernames();

    // confirm delete in console
    console.log("Delete all records from database.");

    res.redirect("/");
};
