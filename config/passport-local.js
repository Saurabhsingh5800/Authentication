const passport=require('passport');
const localstrategy=require('passport-local').Strategy;
const user=require('../models/user');

passport.use(new localstrategy({
    usernameField:'email',
    passReqToCallback:true
},function(req,Email,password,done){
   user.findOne({email:Email},function(err,USER){
        if(err){return done(err);}
        if(!USER || password!=USER.password){
            req.flash('error','username/password wrong');
            return done(null,false);
        }else{
            req.flash('success','you are logged in');
         return done(null,USER);
        }
    });

}));

passport.serializeUser(function(USER,done){
       return done(null,USER.id);                         // user.id and user._id are same
});

passport.deserializeUser(function(id,done){
   user.findById(id,function(err,USER){
     if(err){
         return done(err);
     }
     return done(null,USER);
    });
});

passport.checkAuthentication=function(req,res,next){
    if(req.isAuthenticated()){
       return next();
    }
    return res.redirect('/users/login');
}

passport.setUserToLocals=function(req,res,next){
   if(req.isAuthenticated()){
    res.locals.user=req.user;
    }
    next();
}



module.exports=passport;