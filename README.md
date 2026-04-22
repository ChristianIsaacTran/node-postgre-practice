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