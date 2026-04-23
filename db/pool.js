const { Pool } = require("pg");

/*
    - note: 

    the lesson notes that all these configurations should be environment variables (.env), 
    but because it's a lesson it's going to be hardcoded here for learning purposes. In a real application, 
    make sure these are environment variables.

    (FIX: I made them into environment variables inside my .env file because of password sensitivity)
*/

module.exports = new Pool({
    host: process.env.HOST, //the host or wherever the database is located (could be a domain or an ip address depending on where the db is hosted)
    user: process.env.USER, //the database user/username. set in postGreSQL config
    database: process.env.DATABASE, // name of the database I want to connect to. In this lesson I made a db named "top_users" in postgreSQL
    password: process.env.PASSWORD, //password to sign into user to use database
    port: process.env.DB_PORT, // default postgreSQL port is 5432
});

/*
    - the lesson also mentions that the alternative to the above connection information is a "connection URI" that 
    sets the connection information for us in a connection string. This is still sensitive information and should be stored in an environment 
    variable. 

    - connection URI's are usually given from the hosting database service to remotely connect to the database.

    - connection URI's look something like this for example: 

    modules.exports = new Pool({
        connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
    });

*/