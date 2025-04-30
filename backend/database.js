const mongoose=require('mongoose');
async function dbConn(){
    const conn = await mongoose.connect('mongodb+srv://gaurav:roott@cluster0.8iejxjz.mongodb.net/crud-live-aiml?retryWrites=true&w=majority&appName=Cluster0');
    if(conn){
        console.log("database connect successfully");
    }
    else{
        console.log("database not connect")
    }
}
module.exports=dbConn;