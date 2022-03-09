const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://saurabh:Nagar@98@cluster0.beuwb.mongodb.net/auth?retryWrites=true&w=majority',{useNewUrlParser: true,
useUnifiedTopology: true,});

const db=mongoose.connection;
db.on('error',()=>{
    console.log("Error in connecting to db");
});
db.once('open',()=>{
    console.log("Server is connected to database successfully");
});

module.exports=db;