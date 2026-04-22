const express = require("express");
const path = require("node:path");

const app = express();

// setting static assets location
const staticAssetsPath = path.join(__dirname, "public");
app.use(express.static(staticAssetsPath));

// setting view engine and views location for EJS templates
const viewsPath = path.join(__dirname, "views");
app.set("views", viewsPath)
app.set("view engine", "ejs");

// default port variable
const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
    if(error) {
        console.log(error);
        throw error;
    }

    console.log("server is running.");
});

