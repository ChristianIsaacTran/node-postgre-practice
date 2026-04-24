# purpose of this repo

- This is going over the "using postgreSQL" lesson on the odin project. It is finally combining SQL and
  the backend express stuff together.

## assignment requirements

- The project should be a basic express application that has one feature: adding usernames provided by the user
  into the database.

- The routes needed are:

        - GET / - logs availble usernames in the database to the terminal. console.logs them for display.

        - GET /new -  displays an HTML form that the user inputs the username to insert into the database into the text field. This form will submit to the next route.

        - POST /new - saves incoming username data to the database from the submitted form. For now, just logging it into console.log().

- Will move onto the next section for postgreSQL once this basic functionality is done.

## .env files in local device need to be explicitly called in --env-file=.env

- So I am stupid.

- .env files need to be ran locally with the added CLI argument:

  --env-file=pathToFile/.env

  ex:

  node --env-file=.env --watch app.js

- MAKE SURE TO INCLUDE THE --env-file AND TELL NODE.JS WHERE THE .env FILE IS OR THE ENVIRONMENT VARIABLES WON'T BE LOADED IN PROPERLY.

## VScode debugger envFile attribute

- In VScode, the debugger can be mounted with launch.json with configurations, but don't automatically call --env-file argument by default.

- To load a .env file into a debugger, there is a dedicated "envFile" attribute in the launch.json that I can give the filepath of the .env to load it.

- Another way to do it is to load the command line argument with the "args" attribute and pass the --env-file argument manually.

ex:

"args":["--env-file=.env"]

## extra assignment requirements:

1. implement environment variables for db connection information (done)

2. add search functionality via query parameters to index route. Should search database for
   query parameter inputs. DON'T IMPLEMENT SEARCH LOGIC IN JAVASCRIPT, SEARCH SHOULD BE DONE IN SQL IN DATABASE QUERIES. (done)

3. add new route GET /delete that deletes all usernames from the database

## notes to self:

- In pg (node-postgre library), the parameterized query treats the substitution variables as a WHOLE value. So the $1 will be treated as a whole value so I had to pass the wildcards with it as well to prevent the $1 being treated like a string.

      ex:

      // this did not work since surrounding $1 made it a string
      pool.query("SELECT * FROM usernames WHERE username LIKE %$1%", [parameter]);

      // had to pass the wildcards WITH the parameter value
      pool.query("SELECT * FROM usernames WHERE username LIKE $1", [`%${parameter}%`]);
