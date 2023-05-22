import mongoose from "mongoose";

const dbConnection= ()=>{
    mongoose.connect(process.env.DB_CNN,{
            useNewUrlParser: true, 
            useUnifiedTopology: true
    })
    .then(()=>console.log("DB Online"))
    .catch((err)=>console.log(`${err} did not connect`))
}

export default dbConnection;