
// importing the "Pool" object from pool.js that acts as a "pool of clients", which allows extended connections with the database
const pool = require("./pool");

// gets all usernames from the usernames table in the database, then returns it
async function getAllUsernames() {
    const {rows} = await pool.query("SELECT * FROM usernames");
    return rows;
}

// inserts the given username into the username column in the usernames table
async function insertUsername(username) {

    // this query uses postgreSQL "parameterized queries" which safely injects the SQL query with the provided parameter
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);

    /*
        parameterized queries: 
        - represented with a dollar sign and a numerical index of the array (non-zero index, so it starts with 1)

        ex: 
        VALUES($1), [username]  <--- this replaces $1 with username. 

        VALUES($1, $2), [username, password] <--- replaces $1 with username and $2 with password and so on.

        - This parameterized queries are to prevent malicious SQL query submissions. If I just concatenated a string into 
        the SQL query, I am at risk of an SQL injection attack, which a user could submit something that would kill my database/table.
        
        - parameterized queries let postgreSQL handle the substitution to keep data secured and unaltered. Refer to postgreSQL documentation for 
        which data types the values turn into when substituted.
    */
}

module.exports = {
    getAllUsernames,
    insertUsername
};