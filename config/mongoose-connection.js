const mongoose=require('mongoose')

mongoose
.connect('mongodb+srv://anilpython7877:GZ6t7pp2aDaXxEoG@cluster0.2gx7j.mongodb.net/scratch_ecommerce?retryWrites=true&w=majority&appName=Cluster0')
.then(function(){
    console.log("MongoDB Connected.");
})
.catch(function(err){
    console.log(err);
})

module.exports=mongoose.connection;