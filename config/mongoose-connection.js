const mongoose=require('mongoose')

mongoose
.connect('your_mongodb_database_uri')
.then(function(){
    console.log("MongoDB Connected.");
})
.catch(function(err){
    console.log(err);
})

module.exports=mongoose.connection;
