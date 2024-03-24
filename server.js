import express  from "express";
import dbconnect  from "./db.js";
import router from "./routes/router.js";

const app=express();
 
// middlewares
app.use(express.json());  
app.use("/api",router);  
  
// server listening
app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`);
});

// database connection
dbconnect();