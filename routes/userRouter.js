const {Router} = require("express");
const userController = require("../controllers/userController");

const userRouter = Router();

// root (/) route displays the usernames from the database
userRouter.get("/", userController.getUserNames);

// /new route that gets form for username input
userRouter.get("/new", userController.getForm);


module.exports = userRouter;

