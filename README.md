# Authentication_System
Starter code of any website having authentication System ,I have used passport local strategy and passport google oauth2
the hosted link is-https://auth-saurabh-singh.herokuapp.com/

# How-To-Use
Clone this project\
Start by installing npm and mongoDB if you don't have them already.\
Run the Mongo Server.\
Create a google login credentials and subsequently a google Oauth ID. Refer this : https://developers.google.com/identity/protocols/oauth2 .Don't share these crednetials with anyone.\

# Basic-Features
Basic Sign up and Sign in functionality with proper authentication on backend (Manual and Google OAuth both).\
Mailer for forgot password.\

# Directory Structure and flow of The Code
This code follows MVC pattern and hence everything is differentiated and well managed:

/routes - containes all the routes.

/assets - static js css and image files.

/controller - contains functions to connect to different views.

/models - to store data in db we need models.

/config - contains config files for mongoos, passport, node mailer or any other configs.

/views - used by ejs(templating engine) for server side rendering.

/mailers - used by nodemailer for basic mailing functionalies

Feel free to use and contribute! :)
