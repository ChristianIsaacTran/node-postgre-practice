const { Router } = require("express");
const userController = require("../controllers/userController");

const userRouter = Router();

// root (/) route displays the usernames from the database. Adding search functionality that renders view with search query parameters
userRouter.get("/", userController.getUserNames);

// /new route that gets form for username input
userRouter.get("/new", userController.getForm);

// /new route that posts the form data to the database
userRouter.post("/new", userController.postForm);

//  /delete route that deletes all useranames from the database table 
userRouter.get("/delete", userController.deleteUsernames);

module.exports = userRouter;
