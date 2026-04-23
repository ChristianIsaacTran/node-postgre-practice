#! /usr/bin/env node

// note: this script is intended to be ran only once for database initial creation.
// ran with: node --env-file=.env db/populatedb.js
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 )
);

INSERT INTO usernames (username)
VALUES
    ('Bryan'),
    ('Odin'),
    ('Damon');
`;

async function main() {
    console.log("seeding...");

    // initializes a client with a connection config
    const client = new Client({
        connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.DB_PORT}/${process.env.DATABASE}`
    });

    // manually connects to database, then queries the SQL I wrote above, then ends the connection to the database after query is successful.
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();