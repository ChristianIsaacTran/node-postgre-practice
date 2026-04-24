// importing the "Pool" object from pool.js that acts as a "pool of clients", which allows extended connections with the database
const pool = require("./pool");

// gets all usernames from the usernames table in the database, then returns it
async function getAllUsernames() {
  /* 
    pool.query returns a "result" object if the query was successful. 
    "rows" is a variable from the result object that contains an array of the row data from the query. Structured like a .json file 
    */
  const { rows } = await pool.query("SELECT * FROM usernames");

  return rows;
}

// gets all usernames from usernames table filtered based on given searchParam, then returns it
async function getSearchedUsernames(searchParam) {
  // uses the LIKE clause with the WHERE clause to filter column results in the username column from the usernames table
  // remember that in the LIKE clause, percent signs are "wildcards" that match any number of characters and underscores match single character
  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE LOWER(username) LIKE LOWER($1)",
    [`%${searchParam}%`],
  );

  // note: parameterized query treats $1 as a WHOLE SINGLE value, so the wildcards need to be passed with the value itself. It's not like a template string.
  // note: also added LOWER() SQL function to make the query case-insensitive for easier searching.

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

async function deleteUsernames() {
    // SQL delete all records inside the usernames table, WITHOUT dropping any columns or tables
    await pool.query("DELETE FROM usernames");

    // note: in SQL, DELETE doesn't need wildcard because it always operates on a row level unlike SELECT which selects columns.
}

module.exports = {
  getAllUsernames,
  getSearchedUsernames,
  insertUsername,
  deleteUsernames,
};
