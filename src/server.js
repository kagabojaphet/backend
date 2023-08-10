import  express  from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app=express ();
dotenv.config();
app.use(bodyparser.json());

const port=process.env.PORT;
const database=process.env.DATABASE_URL;

const startserver=()=>{
    app.listen(port)
}
const con=()=>{

mongoose.connect(database,{
    // userNewUrlParser:true,
    useUnifiedTopology:true
})

}
Promise.all([con(),startserver()]).then(()=>{
    console.log(`database successfull connected`);
    console.log(`port running on ${port} `)
})
.catch((err)=>{
    console.log(err);
})

export default app;