
const express=require('express');

// define port
const port = process.env.PORT || 8000; 
const app=express();


// for database
const db=require('./config/mongoose');
const user=require('./models/user');


const path=require('path');
// for views part
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


// for layouts
const layouts=require('express-ejs-layouts');
app.use(layouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


app.use(express.urlencoded());

// for static files
app.use(express.static('assets'));


// for passport authentication
const passport=require('passport');
const passportLocalStrategy=require('./config/passport-local');

const session=require('express-session');
const mongoStore=require('connect-mongo')(session);


app.use(session({
   name:'Social',
   secret:'SAURABHSINGH',
   saveUninitialized:false,
   resave:false,
   cookie:{
   maxAge:(1000*60*60)
   },
   store:(new mongoStore({
     mongooseConnection:db,
     autoRemove:'disabled'
   },function(err){console.log(err || "connected to mongostore") }))
}));
 
 app.use(passport.initialize());
 app.use(passport.session());
 app.use(passport.setUserToLocals);

 const passportOauth2startegy=require('./config/passport-google-oauth');

  const flash=require('connect-flash');
  app.use(flash());
  app.use(function(req,res,next){ 
    res.locals.flash={
     'success':req.flash('success'),
     'error':req.flash('error')
    }
    next();
   });


  app.use('/',require('./routes'));

   app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('server is running');
    });